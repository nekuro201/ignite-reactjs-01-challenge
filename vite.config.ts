import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/ignite-reactjs-01-challenge/',
  plugins: [react()],
})
