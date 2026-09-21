import { defineConfig } from "vite";
import { viteSingleFile } from "vite-plugin-singlefile";

export default defineConfig({
  base: "./",

  plugins: [
    viteSingleFile(),
  ],

  build: {
    outDir: "docs",
    emptyOutDir: true,
    assetsInlineLimit: 100000000,
    cssCodeSplit: false,
    assetsDir: "",
    rollupOptions: {
      output: {
        inlineDynamicImports: true,
      },
    },
  },
});