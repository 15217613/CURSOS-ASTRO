// Configuración de Astro
// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  // compressHTML: true, // Comprime el HTML
  site: "https://astro.build",

  vite: {
    plugins: [tailwindcss()],
  },
});