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

/**
 * Adds fetchpriority="high" to the main entry script to tell the browser this
 * is a critical resource. This helps the browser prioritize downloading the
 * main JS bundle over less important resources, improving FCP/LCP on slow
 * connections.
 */
function prioritizeEntryScriptPlugin() {
  return {
    name: "prioritize-entry-script",
    enforce: "post",
    transformIndexHtml(html, ctx) {
      if (!ctx.bundle) return html; // build only

      // Find the main entry chunk (index-*.js that's the entry point)
      const entryChunk = Object.keys(ctx.bundle).find(
        (k) =>
          k.startsWith("assets/index-") &&
          k.endsWith(".js") &&
          ctx.bundle[k].isEntry,
      );

      if (!entryChunk) return html;

      // Add fetchpriority="high" to the module script
      return html.replace(
        new RegExp(
          `<script type="module"([^>]*?)src="/${entryChunk.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}"`,
          "g",
        ),
        `<script type="module" fetchpriority="high"$1src="/${entryChunk}"`,
      );
    },
  };
}

/**
 * Converts Vite's injected render-blocking <link rel="stylesheet"> into a
 * non-blocking preload+onload swap. The critical above-the-fold CSS is already
 * inlined in index.html, so the full bundle can load asynchronously without
 * blocking first paint. A <noscript> fallback keeps styles working with JS off.
 *
 * Runs at the very end (enforce: "post") so it sees the <link> tags after Vite
 * has injected them for the built bundle.
 */
function nonBlockingCssPlugin() {
  return {
    name: "non-blocking-css",
    enforce: "post",
    transformIndexHtml(html, ctx) {
      if (!ctx.bundle) return html; // build only

      const noscriptLinks = [];

      const out = html.replace(
        /<link\s+rel="stylesheet"\s+([^>]*?)href="([^"]+\.css)"([^>]*)>/g,
        (_match, before, href, after) => {
          noscriptLinks.push(
            `<link rel="stylesheet" href="${href}"${before ? " " + before.trim() : ""}${after ? " " + after.trim() : ""}>`,
          );
          const attrs = `${before}${after}`.trim();
          const extra = attrs ? ` ${attrs}` : "";
          return (
            `<link rel="preload" as="style" href="${href}"${extra} ` +
            `onload="this.onload=null;this.rel='stylesheet'">`
          );
        },
      );

      if (noscriptLinks.length === 0) return out;

      const noscript = `    <noscript>${noscriptLinks.join("")}</noscript>\n`;
      return out.replace("</head>", noscript + "  </head>");
    },
  };
}

export default defineConfig({
  plugins: [
    react(),
    lcpPreloadPlugin(),
    prioritizeEntryScriptPlugin(),
    nonBlockingCssPlugin(),
  ],
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
