/**
 * Vite Configuration
 * 
 * This file configures the development and build settings for the project.
 * 
 * Key Features:
 * - Development server configuration
 * - Plugin setup (React with SWC for faster compilation)
 * - Path aliases (@/ points to ./src)
 * 
 * Environment Variables:
 * - See .env.example for available configuration options
 * - VITE_SERVER_PORT: Development server port (default: 8080)
 * - VITE_SERVER_HOST: Development server host (default: "::")
 */

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
