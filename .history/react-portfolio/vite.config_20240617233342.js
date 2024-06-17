import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/repository-name/', // Replace with your repository name
  plugins: [react()],
  css: {
    modules: {
      localConvention: "camelCase",
    },
  },
})
