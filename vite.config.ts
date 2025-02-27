import { unheadVueComposablesImports } from '@unhead/vue'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'
import svgLoader from 'vite-svg-loader'


export default defineConfig({
  plugins: [
    vue(),
    svgLoader({
      defaultImport: 'component',
      svgoConfig: {
        plugins: [
          { name: 'preset-default', params: { overrides: { removeViewBox: false }} }
        ]
      }
    }),
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        unheadVueComposablesImports,
      ],
      dts: 'auto-imports.d.ts',
      vueTemplate: true,
    }),
    Components({
      dts: 'components.d.ts',
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  css: {
    preprocessorMaxWorkers: true,
  },
})
