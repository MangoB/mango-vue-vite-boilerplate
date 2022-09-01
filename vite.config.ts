/* eslint-disable no-console */
/// <reference types="vitest" />
import path from 'path'
import { defineConfig } from 'vite'

import vuetify from 'vite-plugin-vuetify'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  define: {
    'import.meta.env': {},
  },

  plugins: [
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        'vue/macros',
      ],
      dts: 'src/auto-imports.d.ts',
      dirs: [
        'src/store',
      ],
      vueTemplate: true,
    }),
    Components({
      // allow auto load markdown components under `./src/components/`
      extensions: ['vue', 'md'],
      // allow auto import and register components used in markdown
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      dts: 'src/components.d.ts',
    }),
    vue({
      reactivityTransform: true,
    }),
    vuetify({
      autoImport: true,
    }),
  ],

  test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: 'vuetify.config.ts',
    deps: {
      inline: ['vuetify'],
    },
    include: ['src/tests/**/*.test.ts'],
    resolveSnapshotPath: (testPath, snapExtension) => {
      return (testPath + snapExtension).replace('components', '__snapshots__')
    },
  },

  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
})
