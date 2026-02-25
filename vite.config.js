import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',  
  server: {
    host: '0.0.0.0',  // Listen on all network interfaces (required for ngrok)
    port: 5180,
    strictPort: false,
    middlewareMode: false,
    allowedHosts: [
    
  'https://btech-preperation.vercel.app',
  

      'localhost',
      '127.0.0.1',
      'deana-irresoluble-shawanda.ngrok-free.dev',  // Your specific ngrok domain
      '*.ngrok-free.dev',  // Allow all ngrok domains
      '*.ngrok.io'
    ]
  },
  preview: {
    host: '0.0.0.0',  // Listen on all interfaces for preview
    port: 4173,
    strictPort: false
  },
  build: {
    outDir: 'dist',
        chunkSizeWarningLimit: 1000,

    sourcemap: false,  // Disable for production
  },
})
