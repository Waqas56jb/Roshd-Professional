-- ============================================================
--  Roshd Professional — Complete Database Schema
--  Project: sofxmykocibzcrxdvjag.supabase.co
--  Run via: node server/scripts/setup-db.js
-- ============================================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- ────────────────────────────────────────────────────────────
-- 1. USERS
-- ────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS users (
  id            UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  name          TEXT        NOT NULL,
  email         TEXT        UNIQUE NOT NULL,
  password_hash TEXT        NOT NULL,
  role          TEXT        NOT NULL DEFAULT 'user'
                            CHECK (role IN ('user','admin')),
  created_at    TIMESTAMPTZ DEFAULT NOW(),
  updated_at    TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);
CREATE INDEX IF NOT EXISTS idx_users_role  ON users(role);

-- ────────────────────────────────────────────────────────────
-- 2. BRANCHES
-- ────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS branches (
  id         UUID  PRIMARY KEY DEFAULT gen_random_uuid(),
  name       TEXT  UNIQUE NOT NULL,
  city       TEXT,
  region     TEXT,
  manager    TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Seed branches
INSERT INTO branches (name, city, region) VALUES
  ('Riyadh',  'Riyadh',  'Central'),
  ('Jeddah',  'Jeddah',  'Western'),
  ('Dammam',  'Dammam',  'Eastern')
ON CONFLICT (name) DO NOTHING;

-- ────────────────────────────────────────────────────────────
-- 3. CUSTOMERS  (satisfaction survey records)
-- ────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS customers (
  id              UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_ref    TEXT        UNIQUE,           -- e.g. "C-0001"
  branch          TEXT        NOT NULL,
  gender          TEXT        CHECK (gender IN ('Male','Female')),
  service         TEXT        CHECK (service IN ('Mechanical','Electrical','Body','Tires','General')),

  -- Satisfaction driver scores (1–5)
  quality         INTEGER     CHECK (quality       BETWEEN 1 AND 5),
  communication   INTEGER     CHECK (communication BETWEEN 1 AND 5),
  price           INTEGER     CHECK (price         BETWEEN 1 AND 5),
  speed           INTEGER     CHECK (speed         BETWEEN 1 AND 5),
  advisor_quality INTEGER     CHECK (advisor_quality BETWEEN 1 AND 5),

  -- Computed / derived
  overall_score   NUMERIC(3,1),
  risk            TEXT        DEFAULT 'Medium'
                              CHECK (risk IN ('Low','Medium','High')),
  notes           TEXT,
  created_at      TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_customers_branch  ON customers(branch);
CREATE INDEX IF NOT EXISTS idx_customers_gender  ON customers(gender);
CREATE INDEX IF NOT EXISTS idx_customers_service ON customers(service);
CREATE INDEX IF NOT EXISTS idx_customers_risk    ON customers(risk);

-- ────────────────────────────────────────────────────────────
-- 4. DRIVER METRICS  (PLS-SEM analysis results per filter)
-- ────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS driver_metrics (
  id                UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  branch            TEXT        NOT NULL DEFAULT 'All Branches',
  gender            TEXT        NOT NULL DEFAULT 'All Genders',
  service           TEXT        NOT NULL DEFAULT 'All Services',
  driver            TEXT        NOT NULL,    -- 'quality','communication','price','speed','advisor'

  path_coefficient  NUMERIC(6,4),
  effect_size       NUMERIC(6,4),
  t_value           NUMERIC(8,4),
  p_value           NUMERIC(8,6),
  significant       BOOLEAN     DEFAULT TRUE,
  rank              INTEGER,                 -- importance rank among drivers

  created_at        TIMESTAMPTZ DEFAULT NOW(),

  UNIQUE (branch, gender, service, driver)
);

CREATE INDEX IF NOT EXISTS idx_driver_filter ON driver_metrics(branch, gender, service);

-- Seed global driver metrics (All Branches / All Genders / All Services)
INSERT INTO driver_metrics (branch, gender, service, driver, path_coefficient, effect_size, t_value, p_value, significant, rank)
VALUES
  ('All Branches','All Genders','All Services','quality',        0.68, 0.32, 8.24, 0.000001, TRUE, 1),
  ('All Branches','All Genders','All Services','communication',  0.41, 0.17, 4.87, 0.000010, TRUE, 2),
  ('All Branches','All Genders','All Services','price',          0.29, 0.13, 3.21, 0.001400, TRUE, 3),
  ('All Branches','All Genders','All Services','advisor_quality',0.36, 0.10, 2.94, 0.003300, TRUE, 4),
  ('All Branches','All Genders','All Services','speed',          0.04, 0.01, 0.89, 0.374000, FALSE,5)
ON CONFLICT (branch, gender, service, driver) DO NOTHING;

-- ────────────────────────────────────────────────────────────
-- 5. DASHBOARD SUMMARY  (aggregated per filter combination)
-- ────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS dashboard_summary (
  id              UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  branch          TEXT        NOT NULL DEFAULT 'All Branches',
  gender          TEXT        NOT NULL DEFAULT 'All Genders',
  service         TEXT        NOT NULL DEFAULT 'All Services',

  avg_score       NUMERIC(4,2),
  model_r2        NUMERIC(4,2),   -- R² / explanatory power (0–1)
  n_customers     INTEGER,
  top_driver      TEXT,
  top_impact      NUMERIC(6,4),
  high_risk_pct   NUMERIC(5,2),
  low_risk_pct    NUMERIC(5,2),
  medium_risk_pct NUMERIC(5,2),

  created_at      TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE (branch, gender, service)
);

-- Seed global summary
INSERT INTO dashboard_summary (branch, gender, service, avg_score, model_r2, n_customers, top_driver, top_impact, high_risk_pct, medium_risk_pct, low_risk_pct)
VALUES
  ('All Branches','All Genders','All Services', 3.74, 0.72, 209, 'quality', 0.32, 17.00, 45.00, 38.00),
  ('Riyadh',      'All Genders','All Services', 3.70, 0.74,  89, 'quality', 0.31, 18.00, 43.00, 39.00),
  ('Jeddah',      'All Genders','All Services', 3.40, 0.69,  67, 'quality', 0.35, 19.00, 47.00, 34.00),
  ('Dammam',      'All Genders','All Services', 3.20, 0.63,  53, 'quality', 0.28, 15.00, 44.00, 41.00)
ON CONFLICT (branch, gender, service) DO NOTHING;

-- ────────────────────────────────────────────────────────────
-- 6. SEGMENT COMPARISON
-- ────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS segment_comparison (
  id             UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  segment_type   TEXT        NOT NULL,   -- 'branch' | 'gender' | 'service'
  segment_value  TEXT        NOT NULL,
  avg_score      NUMERIC(4,2),
  n_customers    INTEGER,
  top_driver     TEXT,
  model_r2       NUMERIC(4,2),
  high_risk_pct  NUMERIC(5,2),
  created_at     TIMESTAMPTZ DEFAULT NOW(),

  UNIQUE (segment_type, segment_value)
);

INSERT INTO segment_comparison (segment_type, segment_value, avg_score, n_customers, top_driver, model_r2, high_risk_pct)
VALUES
  ('branch', 'Riyadh',      3.70,  89, 'quality', 0.74, 18.00),
  ('branch', 'Jeddah',      3.40,  67, 'quality', 0.69, 19.00),
  ('branch', 'Dammam',      3.20,  53, 'quality', 0.63, 15.00),
  ('gender', 'Male',        3.65, 132, 'quality', 0.71, 16.00),
  ('gender', 'Female',      3.80,  77, 'quality', 0.74, 18.00),
  ('service','Mechanical',  3.55,  64, 'quality', 0.68, 20.00),
  ('service','Electrical',  3.62,  48, 'quality', 0.70, 14.00),
  ('service','Body',        3.30,  37, 'quality', 0.65, 21.00),
  ('service','Tires',       3.82,  31, 'quality', 0.75, 13.00),
  ('service','General',     3.70,  29, 'quality', 0.72, 17.00)
ON CONFLICT (segment_type, segment_value) DO NOTHING;

-- ────────────────────────────────────────────────────────────
-- 7. AUTO-UPDATE updated_at trigger for users
-- ────────────────────────────────────────────────────────────
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS set_users_updated_at ON users;
CREATE TRIGGER set_users_updated_at
  BEFORE UPDATE ON users
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- ────────────────────────────────────────────────────────────
-- 8. ROW LEVEL SECURITY (optional — service role bypasses it)
-- ────────────────────────────────────────────────────────────
ALTER TABLE users              ENABLE ROW LEVEL SECURITY;
ALTER TABLE branches           ENABLE ROW LEVEL SECURITY;
ALTER TABLE customers          ENABLE ROW LEVEL SECURITY;
ALTER TABLE driver_metrics     ENABLE ROW LEVEL SECURITY;
ALTER TABLE dashboard_summary  ENABLE ROW LEVEL SECURITY;
ALTER TABLE segment_comparison ENABLE ROW LEVEL SECURITY;

-- Service role (used by our backend) bypasses all RLS
-- No anon/public access needed — all queries go through our API
CREATE POLICY "service_role_all" ON users              FOR ALL USING (auth.role() = 'service_role');
CREATE POLICY "service_role_all" ON branches           FOR ALL USING (auth.role() = 'service_role');
CREATE POLICY "service_role_all" ON customers          FOR ALL USING (auth.role() = 'service_role');
CREATE POLICY "service_role_all" ON driver_metrics     FOR ALL USING (auth.role() = 'service_role');
CREATE POLICY "service_role_all" ON dashboard_summary  FOR ALL USING (auth.role() = 'service_role');
CREATE POLICY "service_role_all" ON segment_comparison FOR ALL USING (auth.role() = 'service_role');
