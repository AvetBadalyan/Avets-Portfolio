import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

/**
 * Injects a <link rel="preload" as="image"> for the LCP hero image into the
 * built index.html. Done as a plugin because the filename is content-hashed at
 * build time — we can't hardcode it in the source index.html.
 */
function lcpPreloadPlugin() {
  return {
    name: "lcp-preload",
    transformIndexHtml(html, ctx) {
      // Only runs during the build (ctx.bundle exists); skip dev server.
      if (!ctx.bundle) return html;

      // Find the hashed WebP asset for the hero photo.
      const imgChunk = Object.keys(ctx.bundle).find(
        (k) => k.includes("IMG_0861") && k.endsWith(".webp"),
      );
      if (!imgChunk) return html;

      const preload = `    <link rel="preload" as="image" href="/${imgChunk}" type="image/webp" fetchpriority="high" />\n`;
      // Insert just before </head>
      return html.replace("</head>", preload + "  </head>");
    },
  };
}

export default defineConfig({
  plugins: [react(), lcpPreloadPlugin()],
  build: {
    outDir: "build",
    // Increase chunk size warning limit since framer-motion is large but needed
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        // react-vendor is stable across deploys — keep it cached separately.
        // framer-motion is intentionally NOT in manualChunks: a manual chunk
        // forces the entire package into one file and disables Rollup's
        // tree-shaking, wasting ~20 KB of unused exports. Letting Rollup
        // handle it naturally means only the motion APIs actually imported
        // by lazy sections end up in the bundle.
        manualChunks: {
          "react-vendor": ["react", "react-dom"],
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
