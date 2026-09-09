import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build',
  },
  css: {
    preprocessorOptions: {
      scss: {
        // silence the legacy JS API deprecation warning from sass
        api: 'modern-compiler',
      },
    },
  },
});
