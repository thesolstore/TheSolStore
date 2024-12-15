import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/TheSolStore/', // Updated to match your repository name
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true,
  },
  server: {
    port: 3000,
    host: true,
    open: true
  },
  preview: {
    port: 3000,
    host: true
  },
  define: {
    'process.env': {},
    global: {},
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
    esbuildOptions: {
      define: {
        global: 'globalThis',
      },
    },
  },
});
