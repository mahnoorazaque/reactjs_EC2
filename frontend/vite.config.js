import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Bind to IPv4 only
    port: 3000,
    strictPort: true, // Ensures it uses port 3000
  }
});
