/**
 * Vercel Node serverless adapter — plain `export default app` often crashes;
 * serverless-http bridges Express ⇄ Lambda.
 */
import serverless from "serverless-http";
import app from "../server/server.js";

export default serverless(app);
