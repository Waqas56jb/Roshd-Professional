/**
 * Roshd Professional — Express API.
 * Loads server/.env when running locally. The frontend is a separate app
 * (../client), so this server is API-only.
 */
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';
import { mountAdminExtra } from './admin-extra.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const envPath = path.join(__dirname, '.env');
if (fs.existsSync(envPath)) dotenv.config({ path: envPath });
else dotenv.config();

/** Run HTTP server only when launched directly, not when imported by api/index.js (Vercel). */
function isPrimaryServerEntry() {
  const entry = process.argv[1];
  if (!entry) return false;
  try {
    return path.resolve(entry) === path.resolve(fileURLToPath(import.meta.url));
  } catch {
    return false;
  }
}

const PORT = Number(process.env.PORT) || 5000;
const SUPABASE_URL = process.env.SUPABASE_URL || '';
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY || '';
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || '';

if (!SUPABASE_URL || !SUPABASE_ANON_KEY || !SUPABASE_SERVICE_ROLE_KEY) {
  console.warn(
    '[roshd] Missing SUPABASE_URL, SUPABASE_ANON_KEY, or SUPABASE_SERVICE_ROLE_KEY — auth routes will be unavailable.'
  );
}

// ─── Supabase client initialisation ───────────────────────────────────────────
// IMPORTANT: createClient() calls `new URL(supabaseUrl)` internally.
// If SUPABASE_URL is an empty string (e.g. env vars not set on Vercel), that
// throws TypeError: Invalid URL at module-load time → Vercel surfaces this as
// FUNCTION_INVOCATION_FAILED before any try/catch in a route handler can run.
// Solution: guard initialisation and expose a dbReady() helper for every route.

let supabaseAnon = null;
let supabaseAdmin = null;

try {
  if (SUPABASE_URL && SUPABASE_ANON_KEY) {
    supabaseAnon = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
      auth: { persistSession: false, autoRefreshToken: false },
    });
  }
  if (SUPABASE_URL && SUPABASE_SERVICE_ROLE_KEY) {
    supabaseAdmin = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, {
      auth: { persistSession: false, autoRefreshToken: false },
    });
  }
  if (!supabaseAnon || !supabaseAdmin) {
    console.warn('[roshd] Supabase clients not initialised — environment variables missing.');
  }
} catch (initErr) {
  console.error('[roshd] Failed to initialise Supabase clients:', initErr.message);
}

/** Sends 503 and returns false when Supabase is not configured. */
function dbReady(res) {
  if (!supabaseAnon || !supabaseAdmin) {
    res.status(503).json({
      success: false,
      code: 'missing_config',
      message:
        'Service unavailable: Supabase environment variables (SUPABASE_URL, SUPABASE_ANON_KEY, SUPABASE_SERVICE_ROLE_KEY) are not set on this deployment. Add them in the Vercel project → Settings → Environment Variables.',
    });
    return false;
  }
  return true;
}

// ─── Express app ───────────────────────────────────────────────────────────────

const ALLOWED_ORIGINS = [
  'https://roshd-professional.vercel.app',
  'https://www.roshd-professional.vercel.app',
  'https://roshd-professional-27zf.vercel.app',
  'https://roshd-professional-s8lh.vercel.app',
  'http://localhost:3000',
  'http://localhost:5000',
  'http://127.0.0.1:5000',
  'http://127.0.0.1:3000',
];

