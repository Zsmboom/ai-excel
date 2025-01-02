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
        // 添加时间戳到文件名
        entryFileNames: `[name].${timestamp}.js`,
        chunkFileNames: `[name].${timestamp}.js`,
        assetFileNames: `[name].${timestamp}.[ext]`,
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
        }
      }
    }
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
