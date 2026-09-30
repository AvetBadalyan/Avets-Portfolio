import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    react(),
    // Remove modulepreload hints for the framer-motion vendor chunk.
    // Lighthouse reports it as "unused JS" on initial load because the chunk
    // is only needed by lazily-loaded sections. Stripping the hint means the
    // browser won't eagerly fetch it — it will download on demand when the
    // first below-fold section is scrolled into view.
    {
      name: "strip-motion-modulepreload",
      transformIndexHtml(html) {
        return html.replace(
          /<link rel="modulepreload"[^>]*motion-vendor[^>]*>\n?/g,
          "",
        );
      },
    },
  ],
  build: {
    outDir: "build",
    rollupOptions: {
      output: {
        // Split large, rarely-changing vendor libs into their own chunks so
        // they cache across deploys and don't re-download when app code changes.
        manualChunks: {
          "react-vendor": ["react", "react-dom"],
          "motion-vendor": ["framer-motion"],
        },
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
