import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue()],
  build: {
    rollupOptions: {
      input: {
        popup: resolve(__dirname, 'popup.html'),     // popup entry
        content: resolve(__dirname, 'src/content.ts') // content script
      },
      output: {
        entryFileNames: '[name].js' // ensures output names like content.js
      }
    },
    outDir: 'dist',
    emptyOutDir: true
  }
})
