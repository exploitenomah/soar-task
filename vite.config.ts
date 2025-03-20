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
    commonjsOptions: {
      include: [/node_modules/],
      transformMixedEsModules: true,
    },
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["node_modules"],
          react: ["react", "react-dom", "react-router"],
          redux: ["@reduxjs/toolkit", "react-redux"],
          utils: ["formik", "yup", "d3"],
        },
      },
    },
  },
  optimizeDeps: {
    include: [
      "react",
      "react-dom",
      "react-router",
      "@reduxjs/toolkit",
      "react-redux",
      "formik",
      "yup",
      "d3",
    ],
    esbuildOptions: {
      target: "es2020",
    },
  },
})
