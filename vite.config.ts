import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  server: {
    port: 5002, // Port for the orders remote MFE
    cors: true, // Enable CORS for development
  },
  preview: {
    port: 5002, // Port for previewing the products remote MFE
    cors: true, // Enable CORS for preview
  },
  plugins: [
    react(),
    federation({
      name: "orders_remote_mfe",
      filename: "remoteEntry.js",
      exposes: {
        "./OrderListPage": "./src/pages/OrderListPage.tsx",
      },
      shared: ["react", "react-dom", "react-router-dom"],
    }),
  ],
  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: true,
  },
});
