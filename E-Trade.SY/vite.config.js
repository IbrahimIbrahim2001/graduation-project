import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import basicSsl from '@vitejs/plugin-basic-ssl'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // , basicSsl()
  server: {
    // https: true,
    // host: '0.0.0.0',
    // port: 5173,
    port: 5173,
  },
})