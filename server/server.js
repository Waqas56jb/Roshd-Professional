/**
 * Roshd Professional — Express API + static hosting.
 * Loads ../.env from project root when running locally.
 */
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const envPath = path.join(__dirname, '..', '.env');
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

const app = express();
app.use(cors());
app.use(express.json({ limit: '1mb' }));

const statRoot = path.join(__dirname, '..');

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
          avg: Number(m.avg),
          path: Number(m.path),
          impact: Number(m.impact),
          decision: m.decision,
          cls: m.badge_class || '',
        }));
      byBranch[row.branch_key] = {
        score: Number(row.score),
        explanatory: row.explanatory,
        top: row.top_driver,
        risk: row.risk_driver,
        drivers,
        invest: row.invest_bullets || [],
        optimize: row.optimize_bullets || [],
        avoid: row.avoid_bullets || [],
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

// ─── Static files ─────────────────────────────────────────────────────────────

app.get('/', (_req, res) => res.sendFile(path.join(statRoot, 'index.html')));
app.get(['/dashboard', '/dashboard/'], (_req, res) => res.sendFile(path.join(statRoot, 'index.html')));

const adminUi = path.join(statRoot, 'admin', 'admin.html');
app.get(['/admin', '/admin/', '/admin.html'], (_req, res) =>
  fs.existsSync(adminUi) ? res.sendFile(adminUi) : res.status(404).send('Admin UI not deployed')
);

app.use(express.static(statRoot));

export default app;

// ─── Local dev server start ───────────────────────────────────────────────────

async function start() {
  await logDatabaseConnection();
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
