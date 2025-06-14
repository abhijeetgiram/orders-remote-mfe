import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig(({ mode }) => {
  // Load .env file based on `mode` (e.g., development, production)
  const env = loadEnv(mode, process.cwd(), "");
  return {
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
        remotes: {
          products_shell_mfe: `${env.VITE_PRODUCTS_SHELL_MFE}assets/remoteEntry.js`,
        },
        shared: ["react", "react-dom", "react-router-dom"],
      }),
    ],
    build: {
      target: "esnext",
      minify: false,
      cssCodeSplit: true,
    },
  };
});
