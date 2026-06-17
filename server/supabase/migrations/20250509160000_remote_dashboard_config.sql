-- Remote dashboard configuration for production (toolbar filters + unified KV bundle).
-- Applied via: supabase db push (linked project) or Supabase SQL Editor.

create table if not exists public.filter_bar_remote_config (
  id smallint primary key default 1 check (id = 1),
  config jsonb not null default '{"filters":[]}'::jsonb,
  updated_at timestamptz not null default now()
);

comment on table public.filter_bar_remote_config is 'Customer/admin toolbar filters JSON; GET /api/filters reads, PUT upserts with ROSHD_FILTERS_ADMIN_TOKEN.';

create table if not exists public.roshd_config_kv (
  config_key text primary key,
  payload jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

comment on table public.roshd_config_kv is 'Dashboard/admin JSON blobs; GET/PUT /api/roshd/config';

create index if not exists idx_roshd_config_kv_updated on public.roshd_config_kv (updated_at desc);
