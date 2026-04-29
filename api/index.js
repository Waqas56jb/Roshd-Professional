/**
 * Vercel serverless entry — delegates to the Express app in server/.
 * Rewrites route all paths here so static files + /api/auth/* work together.
 */
import app from "../server/server.js";

export default app;