const corsOptions = {
  origin: (origin, cb) => {
    // Allow requests with no origin (Postman, server-to-server) or known origins
    if (!origin || ALLOWED_ORIGINS.includes(origin)) return cb(null, true);
    // Unknown origin — still allow but without credentials (don't throw, avoids 500)
    return cb(null, true);
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
  optionsSuccessStatus: 204,
};

const app = express();
app.set('trust proxy', 1);
app.use(cors(corsOptions));
app.options('*', cors(corsOptions)); // Handle all OPTIONS preflight requests
app.use(express.json({ limit: '5mb' }));

/** Customer + admin toolbar filters (same JSON as localStorage `roshd_filter_bar_config`). */

const IS_PRODUCTION_DEPLOY =
  process.env.NODE_ENV === 'production' || process.env.VERCEL === '1';

/**
 * When true: PUT /api/filters and PUT /api/roshd/config require Bearer
 * (ROSHD_DASHBOARD_ADMIN_TOKEN or ROSHD_FILTERS_ADMIN_TOKEN), or loopback + ROSHD_ALLOW_LOCALHOST_UNAUTH_CONFIG_WRITE.
 * Default (unset/false): writes are allowed without a client token (simple admin UX; protect the API URL / deployment).
 */
const ROSHD_REQUIRE_DASHBOARD_WRITE_AUTH =
  process.env.ROSHD_REQUIRE_DASHBOARD_WRITE_AUTH === 'true' ||
  process.env.ROSHD_REQUIRE_DASHBOARD_WRITE_AUTH === '1';

/** Dev-only default Bearer when auth is required and no env token is set (non-production only). */
const ROSHD_LOCAL_DEV_DEFAULT_WRITE_TOKEN = 'roshd-local-default-dashboard-write-secret';

const ROSHD_DASHBOARD_WRITE_SECRET = ROSHD_REQUIRE_DASHBOARD_WRITE_AUTH
  ? String(process.env.ROSHD_DASHBOARD_ADMIN_TOKEN || process.env.ROSHD_FILTERS_ADMIN_TOKEN || '').trim() ||
    (!IS_PRODUCTION_DEPLOY ? ROSHD_LOCAL_DEV_DEFAULT_WRITE_TOKEN : '')
  : '';

/** When auth is required: PUT also accepts loopback with no Bearer (optional). */
const ROSHD_ALLOW_LOCALHOST_UNAUTH_CONFIG_WRITE =
  process.env.ROSHD_ALLOW_LOCALHOST_UNAUTH_CONFIG_WRITE === 'true' ||
  process.env.ROSHD_ALLOW_LOCALHOST_UNAUTH_CONFIG_WRITE === '1' ||
  (process.env.NODE_ENV === 'development' && process.env.ROSHD_ALLOW_LOCALHOST_UNAUTH_CONFIG_WRITE !== 'false');

function roshdIsLocalhostClient(req) {
  try {
    const host = String(req.hostname || '').split(':')[0].toLowerCase();
    if (host === 'localhost' || host === '127.0.0.1') return true;
    const xf = String(req.headers['x-forwarded-for'] || '')
      .split(',')[0]
      .trim();
    const xfn = xf.replace(/^::ffff:/, '');
    if (xfn === '127.0.0.1' || xfn === '::1') return true;
    let ip = String(req.ip || req.socket?.remoteAddress || '').replace(/^::ffff:/, '');
    if (ip === '::1' || ip === '127.0.0.1') return true;
  } catch (_) {}
  return false;
}

function roshdDashboardWriteAuthorized(req) {
  if (!ROSHD_REQUIRE_DASHBOARD_WRITE_AUTH) return true;
  if (ROSHD_ALLOW_LOCALHOST_UNAUTH_CONFIG_WRITE && roshdIsLocalhostClient(req)) return true;
  const auth = req.headers.authorization || '';
  const bearer = auth.startsWith('Bearer ') ? auth.slice(7).trim() : '';
  if (!ROSHD_DASHBOARD_WRITE_SECRET) return false;
  return bearer === ROSHD_DASHBOARD_WRITE_SECRET;
}

function filtersPutAuthorized(req) {
  return roshdDashboardWriteAuthorized(req);
}

/** Admin / tooling: confirms which server build is running (legacy clients used to see stale Vercel 401s). */
app.get('/api/health', (_req, res) => {
  res.json({
    status: 'ok',
    supabase: supabaseAnon && supabaseAdmin ? 'connected' : 'missing_env',
    timestamp: new Date().toISOString(),
    roshd_server_api: 2,
    dashboard_put_requires_bearer: ROSHD_REQUIRE_DASHBOARD_WRITE_AUTH,
  });
});

/** Public bootstrap config — lets the static dashboard init a Supabase Realtime client. */
app.get('/api/public-config', (_req, res) => {
  res.json({
    success: true,
    supabaseUrl: SUPABASE_URL || null,
    supabaseAnonKey: SUPABASE_ANON_KEY || null,
  });
});

app.get('/api/filters', async (_req, res) => {
  try {
    if (!supabaseAdmin) {
      return res.json({ success: true, config: null, source: 'no_db' });
    }
    const { data, error } = await supabaseAdmin
      .from('filter_bar_remote_config')
      .select('config')
      .eq('id', 1)
      .maybeSingle();
    if (error) {
      console.warn('[api/filters GET]', error.message);
      return res.json({ success: true, config: null, source: 'error' });
    }
    return res.json({ success: true, config: data?.config ?? null, source: 'remote' });
  } catch (e) {
    console.error('[api/filters GET]', e);
    return res.status(500).json({ success: false, message: e.message || 'Failed to load filters.' });
  }
});

app.put('/api/filters', async (req, res) => {
  try {
    if (!filtersPutAuthorized(req)) {
      return res.status(401).json({
        success: false,
        message:
          'Unauthorized. Set ROSHD_REQUIRE_DASHBOARD_WRITE_AUTH=true and ROSHD_DASHBOARD_ADMIN_TOKEN in server env, then send Authorization: Bearer <same value> (or enable ROSHD_ALLOW_LOCALHOST_UNAUTH_CONFIG_WRITE for loopback without Bearer).',
      });
    }
    const body = req.body || {};
    if (!body.filters || !Array.isArray(body.filters)) {
      return res.status(400).json({ success: false, message: 'Body must include a filters array.' });
    }
    if (!supabaseAdmin) {
      return res.status(503).json({ success: false, message: 'Database not configured.' });
    }
    const row = {
      id: 1,
      config: body,
      updated_at: new Date().toISOString(),
    };
    const { error } = await supabaseAdmin.from('filter_bar_remote_config').upsert(row, { onConflict: 'id' });
    if (error) throw error;
    return res.json({ success: true });
  } catch (e) {
    console.error('[api/filters PUT]', e);
    return res.status(500).json({ success: false, message: e.message || 'Failed to save filters.' });
  }
});

function roshdConfigWriteOk(req) {
  return roshdDashboardWriteAuthorized(req);
}

app.get('/api/roshd/config', async (_req, res) => {
  try {
    if (!supabaseAdmin) {
      return res.json({ success: true, configs: {}, source: 'no_db' });
    }
    const { data, error } = await supabaseAdmin.from('roshd_config_kv').select('config_key, payload, updated_at');
    if (error) {
      console.warn('[api/roshd/config GET]', error.message);
      return res.json({ success: true, configs: {}, source: 'error' });
    }
    const configs = {};
    for (const row of data || []) {
      if (row.config_key) configs[row.config_key] = row.payload;
    }
    return res.json({ success: true, configs, source: 'remote' });
  } catch (e) {
    console.error('[api/roshd/config GET]', e);
    return res.status(500).json({ success: false, message: e.message || 'Failed to load config bundle.' });
  }
});

app.put('/api/roshd/config', async (req, res) => {
  try {
    if (!roshdConfigWriteOk(req)) {
      return res.status(401).json({
        success: false,
        message:
          'Unauthorized. Set ROSHD_REQUIRE_DASHBOARD_WRITE_AUTH=true and ROSHD_DASHBOARD_ADMIN_TOKEN on the server, then send Authorization: Bearer <same value>.',
      });
    }
    if (!supabaseAdmin) {
      return res.status(503).json({ success: false, message: 'Database not configured.' });
    }
    const body = req.body || {};
    const now = new Date().toISOString();
    const rows = [];
    if (body.configs && typeof body.configs === 'object' && !Array.isArray(body.configs)) {
      for (const [config_key, payload] of Object.entries(body.configs)) {
        if (typeof config_key === 'string' && config_key && payload != null) {
          rows.push({ config_key, payload, updated_at: now });
        }
      }
    } else if (body.key && body.payload != null) {
      rows.push({ config_key: String(body.key), payload: body.payload, updated_at: now });
    } else {
      return res.status(400).json({
        success: false,
        message: 'Send { configs: { [key]: json } } or { key, payload }.',
      });
    }
    if (!rows.length) {
      return res.status(400).json({ success: false, message: 'No config rows to upsert.' });
    }
    const { error } = await supabaseAdmin.from('roshd_config_kv').upsert(rows, { onConflict: 'config_key' });
    if (error) throw error;
    return res.json({ success: true, upserted: rows.length });
  } catch (e) {
    console.error('[api/roshd/config PUT]', e);
    return res.status(500).json({ success: false, message: e.message || 'Failed to save config bundle.' });
  }
});

// ─── Extended API (regions, admin CRUD, audit, settings, reports) ─────────────
mountAdminExtra(app, {
  supabaseAdmin,
  supabaseAnon,
  dbReady,
  writeAuthorized: roshdDashboardWriteAuthorized,
});

/** Quick DB reachability check (local dev only). */
async function logDatabaseConnection() {
  if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY || !supabaseAdmin) {
    console.warn('[roshd] Database: not checked — Supabase config missing.');
    return;
  }
  const project =
    process.env.SUPABASE_PROJECT_ID ||
    (SUPABASE_URL ? new URL(SUPABASE_URL.replace(/\/+$/, '')).hostname.split('.')[0] : '');
  const { error } = await supabaseAdmin.from('profiles').select('id').limit(1);
  if (error) {
    console.error('[roshd] Database: not reachable or schema incomplete —', error.message);
    return;
  }
  console.log(`[roshd] Database connected (Supabase) — project ${project || 'configured'}`);
}

