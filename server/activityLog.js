const { supabaseAdmin } = require('./supabase');

/**
 * Write a real activity log entry to Supabase.
 * Silently fails so it never breaks the main request.
 */
async function logActivity({ actorId, actorName, actorRole, action, entityType, entityId, detail, metadata }) {
  try {
    await supabaseAdmin.from('activity_logs').insert([{
      actor_id:    actorId   || null,
      actor_name:  actorName || 'System',
      actor_role:  actorRole || 'system',
      action,
      entity_type: entityType || null,
      entity_id:   entityId   ? String(entityId) : null,
      detail:      detail     || null,
      metadata:    metadata   || null,
    }]);
  } catch (err) {
    // Never break the main request flow
    console.warn('[activityLog] Failed to write:', err.message);
  }
}

module.exports = { logActivity };
