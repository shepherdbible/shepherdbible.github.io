import { defineConfig } from "vite";

export default defineConfig({
  base: "/",

  build: {
    outDir: "docs",
    // docs also holds the large static Bible JSON tree; preserve it between builds.
    emptyOutDir: false,
    assetsDir: "assets",
  },
});