/** @returns {Promise<{ user, profile } | { error: string }>} */
async function getAuthContext(req) {
  const h = req.headers.authorization;
  const token = h?.startsWith('Bearer ') ? h.slice(7) : null;
  if (!token) return { error: 'Unauthorized' };
  const { data, error } = await supabaseAnon.auth.getUser(token);
  if (error || !data?.user) return { error: 'Unauthorized' };
  const { data: prof } = await supabaseAdmin
    .from('profiles')
    .select('*')
    .eq('id', data.user.id)
    .maybeSingle();
  return { user: data.user, profile: prof };
}

function requireAuth() {
  return async (req, res, next) => {
    if (!dbReady(res)) return;
    const ctx = await getAuthContext(req);
    if ('error' in ctx) return res.status(401).json({ success: false, message: ctx.error });
    req.authUser = ctx.user;
    req.profile = ctx.profile;
    next();
  };
}

function requireAdmin() {
  return async (req, res, next) => {
    if (!dbReady(res)) return;
    const ctx = await getAuthContext(req);
    if ('error' in ctx) return res.status(401).json({ success: false, message: ctx.error });
    const role = ctx.profile?.role || 'customer';
    if (role !== 'admin') return res.status(403).json({ success: false, message: 'Forbidden' });
    req.authUser = ctx.user;
    req.profile = ctx.profile;
    next();
  };
}

