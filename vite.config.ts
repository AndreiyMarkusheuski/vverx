import { defineConfig, splitVendorChunkPlugin } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";
import { resolve } from 'path'

const root = resolve(__dirname, 'src')
const outDir = resolve(__dirname, 'dist')

export default defineConfig(({command, mode}) => ({
  root,
  plugins: [react(), eslint(), splitVendorChunkPlugin()],
  build: {
    cssMinify: true,
    brotliSize: false,
    manifest: false,
    outDir,
    empryOutDit: true,
    rollupOptions: {
      input: {
        home: resolve(root, 'index.html'),
        catalog: resolve(root, 'catalog', 'index.html')
      },
      output: {
        manualChunks(id: string) {
          // creating a chunk to @open-ish deps. Reducing the vendor chunk size
          if (id.includes('@open-ish') || id.includes('tslib')) {
            return '@open-ish';
          }
        },
      },
    }
  },
  resolve: {
    alias: {
      "@assets": resolve(__dirname, "src/assets/images"),
    },
  },
}))