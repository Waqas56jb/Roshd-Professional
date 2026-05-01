/**
 * Vercel Node.js serverless adapter.
 * serverless-http bridges Express <-> Vercel Lambda runtime.
 */
import serverless from "serverless-http";
import app from "../server.js";

export default serverless(app);
