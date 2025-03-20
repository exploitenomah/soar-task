import { defineConfig } from "vite"
import legacy from "@vitejs/plugin-legacy"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react-swc"

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    legacy({
      targets: ["defaults", "not IE 11"],
      additionalLegacyPolyfills: ["regenerator-runtime/runtime"],
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id: any) {
          if (id.includes("node_modules")) {
            return id.toString().split("node_modules/")[1].split("/")[0].toString()
          }
        },
      },
    },
  },
})
