import { defineConfig } from "cypress";

export default defineConfig({
  component: {
    devServer: {
      framework: "vue",
      bundler: "vite",
    },
  },
  viewportHeight: 1020,
  viewportWidth: 1980,
  defaultCommandTimeout: 4000,
  port: 2187,
});
