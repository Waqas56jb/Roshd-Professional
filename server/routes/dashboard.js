const express = require('express');
const { authMiddleware } = require('../middleware/auth');
const { supabaseAdmin } = require('../supabase');

const router = express.Router();

// GET /api/dashboard/data?branch=&gender=&service=
router.get('/data', authMiddleware, async (req, res) => {
  const { branch = 'All Branches', gender = 'All Genders', service = 'All Services' } = req.query;
  try {
    let query = supabaseAdmin.from('driver_metrics').select('*');
    if (branch !== 'All Branches') query = query.eq('branch', branch);
    if (gender !== 'All Genders') query = query.eq('gender', gender);
    if (service !== 'All Services') query = query.eq('service', service);

    const { data: metrics, error } = await query;
    if (error) throw error;

    const { data: summary } = await supabaseAdmin
      .from('dashboard_summary')
      .select('*')
      .eq('branch', branch)
      .eq('gender', gender)
      .eq('service', service)
      .single();

    res.json({ metrics: metrics || [], summary: summary || null });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /api/dashboard/branches
router.get('/branches', authMiddleware, async (req, res) => {
  try {
    const { data, error } = await supabaseAdmin.from('branches').select('*').order('name');
    if (error) throw error;
    res.json({ branches: data || [] });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /api/dashboard/segments
router.get('/segments', authMiddleware, async (req, res) => {
  try {
    const { data, error } = await supabaseAdmin.from('segment_comparison').select('*');
    if (error) throw error;
    res.json({ segments: data || [] });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
