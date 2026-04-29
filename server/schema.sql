-- Roshd Professional — PostgreSQL schema for Supabase
-- Mirrors structures from admin (DATA, CUSTOMERS, branches, drivers, users) + auth/profiles pattern from README APIs.

-- Extensions (usually already enabled on Supabase)
create extension if not exists "pgcrypto";

-- ─── Branch directory (matches `branches` array: name, city, status, records, avg) ───
create table if not exists branches (
  id uuid primary key default gen_random_uuid(),
  name text not null unique,
  city text not null,
  status text not null default 'Active',
  survey_records integer not null default 0,
  avg_satisfaction numeric(3,2) not null default 0
);

-- ─── Satisfaction drivers catalog (matches `drivers` mgmt array: name, desc, path, impact, status) ───
create table if not exists drivers (
  id uuid primary key default gen_random_uuid(),
  name text not null unique,
  description text,
  path_coefficient numeric(5,3) not null,
  impact numeric(5,3) not null,
  status text not null default 'Active'
);

-- ─── Segment rollup (matches DATA root per key: branch_key → score, explanatory, top, risk, bullet arrays) ───
create table if not exists segment_insights (
  branch_key text primary key,
  score numeric(3,2) not null,
  explanatory integer not null,
  top_driver text not null,
  risk_driver text not null,
  invest_bullets jsonb not null default '[]'::jsonb,
  optimize_bullets jsonb not null default '[]'::jsonb,
  avoid_bullets jsonb not null default '[]'::jsonb
);

-- ─── Drivers under each DATA segment key (nested `drivers`: name, avg, path, impact, decision, cls) ───
create table if not exists segment_driver_metrics (
  id uuid primary key default gen_random_uuid(),
  branch_key text not null references segment_insights (branch_key) on delete cascade,
  sort_order integer not null default 0,
  name text not null,
  avg numeric(3,1) not null,
  path numeric(5,3) not null,
  impact numeric(5,3) not null,
  decision text not null,
  badge_class text,
  unique (branch_key, name)
);

create index if not exists idx_segment_driver_metrics_branch on segment_driver_metrics (branch_key);

-- ─── Customer satisfaction rows (matches CUSTOMERS[][0..8]) ───
create table if not exists customer_satisfaction_records (
  id uuid primary key default gen_random_uuid(),
  customer_ref text not null unique,
  branch text not null,
  gender text not null,
  service_line text not null,
  rating_1 smallint not null,
  rating_2 smallint not null,
  rating_3 smallint not null,
  rating_4 smallint not null,
  risk_tier text not null
);

create index if not exists idx_customer_records_branch on customer_satisfaction_records (branch);

-- ─── Auth-linked profiles (matches admin `users` array: first, last, email, role, branch, status) ───
-- Passwords live in Supabase auth.users — this holds app-facing fields after signup.
create table if not exists profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  first_name text,
  last_name text,
  email text unique,
  role text not null default 'customer',
  branch text default 'All Branches',
  status text not null default 'Active',
  updated_at timestamptz default now()
);

-- Keep email in sync if you duplicate it from auth (optional helper)
comment on column profiles.email is 'Optional mirror of auth.users.email for admin queries.';

