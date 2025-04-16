import { defineConfig } from 'vite';

export default defineConfig({
  root: './frontend',
  server: {
    port: 5173,
    origin: 'http://localhost:5173',
  },
  build: {
    outDir: '../public/build',
    emptyOutDir: true,
  },
  assetsInclude: ['**/*.svg', '**/*.png', '**/*.jpg', '**/*.jpeg'],
});
