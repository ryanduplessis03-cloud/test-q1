import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const root = resolve(__dirname, "..");

describe("Netlify deployment configuration", () => {
  it("publishes the Vite production build with SPA fallback and safe headers", () => {
    const config = readFileSync(resolve(root, "netlify.toml"), "utf8");

    expect(config).toContain('command = "npm run build"');
    expect(config).toContain('publish = "dist"');
    expect(config).toContain('NODE_VERSION = "22"');
    expect(config).toContain('from = "/*"');
    expect(config).toContain('to = "/index.html"');
    expect(config).toContain('status = 200');
    expect(config).toContain('for = "/assets/*"');
    expect(config).toContain('Cache-Control = "public, max-age=31536000, immutable"');
    expect(config).toContain('X-Content-Type-Options = "nosniff"');
  });
});
