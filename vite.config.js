import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import svgLoader from 'vite-svg-loader'

// https://vite.dev/config/
export default defineConfig({
  optimizeDeps: {
    include: ['bootstrap-vue'],
  },
  plugins: [vue(), vueDevTools(), svgLoader()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "@/scss/_variables.scss" as *;
          @use "@/scss/_mixins.scss" as *;
        `,
      },
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
