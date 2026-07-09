import { fileURLToPath } from 'node:url'

import babel from '@rolldown/plugin-babel'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import browserslist from 'browserslist'
import { browserslistToTargets } from 'lightningcss'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    babel({
      presets: [reactCompilerPreset()],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  css: {
    transformer: 'lightningcss',
    lightningcss: {
      targets: browserslistToTargets(browserslist(['> 1%', 'last 2 versions'])),
    },
  },
  build: {
    cssMinify: 'lightningcss',
  },
})