// ─── Auth error helper ──────────────────────────────────────────────────────

function respondAuthSupabaseError(res, error, fallbackMsg) {
  const msg = String(error?.message || '').trim() || fallbackMsg;
  const lower = msg.toLowerCase();
  if (lower.includes('rate limit') || lower.includes('too many')) {
    return res.status(429).json({
      success: false,
      code: 'rate_limit',
      message: 'Too many attempts. Wait a minute and try again.',
    });
  }
  return res.status(400).json({ success: false, message: msg });
}

// ─── Auth routes ─────────────────────────────────────────────────────────────

app.post('/api/auth/register', async (req, res) => {
  try {
    if (!dbReady(res)) return;
    const { email, password, username, first_name, last_name } = req.body || {};
    if (!email || !password) {
      return res.status(400).json({ success: false, message: 'Email and password required.' });
    }
    const u = username != null ? String(username).trim() : '';
    const fn = u ? u.split(/\s+/)[0] : first_name || null;
    const ln = /\s/.test(u) ? u.split(/\s+/).slice(1).join(' ') : last_name || null;

    const { data, error } = await supabaseAdmin.auth.admin.createUser({
      email,
      password,
      email_confirm: true,
      user_metadata: { first_name: fn || '', last_name: ln || '', username: u || null },
    });
    if (error) return respondAuthSupabaseError(res, error, 'Signup failed.');

    const uid = data?.user?.id;
    if (uid) {
      await supabaseAdmin.from('profiles').upsert(
        { id: uid, email, first_name: fn || null, last_name: ln || null, role: 'customer', status: 'Active' },
        { onConflict: 'id' }
      );
    }

    return res.json({
      success: true,
      message: 'Account created. You can sign in now.',
      user: { id: uid, email },
    });
  } catch (e) {
    console.error('[register]', e);
    return res.status(500).json({ success: false, message: 'Server error.' });
  }
});

