-- Filter toolbar configuration (shared shape as localStorage key roshd_filter_bar_config).
-- Run in Supabase SQL Editor once per project.

create table if not exists public.filter_bar_remote_config (
  id smallint primary key default 1 check (id = 1),
  config jsonb not null default '{"filters":[]}'::jsonb,
  updated_at timestamptz not null default now()
);

comment on table public.filter_bar_remote_config is 'Customer/admin toolbar filters JSON; GET /api/filters reads, PUT upserts with ROSHD_FILTERS_ADMIN_TOKEN.';

-- Optional: tighten RLS — API uses service role and bypasses RLS for reads/writes.
