/**
 * Roshd Professional — extended API routes.
 *
 * Mounted by server.js via mountAdminExtra(app, deps). Keeps the original
 * server.js routes untouched; adds everything the previously-stubbed admin
 * panels need plus the Region model.
 *
 * Write routes are gated by the same dashboard-write authorizer as
 * PUT /api/filters (Bearer token / loopback / open — see server.js). This
 * keeps the existing token-injected admin working without a login rebuild.
 */

/** Canonical 3-filter scope key — region & branch are mutually exclusive. */
export function scope3(region, branch, service) {
  const r = (region || '').trim();
  const b = (branch || '').trim();
  const s = (service || '').trim();
  const geo = r ? `r:${r}` : b ? `b:${b}` : 'all';
  const svc = s ? `s:${s}` : 'all';
  return `${geo}|${svc}`;
}

export function mountAdminExtra(app, deps) {
  const { supabaseAdmin, supabaseAnon, dbReady, writeAuthorized } = deps;

  /** 401 unless the request passes the dashboard-write authorizer. */
  function requireWrite(req, res, next) {
    if (!dbReady(res)) return;
    if (!writeAuthorized(req)) {
      return res.status(401).json({
        success: false,
        message:
          'Unauthorized. Send Authorization: Bearer <ROSHD_DASHBOARD_ADMIN_TOKEN> ' +
          '(or enable ROSHD_ALLOW_LOCALHOST_UNAUTH_CONFIG_WRITE for loopback).',
      });
    }
    next();
  }

  /** Best-effort audit row; never throws into the request path. */
  async function logAudit(req, { action, entity, entityId, detail, status }) {
    try {
      if (!supabaseAdmin) return;
      const ip =
        String(req.headers['x-forwarded-for'] || '').split(',')[0].trim() ||
        req.ip ||
        '';
      await supabaseAdmin.from('admin_audit_log').insert({
        action: String(action || 'UPDATE'),
        entity: String(entity || ''),
        entity_id: entityId != null ? String(entityId) : null,
        payload: detail ? { detail: String(detail) } : {},
        actor_email: req.headers['x-roshd-actor'] || null,
        ip,
        status: status || 'success',
      });
    } catch (_) {
      /* audit is non-critical */
    }
  }

  const fail = (res, e, msg) => {
    console.error('[admin-extra]', msg, e?.message || e);
    return res.status(500).json({ success: false, message: e?.message || msg });
  };

  // ─── Regions ────────────────────────────────────────────────────────────────

  /** Public: regions + their member branches — used by the filter toolbar. */
  app.get('/api/regions', async (_req, res) => {
    try {
      if (!dbReady(res)) return;
      const { data: regions, error: re } = await supabaseAdmin
        .from('regions')
        .select('*')
        .order('sort_order', { ascending: true });
      if (re) throw re;
      const { data: branches, error: be } = await supabaseAdmin
        .from('branches')
        .select('id, slug, name_en, name_ar, region_id, is_active, sort_order')
        .order('sort_order', { ascending: true });
      if (be) throw be;
      const out = (regions || []).map((r) => ({
        ...r,
        branches: (branches || []).filter((b) => b.region_id === r.id),
      }));
      return res.json({ success: true, regions: out, branches: branches || [] });
    } catch (e) {
      return fail(res, e, 'Failed to load regions.');
    }
  });

  app.post('/api/admin/regions', requireWrite, async (req, res) => {
    try {
      const { slug, name_en, name_ar, sort_order, is_active } = req.body || {};
      if (!slug || !name_en) {
        return res.status(400).json({ success: false, message: 'slug and name_en required.' });
      }
      const { data, error } = await supabaseAdmin
        .from('regions')
        .insert({
          slug: String(slug).trim().toLowerCase(),
          name_en,
          name_ar: name_ar || null,
          sort_order: Number(sort_order) || 0,
          is_active: is_active !== false,
        })
        .select('*')
        .single();
      if (error) throw error;
      await logAudit(req, { action: 'CREATE', entity: 'Region', entityId: data.id, detail: name_en });
      return res.json({ success: true, region: data });
    } catch (e) {
      return fail(res, e, 'Failed to create region.');
    }
  });

  app.put('/api/admin/regions/:id', requireWrite, async (req, res) => {
    try {
      const patch = {};
      for (const k of ['slug', 'name_en', 'name_ar', 'sort_order', 'is_active']) {
        if (req.body && k in req.body) patch[k] = req.body[k];
      }
      patch.updated_at = new Date().toISOString();
      const { data, error } = await supabaseAdmin
        .from('regions')
        .update(patch)
        .eq('id', req.params.id)
        .select('*')
        .single();
      if (error) throw error;
      await logAudit(req, { action: 'UPDATE', entity: 'Region', entityId: req.params.id });
      return res.json({ success: true, region: data });
    } catch (e) {
      return fail(res, e, 'Failed to update region.');
    }
  });

  app.delete('/api/admin/regions/:id', requireWrite, async (req, res) => {
    try {
      const { error } = await supabaseAdmin.from('regions').delete().eq('id', req.params.id);
      if (error) throw error;
      await logAudit(req, { action: 'DELETE', entity: 'Region', entityId: req.params.id });
      return res.json({ success: true });
    } catch (e) {
      return fail(res, e, 'Failed to delete region.');
    }
  });

  // ─── Branches (create / update / delete; GET stays in server.js) ────────────

  app.post('/api/admin/branches', requireWrite, async (req, res) => {
    try {
      const b = req.body || {};
      if (!b.slug || !b.name_en) {
        return res.status(400).json({ success: false, message: 'slug and name_en required.' });
      }
      const row = {
        slug: String(b.slug).trim(),
        name: b.name_en,
        name_en: b.name_en,
        name_ar: b.name_ar || null,
        city: b.city || b.name_en,
        sort_order: Number(b.sort_order) || 0,
        is_active: b.is_active !== false,
        region_id: b.region_id || null,
        weight: b.weight != null ? Number(b.weight) : 1.0,
      };
      const { data, error } = await supabaseAdmin.from('branches').insert(row).select('*').single();
      if (error) throw error;
      await logAudit(req, { action: 'CREATE', entity: 'Branch', entityId: data.id, detail: b.name_en });
      return res.json({ success: true, branch: data });
    } catch (e) {
      return fail(res, e, 'Failed to create branch.');
    }
  });

  app.put('/api/admin/branches/:id', requireWrite, async (req, res) => {
    try {
      const patch = {};
      for (const k of ['slug', 'name_en', 'name_ar', 'city', 'sort_order', 'is_active', 'region_id', 'weight']) {
        if (req.body && k in req.body) patch[k] = req.body[k];
      }
      if ('name_en' in patch) patch.name = patch.name_en;
      patch.updated_at = new Date().toISOString();
      const { data, error } = await supabaseAdmin
        .from('branches')
        .update(patch)
        .eq('id', req.params.id)
        .select('*')
        .single();
      if (error) throw error;
      await logAudit(req, { action: 'UPDATE', entity: 'Branch', entityId: req.params.id });
      return res.json({ success: true, branch: data });
    } catch (e) {
      return fail(res, e, 'Failed to update branch.');
    }
  });

  app.delete('/api/admin/branches/:id', requireWrite, async (req, res) => {
    try {
      const { error } = await supabaseAdmin.from('branches').delete().eq('id', req.params.id);
      if (error) throw error;
      await logAudit(req, { action: 'DELETE', entity: 'Branch', entityId: req.params.id });
      return res.json({ success: true });
    } catch (e) {
      return fail(res, e, 'Failed to delete branch.');
    }
  });

  // ─── Users (create / update profile; GET + role + delete stay in server.js) ──

  app.post('/api/admin/users', requireWrite, async (req, res) => {
    try {
      const { email, password, first_name, last_name, role, branch, status } = req.body || {};
      if (!email || !password) {
        return res.status(400).json({ success: false, message: 'email and password required.' });
      }
      const { data, error } = await supabaseAdmin.auth.admin.createUser({
        email,
        password,
        email_confirm: true,
        user_metadata: { first_name: first_name || '', last_name: last_name || '' },
      });
      if (error) return res.status(400).json({ success: false, message: error.message });
      const uid = data?.user?.id;
      if (uid) {
        await supabaseAdmin.from('profiles').upsert(
          {
            id: uid,
            email,
            first_name: first_name || null,
            last_name: last_name || null,
            role: role || 'customer',
            branch: branch || null,
            status: status || 'Active',
          },
          { onConflict: 'id' }
        );
      }
      await logAudit(req, { action: 'CREATE', entity: 'User', entityId: uid, detail: email });
      return res.json({ success: true, user: { id: uid, email } });
    } catch (e) {
      return fail(res, e, 'Failed to create user.');
    }
  });

  // Distinct path from server.js's requireAdmin DELETE /api/admin/users/:id —
  // this one is dashboard-write gated so the token-based admin panel can use it.
  app.delete('/api/admin/user/:id', requireWrite, async (req, res) => {
    try {
      const id = req.params.id;
      const { error: ae } = await supabaseAdmin.auth.admin.deleteUser(id);
      if (ae && !/not.*found/i.test(ae.message || '')) throw ae;
      await supabaseAdmin.from('profiles').delete().eq('id', id);
      await logAudit(req, { action: 'DELETE', entity: 'User', entityId: id });
      return res.json({ success: true });
    } catch (e) {
      return fail(res, e, 'Failed to delete user.');
    }
  });

  app.put('/api/admin/users/:id', requireWrite, async (req, res) => {
    try {
      const patch = {};
      for (const k of ['first_name', 'last_name', 'role', 'branch', 'status', 'email']) {
        if (req.body && k in req.body) patch[k] = req.body[k];
      }
      patch.updated_at = new Date().toISOString();
      const { error } = await supabaseAdmin.from('profiles').update(patch).eq('id', req.params.id);
      if (error) throw error;
      if (req.body && req.body.password) {
        await supabaseAdmin.auth.admin.updateUserById(req.params.id, { password: req.body.password });
      }
      await logAudit(req, { action: 'UPDATE', entity: 'User', entityId: req.params.id });
      return res.json({ success: true });
    } catch (e) {
      return fail(res, e, 'Failed to update user.');
    }
  });

  // ─── Users list (dashboard-write gated; the requireAdmin one stays in server.js) ──
  app.get('/api/admin/all-users', async (_req, res) => {
    try {
      if (!dbReady(res)) return;
      const { data: profiles, error: pe } = await supabaseAdmin.from('profiles').select('*');
      if (pe) throw pe;
      let authUsers = [];
      try {
        const { data: list } = await supabaseAdmin.auth.admin.listUsers({ perPage: 1000 });
        authUsers = list?.users || [];
      } catch (_) {}
      const byId = {};
      authUsers.forEach((u) => {
        byId[u.id] = u;
      });
      const users = (profiles || []).map((p) => {
        const au = byId[p.id] || {};
        return {
          id: p.id,
          email: p.email || au.email || '',
          first_name: p.first_name,
          last_name: p.last_name,
          role: p.role || 'customer',
          branch: p.branch,
          status: p.status || 'Active',
          created_at: au.created_at || p.updated_at,
          last_sign_in_at: au.last_sign_in_at || null,
        };
      });
      return res.json({ success: true, users });
    } catch (e) {
      return fail(res, e, 'Failed to load users.');
    }
  });

  // ─── Audit log ──────────────────────────────────────────────────────────────

  app.get('/api/admin/audit', async (req, res) => {
    try {
      if (!dbReady(res)) return;
      const limit = Math.min(Number(req.query.limit) || 200, 1000);
      const { data, error } = await supabaseAdmin
        .from('admin_audit_log')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(limit);
      if (error) throw error;
      return res.json({ success: true, entries: data || [] });
    } catch (e) {
      return fail(res, e, 'Failed to load audit log.');
    }
  });

  app.post('/api/admin/audit', requireWrite, async (req, res) => {
    try {
      const b = req.body || {};
      const { error } = await supabaseAdmin.from('admin_audit_log').insert({
        action: b.action || 'UPDATE',
        entity: b.entity || '',
        entity_id: b.entity_id != null ? String(b.entity_id) : null,
        payload: b.payload || (b.detail ? { detail: b.detail } : {}),
        actor_email: b.actor_email || null,
        ip: String(req.headers['x-forwarded-for'] || '').split(',')[0].trim() || req.ip || '',
        status: b.status || 'success',
      });
      if (error) throw error;
      return res.json({ success: true });
    } catch (e) {
      return fail(res, e, 'Failed to append audit entry.');
    }
  });

  app.delete('/api/admin/audit', requireWrite, async (_req, res) => {
    try {
      const { error } = await supabaseAdmin
        .from('admin_audit_log')
        .delete()
        .neq('id', 0);
      if (error) throw error;
      return res.json({ success: true });
    } catch (e) {
      return fail(res, e, 'Failed to clear audit log.');
    }
  });

  // ─── Settings ───────────────────────────────────────────────────────────────

  app.get('/api/admin/settings', async (_req, res) => {
    try {
      if (!dbReady(res)) return;
      const { data, error } = await supabaseAdmin
        .from('dashboard_settings')
        .select('payload, updated_at')
        .eq('id', 1)
        .maybeSingle();
      if (error) throw error;
      return res.json({ success: true, settings: data?.payload ?? {}, updated_at: data?.updated_at });
    } catch (e) {
      return fail(res, e, 'Failed to load settings.');
    }
  });

  app.put('/api/admin/settings', requireWrite, async (req, res) => {
    try {
      const payload = req.body && req.body.settings ? req.body.settings : req.body || {};
      const { error } = await supabaseAdmin
        .from('dashboard_settings')
        .upsert({ id: 1, payload, updated_at: new Date().toISOString() }, { onConflict: 'id' });
      if (error) throw error;
      await logAudit(req, { action: 'UPDATE', entity: 'Settings' });
      return res.json({ success: true });
    } catch (e) {
      return fail(res, e, 'Failed to save settings.');
    }
  });

  // ─── Reports ────────────────────────────────────────────────────────────────

  app.get('/api/admin/reports', async (_req, res) => {
    try {
      if (!dbReady(res)) return;
      const { data, error } = await supabaseAdmin
        .from('report_history')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(200);
      if (error) throw error;
      return res.json({ success: true, reports: data || [] });
    } catch (e) {
      return fail(res, e, 'Failed to load reports.');
    }
  });

  /** Generate a report: builds a CSV from a dataset and records it in report_history. */
  app.post('/api/admin/reports/generate', requireWrite, async (req, res) => {
    try {
      const b = req.body || {};
      const type = String(b.report_type || 'customers');
      const branch = b.branch || null;
      const format = String(b.format || 'csv');

      let rows = [];
      let columns = [];
      if (type === 'customers') {
        let q = supabaseAdmin.from('customer_satisfaction_records').select('*');
        if (branch) q = q.eq('branch', branch);
        const { data, error } = await q;
        if (error) throw error;
        rows = data || [];
        columns = rows.length ? Object.keys(rows[0]) : [];
      } else if (type === 'branches') {
        const { data, error } = await supabaseAdmin.from('branches').select('*');
        if (error) throw error;
        rows = data || [];
        columns = rows.length ? Object.keys(rows[0]) : [];
      } else if (type === 'users') {
        const { data, error } = await supabaseAdmin.from('profiles').select('*');
        if (error) throw error;
        rows = data || [];
        columns = rows.length ? Object.keys(rows[0]) : [];
      }

      const esc = (v) => {
        const s = v == null ? '' : typeof v === 'object' ? JSON.stringify(v) : String(v);
        return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
      };
      const csv = [columns.join(','), ...rows.map((r) => columns.map((c) => esc(r[c])).join(','))].join('\n');

      const name = b.name || `${type}_${new Date().toISOString().slice(0, 10)}`;
      const { data: rec, error: re } = await supabaseAdmin
        .from('report_history')
        .insert({
          name,
          report_type: type,
          branch,
          format,
          status: 'ready',
          rows_count: rows.length,
          generated_by_email: b.actor_email || null,
          payload: { columns },
        })
        .select('*')
        .single();
      if (re) throw re;
      await logAudit(req, { action: 'EXPORT', entity: 'Report', entityId: rec.id, detail: name });
      return res.json({ success: true, report: rec, csv });
    } catch (e) {
      return fail(res, e, 'Failed to generate report.');
    }
  });

  app.delete('/api/admin/reports/:id', requireWrite, async (req, res) => {
    try {
      const { error } = await supabaseAdmin.from('report_history').delete().eq('id', req.params.id);
      if (error) throw error;
      return res.json({ success: true });
    } catch (e) {
      return fail(res, e, 'Failed to delete report.');
    }
  });

  // ─── Scheduled exports ──────────────────────────────────────────────────────

  app.get('/api/admin/scheduled-exports', async (_req, res) => {
    try {
      if (!dbReady(res)) return;
      const { data, error } = await supabaseAdmin
        .from('scheduled_exports')
        .select('*')
        .order('created_at', { ascending: false });
      if (error) throw error;
      return res.json({ success: true, exports: data || [] });
    } catch (e) {
      return fail(res, e, 'Failed to load scheduled exports.');
    }
  });

  app.post('/api/admin/scheduled-exports', requireWrite, async (req, res) => {
    try {
      const b = req.body || {};
      if (!b.name || !b.report_type || !b.cadence) {
        return res.status(400).json({ success: false, message: 'name, report_type, cadence required.' });
      }
      const { data, error } = await supabaseAdmin
        .from('scheduled_exports')
        .insert({
          name: b.name,
          report_type: b.report_type,
          cadence: b.cadence,
          format: b.format || 'csv',
          recipients: Array.isArray(b.recipients) ? b.recipients : [],
          is_active: b.is_active !== false,
          next_run_at: b.next_run_at || null,
          config: b.config || {},
        })
        .select('*')
        .single();
      if (error) throw error;
      return res.json({ success: true, export: data });
    } catch (e) {
      return fail(res, e, 'Failed to create scheduled export.');
    }
  });

  app.put('/api/admin/scheduled-exports/:id', requireWrite, async (req, res) => {
    try {
      const patch = {};
      for (const k of ['name', 'report_type', 'cadence', 'format', 'recipients', 'is_active', 'next_run_at', 'config']) {
        if (req.body && k in req.body) patch[k] = req.body[k];
      }
      patch.updated_at = new Date().toISOString();
      const { data, error } = await supabaseAdmin
        .from('scheduled_exports')
        .update(patch)
        .eq('id', req.params.id)
        .select('*')
        .single();
      if (error) throw error;
      return res.json({ success: true, export: data });
    } catch (e) {
      return fail(res, e, 'Failed to update scheduled export.');
    }
  });

  app.delete('/api/admin/scheduled-exports/:id', requireWrite, async (req, res) => {
    try {
      const { error } = await supabaseAdmin.from('scheduled_exports').delete().eq('id', req.params.id);
      if (error) throw error;
      return res.json({ success: true });
    } catch (e) {
      return fail(res, e, 'Failed to delete scheduled export.');
    }
  });

  // ─── Customer records: bulk upload (CSV → rows) ─────────────────────────────

  app.post('/api/admin/customers/bulk', requireWrite, async (req, res) => {
    try {
      const records = Array.isArray(req.body?.records) ? req.body.records : null;
      if (!records || !records.length) {
        return res.status(400).json({ success: false, message: 'Body must include a non-empty records array.' });
      }
      const allowed = [
        'customer_ref', 'branch', 'gender', 'service_line', 'rating_1', 'rating_2',
        'rating_3', 'rating_4', 'risk_tier', 'visit_frequency', 'age_band',
        'overall_satisfaction', 'source',
      ];
      const clean = records.map((r) => {
        const o = {};
        for (const k of allowed) if (r[k] !== undefined) o[k] = r[k];
        if (!o.customer_ref) o.customer_ref = `CSR-${Math.random().toString(36).slice(2, 10)}`;
        return o;
      });
      const { data, error } = await supabaseAdmin
        .from('customer_satisfaction_records')
        .upsert(clean, { onConflict: 'customer_ref' })
        .select('id');
      if (error) throw error;
      await logAudit(req, {
        action: 'UPLOAD',
        entity: 'Customer records',
        detail: `${clean.length} rows`,
      });
      return res.json({ success: true, upserted: data?.length ?? clean.length });
    } catch (e) {
      return fail(res, e, 'Failed to bulk-upload customer records.');
    }
  });

  // Single customer record delete — write-gated (server.js's :id DELETE is requireAdmin).
  app.delete('/api/admin/customer/:id', requireWrite, async (req, res) => {
    try {
      const id = req.params.id;
      const isUuid = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(id);
      const q = supabaseAdmin.from('customer_satisfaction_records').delete();
      const { error } = isUuid ? await q.eq('id', id) : await q.eq('customer_ref', id);
      if (error) throw error;
      await logAudit(req, { action: 'DELETE', entity: 'Customer record', entityId: id });
      return res.json({ success: true });
    } catch (e) {
      return fail(res, e, 'Failed to delete customer record.');
    }
  });

  app.delete('/api/admin/customers', requireWrite, async (_req, res) => {
    try {
      const { error } = await supabaseAdmin
        .from('customer_satisfaction_records')
        .delete()
        .neq('customer_ref', '');
      if (error) throw error;
      return res.json({ success: true });
    } catch (e) {
      return fail(res, e, 'Failed to clear customer records.');
    }
  });
}
