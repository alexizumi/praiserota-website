import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  publicDir: 'public', // This ensures public folder files are copied to dist
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
})
