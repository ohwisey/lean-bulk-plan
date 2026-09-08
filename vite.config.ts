import tailwindcss from '@tailwindcss/postcss';
import vinext from 'vinext';
import { defineConfig } from 'vite';
// GitHub Pages serves the static export; it does not run a Worker.
export default defineConfig({ css: { postcss: { plugins: [tailwindcss()] } }, plugins: [vinext()] });