app.post('/api/auth/login', async (req, res) => {
  try {
    if (!dbReady(res)) return;
    const { email, password } = req.body || {};
    if (!email || !password) {
      return res.status(400).json({ success: false, message: 'Invalid email or password.' });
    }
    const { data, error } = await supabaseAnon.auth.signInWithPassword({ email, password });
    if (error || !data.session) {
      const msg = error?.message || 'Invalid credentials.';
      const lower = msg.toLowerCase();
      if (lower.includes('rate limit') || lower.includes('too many')) {
        return res.status(429).json({
          success: false,
          code: 'rate_limit',
          message: 'Too many sign-in attempts. Wait a minute and try again.',
        });
      }
      return res.status(401).json({ success: false, message: msg });
    }

    const { data: prof } = await supabaseAdmin
      .from('profiles')
      .select('*')
      .eq('id', data.user.id)
      .maybeSingle();

    return res.json({
      success: true,
      redirect: '/dashboard',
      token: data.session.access_token,
      refresh_token: data.session.refresh_token,
      user: {
        id: data.user.id,
        email: data.user.email,
        role: prof?.role || 'customer',
        first_name: prof?.first_name,
        last_name: prof?.last_name,
        branch: prof?.branch,
      },
    });
  } catch (e) {
    console.error('[login]', e);
    return res.status(500).json({ success: false, message: 'Server error.' });
  }
});

app.get('/api/auth/me', requireAuth(), async (req, res) => {
  return res.json({
    success: true,
    user: {
      id: req.authUser.id,
      email: req.authUser.email,
      role: req.profile?.role || 'customer',
      first_name: req.profile?.first_name,
      last_name: req.profile?.last_name,
      branch: req.profile?.branch,
      status: req.profile?.status,
    },
  });
});

// ─── Portal ──────────────────────────────────────────────────────────────────

