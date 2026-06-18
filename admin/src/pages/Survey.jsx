import { useEffect, useState, useRef, useCallback } from 'react';
import * as XLSX from 'xlsx';
import { Upload, Download, FileSpreadsheet, CheckCircle2, AlertTriangle, Trash2, Database, PencilLine } from 'lucide-react';
import { api, notifyDashboard } from '../lib/api.js';
import { useToast } from '../context/ToastContext.jsx';
import { PageHeader, Confirm } from '../components/ui.jsx';
import ManualSurveyEntry from '../components/ManualSurveyEntry.jsx';
import { ALL_COLUMNS, CONSTRUCTS, META_COLS, STAGE_COLS, templateCsv, validateRows, rowToRecord } from '../lib/survey.js';

function download(name, content, type) {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = name; a.click();
  URL.revokeObjectURL(url);
}

export default function Survey() {
  const toast = useToast();
  const fileRef = useRef(null);
  const [rows, setRows] = useState(null);
  const [check, setCheck] = useState(null);
  const [fileName, setFileName] = useState('');
  const [busy, setBusy] = useState(false);
  const [count, setCount] = useState('—');
  const [clearing, setClearing] = useState(false);
  const [manual, setManual] = useState(false);

  const refreshCount = useCallback(async () => {
    try { const c = await api.get('/api/customers'); setCount((c?.customers || []).length); } catch { setCount('—'); }
  }, []);
  useEffect(() => { refreshCount(); }, [refreshCount]);

  function onFile(e) {
    const file = e.target.files?.[0];
    if (!file) return;
    setFileName(file.name);
    const reader = new FileReader();
    reader.onload = (ev) => {
      try {
        const wb = XLSX.read(ev.target.result, { type: 'array' });
        const ws = wb.Sheets[wb.SheetNames[0]];
        const json = XLSX.utils.sheet_to_json(ws, { defval: '' });
        setRows(json);
        setCheck(validateRows(json));
      } catch (err) {
        toast.error('Could not read file: ' + err.message);
        setRows(null); setCheck(null);
      }
    };
    reader.readAsArrayBuffer(file);
  }

  async function upload() {
    if (!rows?.length) return;
    setBusy(true);
    try {
      const records = rows.map(rowToRecord);
      const CHUNK = 500;
      let done = 0;
      for (let i = 0; i < records.length; i += CHUNK) {
        await api.post('/api/admin/customers/bulk', { records: records.slice(i, i + CHUNK) });
        done += Math.min(CHUNK, records.length - i);
      }
      notifyDashboard('customer-records-updated');
      toast.success(`Uploaded ${done} survey records. Dashboard auto-calcs updated.`);
      setRows(null); setCheck(null); setFileName(''); if (fileRef.current) fileRef.current.value = '';
      refreshCount();
    } catch (e) { toast.error(e.message); } finally { setBusy(false); }
  }

  async function clearAll() {
    try { await api.del('/api/admin/customers'); notifyDashboard('customer-records-updated'); toast.success('All survey records cleared.'); setClearing(false); refreshCount(); }
    catch (e) { toast.error(e.message); }
  }

  return (
    <div>
      <PageHeader
        title="Survey Data Upload"
        subtitle="Upload the fixed 45-column survey file. Each row is one response and feeds the auto-calculated charts (CX score, sample size, demographics, distributions)."
        actions={
          <div className="flex gap-2">
            <button className="btn-gold" onClick={() => setManual(true)}><PencilLine size={16} /> Add manually</button>
            <button className="btn-ghost" onClick={() => download('roshd-survey-template.csv', templateCsv(), 'text/csv')}><Download size={16} /> Template</button>
            <button className="btn-danger" onClick={() => setClearing(true)}><Trash2 size={16} /> Clear all</button>
          </div>
        }
      />

      <div className="grid lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 space-y-4">
          <label className="card flex cursor-pointer flex-col items-center justify-center gap-3 border-2 border-dashed border-white/10 py-12 text-center hover:border-gold/40 transition">
            <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gold/12 text-gold"><Upload size={24} /></span>
            <div>
              <div className="text-sm font-semibold text-ink">{fileName || 'Click to choose a file'}</div>
              <div className="text-xs text-ink-faint mt-1">Excel (.xlsx) or CSV · headers must match the 45 fixed columns</div>
            </div>
            <input ref={fileRef} type="file" accept=".xlsx,.xls,.csv" className="hidden" onChange={onFile} />
          </label>

          {check && (
            <div className={`card p-4 ${check.ok ? 'border-emerald-500/25' : 'border-amber-500/25'}`}>
              <div className="flex items-center gap-2 text-sm font-semibold">
                {check.ok ? <CheckCircle2 size={17} className="text-emerald-400" /> : <AlertTriangle size={17} className="text-amber-400" />}
                {check.ok ? `Validated — ${rows.length} rows ready` : 'Issues found'}
              </div>
              {!check.ok && <ul className="mt-2 list-disc pl-5 text-xs text-amber-300/90 space-y-1">{check.errors.map((e, i) => <li key={i}>{e}</li>)}</ul>}
              {rows?.length > 0 && (
                <div className="mt-3 overflow-x-auto rounded-xl border border-white/5">
                  <table className="w-full text-xs">
                    <thead><tr className="border-b border-white/5">{['case_number', 'branch', 'gender', 'service_type', 'age_group'].map((h) => <th key={h} className="table-head px-3 py-2">{h}</th>)}</tr></thead>
                    <tbody>{rows.slice(0, 5).map((r, i) => <tr key={i} className="border-b border-white/5 last:border-0">{['case_number', 'branch', 'gender', 'service_type', 'age_group'].map((h) => <td key={h} className="px-3 py-2 text-ink-soft">{String(r[h] ?? '')}</td>)}</tr>)}</tbody>
                  </table>
                </div>
              )}
              <button className="btn-gold mt-4" onClick={upload} disabled={busy || !rows?.length}><Database size={16} /> {busy ? 'Uploading…' : `Upload ${rows?.length || 0} records`}</button>
            </div>
          )}
        </div>

        <div className="space-y-4">
          <div className="card p-5">
            <div className="flex items-center gap-2 text-sm font-semibold"><FileSpreadsheet size={16} className="text-gold" /> Database</div>
            <div className="mt-3 text-3xl font-extrabold">{count}</div>
            <div className="text-xs text-ink-faint">survey records stored</div>
          </div>
          <div className="card p-5 text-xs text-ink-soft leading-relaxed">
            <div className="text-sm font-semibold text-ink mb-2">Fixed schema ({ALL_COLUMNS.length} columns)</div>
            <p className="text-ink-faint mb-2">Meta: {META_COLS.map((m) => m.key).join(', ')}</p>
            {CONSTRUCTS.map((c) => <p key={c.key} className="text-ink-faint">{c.label}: <span className="text-ink-soft">{c.cols} items</span></p>)}
            <p className="text-ink-faint mt-1">Stage ratings: {STAGE_COLS.length}</p>
            <p className="mt-3 text-[11px] text-ink-faint border-t border-white/5 pt-2">Construct means → driver scores; stage ratings → CX score; demographics → distributions.</p>
          </div>
        </div>
      </div>

      <Confirm open={clearing} onClose={() => setClearing(false)} onConfirm={clearAll} title="Clear all survey records" message="This permanently deletes every uploaded survey record from the database. The dashboard auto-calcs will reset." />

      <ManualSurveyEntry open={manual} onClose={() => setManual(false)} onSaved={refreshCount} />
    </div>
  );
}
