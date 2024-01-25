import { defineConfig } from "vite";
import graphqlLoader from "vite-plugin-graphql-loader";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [graphqlLoader, vue()],
  build: {
    outDir: "./dist/client",
  },
});
