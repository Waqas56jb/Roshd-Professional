/**
 * Verifies the admin→customer Realtime pipeline:
 *  1. subscribe to roshd_config_kv with the anon key (like the browser dashboard)
 *  2. perform a PUT /api/roshd/config write (like the admin panel)
 *  3. assert the Realtime change event arrives
 */
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.resolve(__dirname, '..', '.env') });

const URL = process.env.SUPABASE_URL;
const ANON = process.env.SUPABASE_ANON_KEY;
const API = process.env.ROSHD_TEST_API || 'http://localhost:5000';

const sb = createClient(URL, ANON, { auth: { persistSession: false } });

let got = false;
const channel = sb
  .channel('verify-rt')
  .on('postgres_changes', { event: '*', schema: 'public', table: 'roshd_config_kv' }, (p) => {
    got = true;
    console.log('REALTIME EVENT:', p.eventType, p.new?.config_key || p.old?.config_key);
  });

channel.subscribe(async (status) => {
  console.log('channel status:', status);
  if (status !== 'SUBSCRIBED') return;
  // Give the socket a beat, then trigger an admin-style write.
  await new Promise((r) => setTimeout(r, 800));
  const res = await fetch(API + '/api/roshd/config', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ key: '__rt_probe__', payload: { ts: Date.now() } }),
  });
  console.log('admin write status:', res.status);
  // Wait for the event.
  for (let i = 0; i < 30 && !got; i++) await new Promise((r) => setTimeout(r, 200));
  console.log(got ? 'PASS — Realtime delivered the change' : 'FAIL — no Realtime event');
  await sb.removeChannel(channel);
  process.exit(got ? 0 : 1);
});

setTimeout(() => {
  console.log('FAIL — timeout');
  process.exit(1);
}, 20000);