app.get('/api/portal/overview', requireAuth(), async (req, res) => {
  try {
    const prof = req.profile || {};
    const auth = req.authUser;
    const email = prof.email || auth.email || '';
    const fn = prof.first_name || '';
    const ln = prof.last_name || '';
    const name = [fn, ln].filter(Boolean).join(' ').trim() || (email ? email.split('@')[0] : 'User');
    const today = new Date().toISOString().slice(0, 10);
    const branchLabel = prof.branch ? String(prof.branch) : 'Your organization';
    const branchLabelAr = prof.branch ? String(prof.branch) : 'مؤسستك';

    return res.json({
      success: true,
      overview: {
        user: { email, first_name: fn || null, last_name: ln || null, name },
        project: {
          status: 'On track',
          statusAr: 'على المسار الصحيح',
          phase: 'Phase 2 — Customer portal',
          phaseAr: 'المرحلة 2 — بوابة العميل',
          progressPct: 68,
          lastUpdate: today,
        },
        milestones: [
          { title: 'Discovery & alignment', titleAr: 'الاستكشاف والمواءمة', status: 'done', date: '2026-01-12' },
          { title: `Programs scoped — ${branchLabel}`, titleAr: `تحديد البرامج — ${branchLabelAr}`, status: 'active', date: '2026-03-05' },
          { title: 'Performance review & next wave', titleAr: 'مراجعة الأداء والموجة التالية', status: 'upcoming', date: '2026-06-01' },
        ],
        reports: [
          { title: 'Engagement health snapshot', titleAr: 'لقطة صحة الارتباط', type: 'Summary', typeAr: 'ملخص', date: today },
          { title: 'Training adoption by cohort', titleAr: 'اعتماد التدريب حسب المجموعة', type: 'Dashboard', typeAr: 'لوحة معلومات', date: '2026-03-22' },
          { title: 'Service consistency checklist', titleAr: 'قائمة تحقق لاتساق الخدمة', type: 'PDF', typeAr: 'PDF', date: '2026-02-14' },
        ],
        recommendations: [
          { en: 'Tie weekly leadership huddles to the two highest-impact KPIs in your plan.', ar: 'اربط اجتماعات القيادة الأسبوعية بأعلى مؤشرين أثرًا في خطتك.' },
          { en: 'Document "recovery moments" after service failures — patterns will feed the next workshop.', ar: 'وثّق لحظات التعافي بعد فشل الخدمة — الأنماط تغذي الورشة التالية.' },
          { en: 'Refresh branch leads on the intelligence dashboard before the next reporting cycle.', ar: 'حدّث مديري الفروع على لوحة الذكاء قبل دورة التقارير التالية.' },
        ],
        notes: [{ author: 'ROSHD consulting lead', authorAr: 'قائد استشارة رُشد', text: `Portal live for ${name}.`, textAr: `البوابة مفعّلة لـ ${name}.`, date: today }],
        activity: [
          { action: 'Portal session', actionAr: 'جلسة البوابة', detail: 'Customer dashboard', detailAr: 'لوحة العميل', when: today },
          { action: 'Materials accessed', actionAr: 'تم الاطلاع على المواد', detail: 'Executive decision frameworks — intro', detailAr: 'مقدمة أطر القرار التنفيذي', when: '2026-04-18' },
          { action: 'Report available', actionAr: 'تقرير متاح', detail: 'Engagement health snapshot', detailAr: 'لقطة صحة الارتباط', when: '2026-04-10' },
        ],
        training: [
          { title: 'Customer intelligence lab — Module 1', titleAr: 'مختبر ذكاء العملاء — الوحدة 1', progress: 100 },
          { title: 'Execution systems — playbook', titleAr: 'أنظمة التنفيذ — دليل العمل', progress: 40 },
          { title: 'Branch consistency workshop (prep)', titleAr: 'ورشة اتساق الفروع (تحضير)', progress: 0 },
        ],
      },
    });
  } catch (e) {
    console.error('[portal/overview]', e);
    return res.status(500).json({ success: false, message: e.message || 'Failed to load portal overview.' });
  }
});

// ─── Dashboard data ───────────────────────────────────────────────────────────

app.get('/api/dashboard/data', async (_req, res) => {
  try {
    if (!dbReady(res)) return;
    const { data: insights, error: e1 } = await supabaseAdmin.from('segment_insights').select('*');
    if (e1) throw e1;
    const { data: metrics, error: e2 } = await supabaseAdmin
      .from('segment_driver_metrics')
      .select('*')
      .order('sort_order', { ascending: true });
    if (e2) throw e2;

    const byBranch = {};
    for (const row of insights || []) {
      const drivers = (metrics || [])
        .filter((m) => m.branch_key === row.branch_key)
        .map((m) => ({
          name: m.name,
          nameAr: m.name_ar || m.name,
          avg: Number(m.avg),
          path: Number(m.path),
          impact: Number(m.impact),
          decision: m.decision,
          decisionAr: m.decision_ar || m.decision,
          cls: m.badge_class || '',
        }));
      byBranch[row.branch_key] = {
        score: Number(row.score),
        explanatory: row.explanatory,
        top: row.top_driver,
        topAr: row.top_driver_ar || row.top_driver,
        risk: row.risk_driver,
        riskAr: row.risk_driver_ar || row.risk_driver,
        drivers,
        invest: row.invest_bullets || [],
        investAr: row.invest_bullets_ar || [],
        optimize: row.optimize_bullets || [],
        optimizeAr: row.optimize_bullets_ar || [],
        avoid: row.avoid_bullets || [],
        avoidAr: row.avoid_bullets_ar || [],
      };
    }
    return res.json({ success: true, data: byBranch });
  } catch (e) {
    console.error('[dashboard/data]', e);
    return res.status(500).json({ success: false, message: e.message || 'Failed to load dashboard data.' });
  }
});

