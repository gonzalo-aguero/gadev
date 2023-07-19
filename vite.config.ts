import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import liveReload from 'vite-plugin-live-reload'//to autoreload when a file is changed

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    liveReload('.'),
  ],
})