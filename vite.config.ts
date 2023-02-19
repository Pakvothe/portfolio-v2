import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import * as path from "path";
import viteCompression from "vite-plugin-compression";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteCompression({
      filter: /\.(ts|tsx|js|mjs|json|css|html)$/i,
      algorithm: "gzip",
      deleteOriginFile: true,
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/"),
      components: `${path.resolve(__dirname, "./src/components/")}`,
      public: `${path.resolve(__dirname, "./public/")}`,
      pages: path.resolve(__dirname, "./src/pages"),
      store: path.resolve(__dirname, "./src/store"),
      hooks: path.resolve(__dirname, "./src/hooks"),
    },
  },
});
