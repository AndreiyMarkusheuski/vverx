import { defineConfig, splitVendorChunkPlugin } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";
import path, { resolve } from "path";
import { sync as globSync } from 'glob';
import { fileURLToPath } from 'url';

const root = resolve(__dirname, "src");
const outDir = resolve(__dirname, "dist");

export default defineConfig(({ command, mode }) => ({
  root,
  plugins: [react(), eslint(), splitVendorChunkPlugin()],
  build: {
    cssMinify: true,
    brotliSize: false,
    manifest: false,
    outDir,
    empryOutDit: true,
    rollupOptions: {
      input: Object.fromEntries(
        globSync("src/**/*.html").map((file) => [
          path.relative(
            "src",
            file.slice(0, file.length - path.extname(file).length)
          ),
          fileURLToPath(new URL(file, import.meta.url)),
        ])
      ),
      output: {
        manualChunks(id: string) {
          // creating a chunk to @open-ish deps. Reducing the vendor chunk size
          if (id.includes("@open-ish") || id.includes("tslib")) {
            return "@open-ish";
          }
        },
      },
    },
  },
  resolve: {
    alias: {
      "@assets": resolve(root, "public/assets/images"),
    },
  },
}));