app.get('/api/branches', async (_req, res) => {
  try {
    if (!dbReady(res)) return;
    const { data, error } = await supabaseAdmin.from('branches').select('*').order('name');
    if (error) throw error;
    return res.json({ success: true, branches: data || [] });
  } catch (e) {
    console.error('[branches]', e);
    return res.status(500).json({ success: false, message: e.message || 'Failed to load branches.' });
  }
});

app.get('/api/segments', async (_req, res) => {
  try {
    if (!dbReady(res)) return;
    const { data, error } = await supabaseAdmin
      .from('segment_insights')
      .select('branch_key, score, explanatory, top_driver, risk_driver');
    if (error) throw error;
    return res.json({ success: true, segments: data || [] });
  } catch (e) {
    console.error('[segments]', e);
    return res.status(500).json({ success: false, message: e.message || 'Failed to load segments.' });
  }
});

app.get('/api/customers', async (_req, res) => {
  try {
    if (!dbReady(res)) return;
    const { data, error } = await supabaseAdmin
      .from('customer_satisfaction_records')
      .select('*')
      .order('customer_ref');
    if (error) throw error;
    return res.json({ success: true, customers: data || [] });
  } catch (e) {
    console.error('[customers]', e);
    return res.status(500).json({ success: false, message: e.message || 'Failed to load customers.' });
  }
});

// ─── Admin ────────────────────────────────────────────────────────────────────

app.get('/api/admin/users', requireAdmin(), async (_req, res) => {
  try {
    const { data: profiles, error: pe } = await supabaseAdmin.from('profiles').select('*');
    if (pe) throw pe;
    const { data: list, error: le } = await supabaseAdmin.auth.admin.listUsers({ perPage: 1000 });
    if (le) throw le;
    const emailById = {};
    for (const u of list?.users || []) emailById[u.id] = u.email;

    const users = (profiles || []).map((p) => ({
      id: p.id,
      email: p.email || emailById[p.id],
      first_name: p.first_name,
      last_name: p.last_name,
      role: p.role,
      branch: p.branch,
      status: p.status,
    }));
    return res.json({ success: true, users });
  } catch (e) {
    console.error('[admin/users]', e);
    return res.status(500).json({ success: false, message: e.message || 'Failed to list users.' });
  }
});

app.put('/api/admin/users/:id/role', requireAdmin(), async (req, res) => {
  try {
    const { id } = req.params;
    const { role } = req.body || {};
    if (!role) return res.status(400).json({ success: false, message: 'role required' });
    const { error } = await supabaseAdmin.from('profiles').update({ role }).eq('id', id);
    if (error) throw error;
    return res.json({ success: true });
  } catch (e) {
    console.error('[admin/users/role]', e);
    return res.status(500).json({ success: false, message: e.message || 'Failed to update role.' });
  }
});

app.delete('/api/admin/users/:id', requireAdmin(), async (req, res) => {
  try {
    const { id } = req.params;
    const { error } = await supabaseAdmin.auth.admin.deleteUser(id);
    if (error) throw error;
    return res.json({ success: true });
  } catch (e) {
    console.error('[admin/users/delete]', e);
    return res.status(500).json({ success: false, message: e.message || 'Failed to delete user.' });
  }
});

