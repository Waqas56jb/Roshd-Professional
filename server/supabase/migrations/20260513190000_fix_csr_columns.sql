-- Fix customer_satisfaction_records: live table has smallint ratings and is
-- missing aggregate columns. Ratings are 1–5 scale and may be fractional
-- (e.g. 3.5), so widen to numeric. Add optional aggregate/meta columns.

alter table public.customer_satisfaction_records
  alter column rating_1 type numeric(4,2) using rating_1::numeric,
  alter column rating_2 type numeric(4,2) using rating_2::numeric,
  alter column rating_3 type numeric(4,2) using rating_3::numeric,
  alter column rating_4 type numeric(4,2) using rating_4::numeric;

alter table public.customer_satisfaction_records
  alter column service_line drop not null;

alter table public.customer_satisfaction_records
  add column if not exists overall_satisfaction numeric(4,2),
  add column if not exists source text default 'survey',
  add column if not exists meta jsonb default '{}'::jsonb,
  add column if not exists captured_at timestamptz default now();
