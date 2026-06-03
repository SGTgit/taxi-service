import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('sentry')) return; // Keep sentry dynamic
            if (id.includes('framer-motion')) return 'vendor-framer-motion';
            if (id.includes('lucide-react')) return 'vendor-lucide';
            if (id.includes('react-dom')) return 'vendor-react-dom';
            if (id.includes('react')) return 'vendor-react';
            return 'vendor';
          }
        },
      },
      plugins: [visualizer({ filename: 'dist/stats.html', open: false })],
    },
  },
});
