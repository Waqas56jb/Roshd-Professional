import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function roshdCustomerDashboardEmbedServe() {
  const rootDir = path.resolve(__dirname, "..");
  return {
    name: "roshd-customer-dashboard-embed",
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const raw = req.url || "";
        const urlPath = raw.split("?")[0];
        if (urlPath === "/customer-dashboard.html") {
          try {
            const htmlPath = path.join(rootDir, "index.html");
            res.statusCode = 200;
            res.setHeader("Content-Type", "text/html; charset=utf-8");
            res.end(fs.readFileSync(htmlPath, "utf8"));
          } catch {
            res.statusCode = 500;
            res.end("Failed to load customer dashboard bundle");
          }
          return;
        }
        const m = /^\/(logo\d*\.png)$/i.exec(urlPath);
        if (m) {
          const fp = path.join(rootDir, m[1]);
          if (fs.existsSync(fp)) {
            res.statusCode = 200;
            res.setHeader("Content-Type", "image/png");
            res.end(fs.readFileSync(fp));
            return;
          }
        }
        next();
      });
    },
    closeBundle() {
      try {
        const distDir = path.join(__dirname, "dist");
        fs.mkdirSync(distDir, { recursive: true });
        const srcHtml = path.join(rootDir, "index.html");
        const srcLogo = path.join(rootDir, "logo.png");
        fs.copyFileSync(srcHtml, path.join(distDir, "customer-dashboard.html"));
        if (fs.existsSync(srcLogo))
          fs.copyFileSync(srcLogo, path.join(distDir, "logo.png"));
      } catch (_) {
        /* dist may not exist in some tooling contexts */
      }
    },
  };
}

export default defineConfig({
  plugins: [react(), roshdCustomerDashboardEmbedServe()],
  server: { fs: { allow: [".."] } },
});
