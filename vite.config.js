import { resolve } from "path";
import { defineConfig } from "vite";
import fs from "fs";

function getHtmlInputs() {
  const inputs = {};
  // Hauptverzeichnis index.html
  inputs.main = resolve(__dirname, "index.html");
  const dir = resolve(__dirname, "unterseiten");
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    if (file.endsWith(".html")) {
      const name = file.replace(".html", "");
      inputs[name] = resolve(dir, file);
    }
  });

  return inputs;
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [],
  base: "/02-website-project/",
  build: {
    outDir: "dist",
    rollupOptions: {
      input: getHtmlInputs(),
    },
  },
});
