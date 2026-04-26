const express = require('express');
const { adminMiddleware } = require('../middleware/auth');
const { supabaseAdmin } = require('../supabase');

const router = express.Router();

// GET /api/admin/users
router.get('/users', adminMiddleware, async (req, res) => {
  const { page = 1, limit = 20, search = '' } = req.query;
  const from = (page - 1) * limit;
  const to = from + parseInt(limit) - 1;
  try {
    let query = supabaseAdmin
      .from('users')
      .select('id, name, email, role, created_at', { count: 'exact' })
      .range(from, to)
      .order('created_at', { ascending: false });
    if (search) query = query.ilike('name', `%${search}%`);
    const { data, count, error } = await query;
    if (error) throw error;
    res.json({ users: data || [], total: count || 0 });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// PUT /api/admin/users/:id/role
router.put('/users/:id/role', adminMiddleware, async (req, res) => {
  const { role } = req.body;
  if (!['user', 'admin'].includes(role)) return res.status(400).json({ error: 'Invalid role' });
  try {
    const { data, error } = await supabaseAdmin
      .from('users')
      .update({ role })
      .eq('id', req.params.id)
      .select('id, name, email, role')
      .single();
    if (error) throw error;
    res.json({ user: data });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE /api/admin/users/:id
router.delete('/users/:id', adminMiddleware, async (req, res) => {
  try {
    const { error } = await supabaseAdmin.from('users').delete().eq('id', req.params.id);
    if (error) throw error;
    res.json({ message: 'User deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /api/admin/stats
router.get('/stats', adminMiddleware, async (req, res) => {
  try {
    const [{ count: userCount }, { count: customerCount }] = await Promise.all([
      supabaseAdmin.from('users').select('*', { count: 'exact', head: true }),
      supabaseAdmin.from('customers').select('*', { count: 'exact', head: true }),
    ]);
    res.json({ totalUsers: userCount || 0, totalCustomers: customerCount || 0 });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST /api/admin/customers
router.post('/customers', adminMiddleware, async (req, res) => {
  try {
    const { data, error } = await supabaseAdmin
      .from('customers')
      .insert([req.body])
      .select()
      .single();
    if (error) throw error;
    res.status(201).json({ customer: data });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE /api/admin/customers/:id
router.delete('/customers/:id', adminMiddleware, async (req, res) => {
  try {
    const { error } = await supabaseAdmin.from('customers').delete().eq('id', req.params.id);
    if (error) throw error;
    res.json({ message: 'Customer deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
