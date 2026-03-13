import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/', // use '/hemeson-academy/' only when deploying to GitHub Pages subfolder
})
