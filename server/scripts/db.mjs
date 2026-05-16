/**
 * Direct Postgres connection helper for migrations + verification.
 * Reads DATABASE_URL from ../../.env.
 * Usage:
 *   node scripts/db.mjs ping
 *   node scripts/db.mjs query "select now()"
 *   node scripts/db.mjs file ./scripts/sql/0001_foo.sql
 *   node scripts/db.mjs tables           # list all public tables
 *   node scripts/db.mjs columns <table>  # show columns of a table
 *   node scripts/db.mjs realtime         # show tables published on supabase_realtime
 */
import fs from 'node:fs';
import path from 'node:path';
import dns from 'node:dns';
import { fileURLToPath } from 'node:url';
import pg from 'pg';
import dotenv from 'dotenv';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.resolve(__dirname, '..', '..', '.env') });

// Supabase direct-DB host is IPv6-only on new projects. Prefer v6.
dns.setDefaultResultOrder('verbatim');

const url = process.env.DATABASE_URL;
if (!url) {
  console.error('DATABASE_URL missing in .env');
  process.exit(1);
}

// Resolve hostname → first address (forces v6 when only AAAA exists).
async function resolvedHost(u) {
  const { hostname } = new URL(u);
  const addrs = await dns.promises.lookup(hostname, { all: true });
  return { hostname, addrs };
}

// Project DB is reachable only via the connection pooler from this machine
// (direct db.<ref>.supabase.co is IPv6-only and unreachable here).
const REF = process.env.SUPABASE_PROJECT_ID;
const PW = process.env.DATABASE_PASSWORD;
const POOLER_HOST = process.env.SUPABASE_POOLER_HOST || 'aws-1-ap-northeast-2.pooler.supabase.com';
const POOLER_PORT = Number(process.env.SUPABASE_POOLER_PORT || 6543); // 6543 = transaction mode
const u = new URL(url);

const client = new pg.Client({
  host: POOLER_HOST,
  port: POOLER_PORT,
  database: 'postgres',
  user: `postgres.${REF}`,
  password: PW || decodeURIComponent(u.password),
  ssl: { rejectUnauthorized: false, servername: POOLER_HOST },
});

async function run() {
  const [cmd, ...rest] = process.argv.slice(2);
  await client.connect();
  try {
    if (!cmd || cmd === 'ping') {
      const r = await client.query('select now() as now, current_database() as db, current_user as usr');
      console.log(JSON.stringify(r.rows[0], null, 2));
      return;
    }
    if (cmd === 'query') {
      const sql = rest.join(' ');
      if (!sql) throw new Error('usage: db.mjs query "<sql>"');
      const r = await client.query(sql);
      console.log(JSON.stringify(r.rows, null, 2));
      return;
    }
    if (cmd === 'file') {
      const f = rest[0];
      if (!f) throw new Error('usage: db.mjs file <path.sql>');
      const sql = fs.readFileSync(path.resolve(f), 'utf8');
      const r = await client.query(sql);
      const rows = Array.isArray(r) ? r : [r];
      console.log(
        JSON.stringify(
          rows.map((x) => ({ command: x.command, rowCount: x.rowCount })),
          null,
          2
        )
      );
      return;
    }
    if (cmd === 'tables') {
      const r = await client.query(`
        select table_name from information_schema.tables
        where table_schema = 'public' order by table_name
      `);
      console.log(r.rows.map((x) => x.table_name).join('\n'));
      return;
    }
    if (cmd === 'columns') {
      const t = rest[0];
      if (!t) throw new Error('usage: db.mjs columns <table>');
      const r = await client.query(
        `select column_name, data_type, is_nullable, column_default
         from information_schema.columns
         where table_schema = 'public' and table_name = $1
         order by ordinal_position`,
        [t]
      );
      console.table(r.rows);
      return;
    }
    if (cmd === 'realtime') {
      const r = await client.query(`
        select schemaname, tablename
        from pg_publication_tables
        where pubname = 'supabase_realtime'
        order by schemaname, tablename
      `);
      console.log(r.rows.map((x) => `${x.schemaname}.${x.tablename}`).join('\n') || '(none)');
      return;
    }
    throw new Error('Unknown command: ' + cmd);
  } finally {
    await client.end();
  }
}

run().catch((e) => {
  console.error('[db]', e.message);
  process.exit(1);
});
