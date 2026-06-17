-- ═══════════════════════════════════════════════════════════════════════════════
-- Roshd Professional — Regions (admin-managed grouping of branches)
--
-- Client rule: a Region is a combination of branches. In the filter toolbar,
-- selecting a Region disables the Branch filter and vice-versa. Type-3 admin
-- inputs (Top Driver, Invest Now, Model Quality metrics, …) are scoped by the
-- 3-filter key region|branch|service.
--
-- Regions and their branch membership are fully admin-editable; the seed below
-- is just a sensible Saudi default the client can change later.
-- ═══════════════════════════════════════════════════════════════════════════════

create table if not exists public.regions (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  name_en text not null,
  name_ar text,
  sort_order int not null default 0,
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- A branch belongs to at most one region.
alter table public.branches add column if not exists region_id uuid references public.regions (id) on delete set null;

-- ─── Seed default regions (idempotent) ───────────────────────────────────────
insert into public.regions (slug, name_en, name_ar, sort_order)
select v.slug, v.name_en, v.name_ar, v.sort_order
from (values
  ('central',  'Central Region',  'المنطقة الوسطى',  1),
  ('western',  'Western Region',  'المنطقة الغربية',  2),
  ('eastern',  'Eastern Region',  'المنطقة الشرقية',  3),
  ('southern', 'Southern Region', 'المنطقة الجنوبية', 4)
) as v(slug, name_en, name_ar, sort_order)
where not exists (select 1 from public.regions r where r.slug = v.slug);

-- Ensure the 5 branches referenced by the live filter config exist as rows.
-- (Legacy branches table keeps NOT NULL name/city — populate both.)
insert into public.branches (slug, name, name_en, name_ar, city, sort_order, is_active)
select v.slug, v.name_en, v.name_en, v.name_ar, v.city, v.sort_order, true
from (values
  ('Madinah', 'Madinah', 'المدينة المنورة', 'Madinah', 4),
  ('Jizan',   'Jizan',   'جيزان',           'Jizan',   5)
) as v(slug, name_en, name_ar, city, sort_order)
where not exists (select 1 from public.branches b where b.slug = v.slug);

-- ─── Map branches → regions (default; admin can reassign) ─────────────────────
update public.branches b set region_id = r.id
from public.regions r
where b.region_id is null and (
  (b.slug = 'Riyadh'  and r.slug = 'central')  or
  (b.slug = 'Jeddah'  and r.slug = 'western')  or
  (b.slug = 'Madinah' and r.slug = 'western')  or
  (b.slug = 'Dammam'  and r.slug = 'eastern')  or
  (b.slug = 'Jizan'   and r.slug = 'southern')
);

-- ─── Realtime + RLS ──────────────────────────────────────────────────────────
do $$
begin
  if exists (select 1 from pg_publication where pubname = 'supabase_realtime') then
    -- add regions to the existing publication if not already present
    if not exists (
      select 1 from pg_publication_tables
      where pubname = 'supabase_realtime' and schemaname = 'public' and tablename = 'regions'
    ) then
      execute 'alter publication supabase_realtime add table public.regions';
    end if;
  end if;
end $$;

alter table public.regions enable row level security;
drop policy if exists anon_select_dashboard on public.regions;
create policy anon_select_dashboard on public.regions for select using (true);
