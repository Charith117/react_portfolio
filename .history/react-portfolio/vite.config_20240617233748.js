import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/git subtree push --prefix dist origin gh-pages/', // Replace with your repository name
  plugins: [react()],
  css: {
    modules: {
      localConvention: "camelCase",
    },
  },
})
