import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  // GitHub Pages repo: https://github.com/FranciscoCarlos1/francisco-portfolio
  base: '/francisco-portfolio/',
})
