import glsl from "vite-plugin-glsl";
import { resolve } from "path";

export default {
  plugins: [glsl()],
  base: "/",
  root: "./",
  publicDir: "public",
  server: {
    host: "0.0.0.0",
    port: 5000,
    open: false,
    cors: true,
  },
  preview: {
    port: 8000,
  },
  build: {
    sourcemap: true,
  },
  resolve: {
    alias: {
      "~": resolve(__dirname, "./src"),
      "@": resolve(__dirname, "./public"),
    },
  },
};
