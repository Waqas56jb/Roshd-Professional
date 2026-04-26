-- Run this in your Supabase SQL Editor to create the activity_logs table

CREATE TABLE IF NOT EXISTS activity_logs (
  id          uuid            PRIMARY KEY DEFAULT gen_random_uuid(),
  actor_id    uuid            REFERENCES users(id) ON DELETE SET NULL,
  actor_name  text,
  actor_role  text,
  action      text            NOT NULL,  -- e.g. 'user.register', 'user.delete', 'role.update'
  entity_type text,                      -- 'user', 'customer', 'config'
  entity_id   text,
  detail      text,                      -- human-readable description
  metadata    jsonb,
  created_at  timestamptz     NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_activity_logs_created ON activity_logs(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_activity_logs_actor   ON activity_logs(actor_id);
