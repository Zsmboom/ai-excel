import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// 生成构建时间戳
const timestamp = new Date().getTime();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          openai: ['openai'],
          xlsx: ['xlsx']
        }
      }
    }
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'openai', 'xlsx'],
    exclude: ['lucide-react']
  },
  server: {
    port: 3001,
    host: true,
    cors: true,
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        secure: false
      }
    }
  }
});
