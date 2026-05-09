-- ═══════════════════════════════════════════════════════════════════════════════
-- ROSHD — Unified dashboard config (replaces scattered localStorage when synced)
--
-- Each row = one former localStorage document. Keys MUST match client keys exactly.
-- Apply in Supabase SQL Editor after supabase/schema.sql
-- ═══════════════════════════════════════════════════════════════════════════════

create table if not exists public.roshd_config_kv (
  config_key text primary key,
  payload jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

comment on table public.roshd_config_kv is 'Dashboard/admin JSON blobs; GET/PUT /api/roshd/config';

-- Optional: who last wrote (set from API if you pass user id later)
-- alter table public.roshd_config_kv add column if not exists updated_by uuid references auth.users (id);

create index if not exists idx_roshd_config_kv_updated on public.roshd_config_kv (updated_at desc);
