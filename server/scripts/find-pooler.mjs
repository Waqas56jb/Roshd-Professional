/** Probe Supabase poolers across regions to find the one that serves this project. */
import pg from 'pg';
import dotenv from 'dotenv';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.resolve(__dirname, '..', '.env') });

const REF = process.env.SUPABASE_PROJECT_ID;
const PW = process.env.DATABASE_PASSWORD;
if (!REF || !PW) {
  console.error('Need SUPABASE_PROJECT_ID + DATABASE_PASSWORD in .env');
  process.exit(1);
}

const prefixes = ['aws-0', 'aws-1'];
const regions = [
  'us-east-1', 'us-east-2', 'us-west-1', 'us-west-2',
  'eu-central-1', 'eu-central-2', 'eu-west-1', 'eu-west-2', 'eu-west-3', 'eu-north-1',
  'ap-south-1', 'ap-southeast-1', 'ap-southeast-2', 'ap-northeast-1', 'ap-northeast-2',
  'sa-east-1', 'ca-central-1', 'me-south-1',
];

async function probe(prefix, region) {
  const host = `${prefix}-${region}.pooler.supabase.com`;
  const client = new pg.Client({
    host,
    port: 6543,
    database: 'postgres',
    user: `postgres.${REF}`,
    password: PW,
    ssl: { rejectUnauthorized: false, servername: host },
    connectionTimeoutMillis: 5000,
    statement_timeout: 5000,
  });
  try {
    await client.connect();
    const r = await client.query("select current_database() as db, current_user as usr, inet_server_addr() as ip");
    await client.end();
    return { prefix, region, ok: true, ...r.rows[0] };
  } catch (e) {
    try { await client.end(); } catch (_) {}
    return { prefix, region, ok: false, error: e.message };
  }
}

(async () => {
  for (const p of prefixes) {
    for (const r of regions) {
      const res = await probe(p, r);
      const tag = res.ok ? 'OK' : 'no';
      console.log(`[${tag}] ${p}-${r}: ${res.ok ? JSON.stringify(res) : res.error}`);
      if (res.ok) process.exit(0);
    }
  }
  process.exit(1);
})();
