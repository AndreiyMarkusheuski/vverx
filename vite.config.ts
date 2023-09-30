import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";
import { resolve } from 'path'

const root = resolve(__dirname, 'src')
const outDir = resolve(__dirname, 'dist')

export default defineConfig({
  root,
  plugins: [react(), eslint()],
  build: {
    outDir,
    empryOutDit: true,
    rollupOptions: {
      input: {
        home: resolve(root, 'index.html'),
        catalog: resolve(root, 'catalog', 'index.html')
      }
    }
  },
  resolve: {
    alias: {
      "@assets": resolve(__dirname, "src/assets/images"),
    },
  },
});
