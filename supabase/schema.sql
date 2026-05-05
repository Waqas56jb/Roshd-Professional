-- ═══════════════════════════════════════════════════════════════════════════════
-- ROSHD Professional — Supabase / Postgres schema (reference migration)
--
-- Maps server/server.js routes: profiles, /api/dashboard/data, /api/branches,
-- /api/customers, /api/admin/*. Client index.html keeps embedded defaults; later
-- merge remotely loaded JSON → same shape as segment_insights + metrics + csr rows.
--
-- Apply in Supabase SQL Editor (adjust order vs existing prod tables).
--
-- ─── Branch directory ────────────────────────────────────────────────────────────
create table if not exists public.branches (
  id uuid primary key default gen_random_uuid (),
  slug text unique not null,
  name_en text not null,
  name_ar text,
  city text,
  sort_order int default 0,
  is_active boolean default true,
  created_at timestamptz default now ()
);

-- ─── Profiles (linked to auth.users) ────────────────────────────────────────────
create table if not exists public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  email text,
  first_name text,
  last_name text,
  role text not null default 'customer'
    check (role in ('customer', 'admin', 'analyst')),
  branch text,
  status text default 'Active' check (status in ('Active', 'Suspended')),
  avatar_url text,
  last_seen_at timestamptz,
  preferences jsonb default '{}'::jsonb,
  updated_at timestamptz default now ()
);

-- ─── Aggregate CX insight per toolbar segment ────────────────────────────────────
create table if not exists public.segment_insights (
  branch_key text primary key,
  score numeric(4, 2) not null,
  explanatory int not null,
  top_driver text not null,
  top_driver_ar text,
  risk_driver text not null,
  risk_driver_ar text,
  invest_bullets jsonb not null default '[]'::jsonb,
  optimize_bullets jsonb not null default '[]'::jsonb,
  avoid_bullets jsonb not null default '[]'::jsonb,
  invest_bullets_ar jsonb default '[]'::jsonb,
  optimize_bullets_ar jsonb default '[]'::jsonb,
  avoid_bullets_ar jsonb default '[]'::jsonb,
  updated_at timestamptz default now ()
);

-- ─── Driver metrics (joined in /api/dashboard/data) ────────────────────────────
create table if not exists public.segment_driver_metrics (
  id uuid primary key default gen_random_uuid (),
  branch_key text not null references public.segment_insights (branch_key) on delete cascade,
  sort_order int not null default 0,
  name text not null,
  name_ar text,
  avg numeric(5, 3) not null,
  path numeric(5, 3) not null,
  impact numeric(5, 3) not null,
  decision text not null,
  decision_ar text,
  badge_class text default '',
  created_at timestamptz default now ()
);

create index if not exists idx_segment_driver_metrics_branch on public.segment_driver_metrics (
  branch_key
);

-- ─── Catalog for admin counters / lookups ───────────────────────────────────────
create table if not exists public.drivers (
  id uuid primary key default gen_random_uuid (),
  slug text unique not null,
  label_en text not null,
  label_ar text,
  created_at timestamptz default now ()
);

-- ─── Respondent rows (bulk data + dashboards) ────────────────────────────────────
create table if not exists public.customer_satisfaction_records (
  id uuid primary key default gen_random_uuid (),
  customer_ref text unique not null,
  branch text not null,
  gender text check (gender in ('Male', 'Female')),
  service_line text,
  rating_1 numeric(4, 2),
  rating_2 numeric(4, 2),
  rating_3 numeric(4, 2),
  rating_4 numeric(4, 2),
  risk_tier text,
  visit_frequency text,
  age_band text,
  overall_satisfaction numeric(4, 2),
  source text default 'survey',
  meta jsonb default '{}'::jsonb,
  captured_at timestamptz default now ()
);

create index if not exists idx_csr_branch on public.customer_satisfaction_records (
  branch
);
create index if not exists idx_csr_risk on public.customer_satisfaction_records (
  risk_tier
);

-- ─── Session / login visibility (populate from Edge fn or gateway logs) ────────
create table if not exists public.login_events (
  id bigint generated always as identity primary key,
  user_id uuid references auth.users (id) on delete set null,
  email text,
  event_type text not null default 'sign_in'
    check (event_type in ('sign_in', 'sign_out', 'token_refresh')),
  ip text,
  user_agent text,
  created_at timestamptz default now ()
);

create index if not exists idx_login_events_user on public.login_events (user_id);
create index if not exists idx_login_events_created on public.login_events (
  created_at desc
);

-- ─── Measurement model KPIs (exec tile) ────────────────────────────────────────
create table if not exists public.dashboard_model_quality (
  id smallint primary key default 1 check (id = 1),
  r2_pct int default 72,
  alpha numeric(5, 3) default 0.88,
  cr numeric(5, 3) default 0.91,
  ave numeric(5, 3) default 0.64,
  htmt numeric(5, 3) default 0.78,
  updated_at timestamptz default now ()
);

insert into public.dashboard_model_quality (id)
  values (1)
on conflict (id) do nothing;

-- ─── Full bundle override JSON (future client merge atop DB_DATA) ─────────────
create table if not exists public.dashboard_data_overrides (
  id smallint primary key default 1 check (id = 1),
  merged_json jsonb not null default '{}'::jsonb,
  version int default 1,
  updated_at timestamptz default now (),
  updated_by uuid references auth.users (id)
);

insert into public.dashboard_data_overrides (id)
  values (1)
on conflict (id) do nothing;

-- ─── Admin audit ───────────────────────────────────────────────────────────────
create table if not exists public.admin_audit_log (
  id bigint generated always as identity primary key,
  admin_id uuid references auth.users (id),
  action text not null,
  entity text not null,
  entity_id text,
  payload jsonb,
  created_at timestamptz default now ()
);

create index if not exists idx_admin_audit_created on public.admin_audit_log (
  created_at desc
);

-- ─── Seeds ─────────────────────────────────────────────────────────────────────
insert into public.branches (slug, name_en, name_ar, sort_order)
  values ('Riyadh', 'Riyadh', 'الرياض', 1), ('Jeddah', 'Jeddah', 'جدة', 2), ('Dammam',
    'Dammam', 'الدمام', 3)
on conflict (slug) do nothing;

