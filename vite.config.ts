import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Vueimage from 'vite-plugin-vue-images';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),Vueimage()],
  server:{
    host:"192.168.43.241",
    port:5050

  }
})
