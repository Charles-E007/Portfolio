import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
// import par défaut pour éviter problèmes CJS/ESM
import visualizer from "rollup-plugin-visualizer";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    // on laisse le visualizer dans rollupOptions.plugins (garantit exécution)
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // force sourcemap inline (sera embarqué dans le .js)
    sourcemap: "inline",
    // si tu veux revenir à externe plus tard, mets `true`
    chunkSizeWarningLimit: 2000,
    rollupOptions: {
      plugins: [
        visualizer({
          filename: "stats.html", // écrit à la racine du projet
          open: false,
          gzipSize: true,
        }),
      ],
      output: {
        // garde la stratégie manualChunks
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (
              id.includes("tsparticles") ||
              id.includes("face-api.js") ||
              id.includes("tsparticles-engine") ||
              id.includes("three")
            ) {
              return "vendor-heavy";
            }
            return "vendor";
          }
        },
      },
    },
  },
});
