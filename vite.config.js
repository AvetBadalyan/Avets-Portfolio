import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "build",
    // Increase chunk size warning limit since framer-motion is large but needed
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        // Split large, rarely-changing vendor libs into their own chunks so
        // they cache across deploys and don't re-download when app code changes.
        manualChunks: {
          "react-vendor": ["react", "react-dom"],
          // Split framer-motion into smaller pieces for better tree-shaking
          "motion-vendor": ["framer-motion"],
        },
      },
    },
    // Enable minification optimizations
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        // silence the legacy JS API deprecation warning from sass
        api: "modern-compiler",
      },
    },
  },
});
