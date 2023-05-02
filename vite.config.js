import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      external: ["react-select"],
    },
  },
  plugins: [react()],
  server: {
    host: true,
    port: 3000,
    open: true,
    proxy: {
      "/api": {
        target: "https://easy-plum-panther-tam.cyclic.app",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
