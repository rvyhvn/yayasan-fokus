import { defineConfig, fontProviders } from "astro/config";
import react from "@astrojs/react";
import sharp from "sharp";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],

  assets: {
    addSharpInstructions: true,
    services: [
      {
        name: "sharp",
        constructor: sharp,
      },
    ],
  },

  vite: {
    plugins: [tailwindcss()],
  },

  experimental: {
    fonts: [
      {
        provider: fontProviders.google(),
        name: "Roboto",
        cssVariable: "--font-roboto",
      },
    ],
  },
});
