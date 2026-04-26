const express = require('express');
const { authMiddleware } = require('../middleware/auth');
const { supabaseAdmin } = require('../supabase');

const router = express.Router();

// GET /api/customers?branch=&gender=&service=&page=&limit=
router.get('/', authMiddleware, async (req, res) => {
  const { branch, gender, service, page = 1, limit = 50 } = req.query;
  const from = (page - 1) * limit;
  const to = from + parseInt(limit) - 1;
  try {
    let query = supabaseAdmin.from('customers').select('*', { count: 'exact' }).range(from, to);
    if (branch && branch !== 'All Branches') query = query.eq('branch', branch);
    if (gender && gender !== 'All Genders') query = query.eq('gender', gender);
    if (service && service !== 'All Services') query = query.eq('service', service);

    const { data, count, error } = await query;
    if (error) throw error;
    res.json({ customers: data || [], total: count || 0 });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /api/customers/:id
router.get('/:id', authMiddleware, async (req, res) => {
  try {
    const { data, error } = await supabaseAdmin
      .from('customers')
      .select('*')
      .eq('id', req.params.id)
      .single();
    if (error) throw error;
    res.json({ customer: data });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
