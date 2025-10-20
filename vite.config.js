import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        // Pages à la racine
        main: resolve(__dirname, 'index.html'),
        f1: resolve(__dirname, 'f1.html'),
        gameofthrone: resolve(__dirname, 'gameofthrone.html'),
        impossible: resolve(__dirname, 'impossible.html'),
        été: resolve(__dirname, 'lété.html'),
        lilo: resolve(__dirname, 'lilo.html'),
        mercredi: resolve(__dirname, 'mercredi.html'),

        // Pages dans le dossier /pages
        films: resolve(__dirname, 'pages/films.html'),
        maliste: resolve(__dirname, 'pages/maliste.html'),
        series: resolve(__dirname, 'pages/series.html'),
      },
    },
  },
});
