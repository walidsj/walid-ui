import { fileURLToPath } from "node:url";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    dts({
      tsconfigPath: "./tsconfig.build.json",
      include: ["src"],
      exclude: ["src/**/*.test.ts", "src/**/*.test.tsx", "src/test/**"],
    }),
  ],
  build: {
    lib: {
      entry: {
        index: fileURLToPath(new URL("./src/index.ts", import.meta.url)),
        "components/button/index": fileURLToPath(
          new URL("./src/components/button/index.ts", import.meta.url),
        ),
        "components/input/index": fileURLToPath(
          new URL("./src/components/input/index.ts", import.meta.url),
        ),
        "components/textarea/index": fileURLToPath(
          new URL("./src/components/textarea/index.ts", import.meta.url),
        ),
      },
      formats: ["es"],
      fileName: (_format, entryName) => `${entryName}.js`,
      cssFileName: "style",
    },
    target: "es2022",
    cssCodeSplit: false,
    sourcemap: true,
    minify: false,
    rollupOptions: {
      external: [
        /^react($|\/)/,
        /^react-dom($|\/)/,
        /^@base-ui\/react($|\/)/,
        "cn",
      ],
    },
  },
});