app.get('/api/admin/stats', requireAdmin(), async (_req, res) => {
  try {
    const [b, c, d] = await Promise.all([
      supabaseAdmin.from('branches').select('id', { count: 'exact', head: true }),
      supabaseAdmin.from('customer_satisfaction_records').select('id', { count: 'exact', head: true }),
      supabaseAdmin.from('drivers').select('id', { count: 'exact', head: true }),
    ]);
    return res.json({
      success: true,
      stats: {
        branches: b.count ?? 0,
        customer_records: c.count ?? 0,
        drivers: d.count ?? 0,
      },
    });
  } catch (e) {
    console.error('[admin/stats]', e);
    return res.status(500).json({ success: false, message: e.message || 'Failed to load stats.' });
  }
});

app.post('/api/admin/customers', requireAdmin(), async (req, res) => {
  try {
    const row = req.body || {};
    const payload = {
      customer_ref: row.customer_ref,
      branch: row.branch,
      gender: row.gender,
      service_line: row.service_line,
      rating_1: row.rating_1,
      rating_2: row.rating_2,
      rating_3: row.rating_3,
      rating_4: row.rating_4,
      risk_tier: row.risk_tier,
    };
    const missing = ['customer_ref', 'branch', 'gender', 'service_line', 'rating_1', 'rating_2', 'rating_3', 'rating_4', 'risk_tier'].filter(
      (k) => payload[k] === undefined || payload[k] === null
    );
    if (missing.length) {
      return res.status(400).json({ success: false, message: `Missing fields: ${missing.join(', ')}` });
    }
    const { data, error } = await supabaseAdmin
      .from('customer_satisfaction_records')
      .insert(payload)
      .select('*')
      .single();
    if (error) throw error;
    return res.json({ success: true, customer: data });
  } catch (e) {
    console.error('[admin/customers/create]', e);
    return res.status(500).json({ success: false, message: e.message || 'Failed to create customer record.' });
  }
});

app.delete('/api/admin/customers/:id', requireAdmin(), async (req, res) => {
  try {
    const { id } = req.params;
    const isUuid = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(id);
    const { error } = isUuid
      ? await supabaseAdmin.from('customer_satisfaction_records').delete().eq('id', id)
      : await supabaseAdmin.from('customer_satisfaction_records').delete().eq('customer_ref', id);
    if (error) throw error;
    return res.json({ success: true });
  } catch (e) {
    console.error('[admin/customers/delete]', e);
    return res.status(500).json({ success: false, message: e.message || 'Failed to delete customer record.' });
  }
});

// ─── 404 fallback ─────────────────────────────────────────────────────────────

app.use((_req, res) => {
  res.status(404).json({ success: false, message: 'Route not found.' });
});

export default app;

// ─── Local dev server start ───────────────────────────────────────────────────

async function start() {
  await logDatabaseConnection();
  if (ROSHD_REQUIRE_DASHBOARD_WRITE_AUTH) {
    if (!IS_PRODUCTION_DEPLOY && ROSHD_DASHBOARD_WRITE_SECRET === ROSHD_LOCAL_DEV_DEFAULT_WRITE_TOKEN) {
      console.warn(
        `[roshd] Dashboard write auth: using dev default Bearer. Set ROSHD_DASHBOARD_ADMIN_TOKEN in .env for a custom secret.`
      );
    }
    if (ROSHD_ALLOW_LOCALHOST_UNAUTH_CONFIG_WRITE) {
      console.warn(
        '[roshd] Localhost requests may omit Bearer when ROSHD_ALLOW_LOCALHOST_UNAUTH_CONFIG_WRITE is enabled.'
      );
    }
  } else {
    console.warn(
      '[roshd] Dashboard PUT endpoints accept writes without Bearer (ROSHD_REQUIRE_DASHBOARD_WRITE_AUTH is not true). For a public URL, set ROSHD_REQUIRE_DASHBOARD_WRITE_AUTH=true and ROSHD_DASHBOARD_ADMIN_TOKEN.'
    );
  }
  app.listen(PORT, () => {
    console.log(`[roshd] API + static → http://localhost:${PORT}`);
  });
}

if (process.env.VERCEL !== '1' && isPrimaryServerEntry()) {
  start().catch((err) => {
    console.error('[roshd] Startup failed:', err);
    process.exit(1);
  });
}
