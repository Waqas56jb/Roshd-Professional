-- ═══════════════════════════════════════════════════════════════════════════════
-- Roshd Professional — Admin/Customer single-source-of-truth + Realtime
--
-- Adds tables for the previously-stubbed admin panels (Settings, Reports,
-- Scheduled Exports, extended audit log), enables Supabase Realtime on every
-- table the customer dashboard cares about, and opens anon SELECT so the
-- browser's Supabase Realtime client can subscribe directly.
-- Service-role writes from the Express API bypass RLS, so write paths remain
-- locked behind the API and (optionally) ROSHD_DASHBOARD_ADMIN_TOKEN.
-- ═══════════════════════════════════════════════════════════════════════════════

-- ─── New tables ────────────────────────────────────────────────────────────────

create table if not exists public.dashboard_settings (
  id smallint primary key default 1 check (id = 1),
  payload jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

insert into public.dashboard_settings (id, payload)
  values (1, jsonb_build_object(
    'platform', jsonb_build_object(
      'maintenanceMode', false,
      'allowRegistrations', true,
      'defaultLanguage', 'en',
      'demoMode', false,
      'persistFilters', true
    ),
    'display', jsonb_build_object(
      'quarter', 'Q2 2026',
      'sampleSizeN', 300,
      'modelR2Pct', 72
    ),
    'security', jsonb_build_object(
      'require2fa', false,
      'sessionTimeoutMinutes', 60,
      'auditEnabled', true
    ),
    'email', jsonb_build_object(
      'fromAddress', 'no-reply@roshd.example',
      'replyTo', 'support@roshd.example'
    )
  ))
  on conflict (id) do nothing;

create table if not exists public.report_history (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  report_type text not null,
  branch text,
  format text not null check (format in ('csv', 'pdf', 'xlsx', 'json')),
  generated_by uuid references auth.users (id) on delete set null,
  generated_by_email text,
  status text not null default 'ready' check (status in ('ready', 'failed', 'pending')),
  rows_count int default 0,
  storage_path text,
  payload jsonb default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create index if not exists idx_report_history_created on public.report_history (created_at desc);

create table if not exists public.scheduled_exports (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  report_type text not null,
  cadence text not null check (cadence in ('daily','weekly','monthly','quarterly')),
  format text not null default 'csv' check (format in ('csv','pdf','xlsx','json')),
  recipients text[] default '{}'::text[],
  is_active boolean not null default true,
  next_run_at timestamptz,
  last_run_at timestamptz,
  config jsonb default '{}'::jsonb,
  created_by uuid references auth.users (id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists idx_scheduled_exports_active on public.scheduled_exports (is_active, next_run_at);

-- ─── Extend admin_audit_log so the Audit panel can render rich rows ───────────
alter table public.admin_audit_log add column if not exists actor_email text;
alter table public.admin_audit_log add column if not exists ip text;
alter table public.admin_audit_log add column if not exists status text default 'success' check (status in ('success','failed','warning'));

-- ─── Extend customer_satisfaction_records so admin upload covers every column ─
alter table public.customer_satisfaction_records add column if not exists service_line text;
alter table public.customer_satisfaction_records add column if not exists visit_frequency text;
alter table public.customer_satisfaction_records add column if not exists age_band text;

-- ─── Make branches editable from admin UI ─────────────────────────────────────
alter table public.branches add column if not exists weight numeric(5,3) default 1.0;
alter table public.branches add column if not exists updated_at timestamptz default now();

-- ─── Realtime publication ─────────────────────────────────────────────────────
-- Re-create the publication idempotently. Postgres `alter publication … add table`
-- errors if the table is already in the publication, so we drop+recreate.
do $$
begin
  if exists (select 1 from pg_publication where pubname = 'supabase_realtime') then
    execute 'drop publication supabase_realtime';
  end if;
end $$;

create publication supabase_realtime for table
  public.roshd_config_kv,
  public.filter_bar_remote_config,
  public.segment_insights,
  public.segment_driver_metrics,
  public.branches,
  public.drivers,
  public.customer_satisfaction_records,
  public.admin_audit_log,
  public.dashboard_model_quality,
  public.dashboard_data_overrides,
  public.dashboard_settings,
  public.report_history,
  public.scheduled_exports,
  public.profiles;

-- Replica identity full so DELETE events carry the row payload (otherwise
-- subscribers only receive the primary key and have to refetch).
alter table public.roshd_config_kv replica identity full;
alter table public.filter_bar_remote_config replica identity full;
alter table public.dashboard_settings replica identity full;
alter table public.dashboard_model_quality replica identity full;
alter table public.dashboard_data_overrides replica identity full;

-- ─── Row-Level Security ───────────────────────────────────────────────────────
-- Open SELECT on every dashboard table for anon so the browser's Supabase JS
-- Realtime client can read change events. Writes remain service-role-only.

alter table public.roshd_config_kv             enable row level security;
alter table public.filter_bar_remote_config    enable row level security;
alter table public.segment_insights            enable row level security;
alter table public.segment_driver_metrics      enable row level security;
alter table public.branches                    enable row level security;
alter table public.drivers                     enable row level security;
alter table public.customer_satisfaction_records enable row level security;
alter table public.admin_audit_log             enable row level security;
alter table public.dashboard_model_quality     enable row level security;
alter table public.dashboard_data_overrides    enable row level security;
alter table public.dashboard_settings          enable row level security;
alter table public.report_history              enable row level security;
alter table public.scheduled_exports           enable row level security;
alter table public.profiles                    enable row level security;
alter table public.login_events                enable row level security;

-- Drop pre-existing policies (idempotent) before recreating.
do $$
declare r record;
begin
  for r in
    select schemaname, tablename, policyname
    from pg_policies
    where schemaname = 'public'
      and policyname in ('anon_select_dashboard','self_select_profile')
  loop
    execute format('drop policy if exists %I on %I.%I', r.policyname, r.schemaname, r.tablename);
  end loop;
end $$;

create policy anon_select_dashboard on public.roshd_config_kv             for select using (true);
create policy anon_select_dashboard on public.filter_bar_remote_config    for select using (true);
create policy anon_select_dashboard on public.segment_insights            for select using (true);
create policy anon_select_dashboard on public.segment_driver_metrics      for select using (true);
create policy anon_select_dashboard on public.branches                    for select using (true);
create policy anon_select_dashboard on public.drivers                     for select using (true);
create policy anon_select_dashboard on public.customer_satisfaction_records for select using (true);
create policy anon_select_dashboard on public.admin_audit_log             for select using (true);
create policy anon_select_dashboard on public.dashboard_model_quality     for select using (true);
create policy anon_select_dashboard on public.dashboard_data_overrides    for select using (true);
create policy anon_select_dashboard on public.dashboard_settings          for select using (true);
create policy anon_select_dashboard on public.report_history              for select using (true);
create policy anon_select_dashboard on public.scheduled_exports           for select using (true);

-- profiles: each authenticated user can read their own row; admins handled via service role.
create policy self_select_profile on public.profiles
  for select using (auth.uid() = id);

-- login_events: service-role-only (no anon policy).

-- ─── Backfill branches.name_ar where empty (idempotent) ──────────────────────
update public.branches
   set name_ar = case slug
     when 'Riyadh' then 'الرياض'
     when 'Jeddah' then 'جدة'
     when 'Dammam' then 'الدمام'
     else name_ar end
 where name_ar is null;
