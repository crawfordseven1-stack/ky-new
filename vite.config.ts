import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: '/' is correct for custom domains (e.g. newconceptsinrecovery.com)
  base: '/', 
  publicDir: 'public', // Explicitly tell Vite to use the public folder
  build: {
    outDir: 'dist',
  },
});