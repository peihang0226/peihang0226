import { fileURLToPath, URL } from 'node:url'
import { resolve } from 'path';
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { VantResolver } from 'unplugin-vue-components/resolvers';
import { viteVConsole } from 'vite-plugin-vconsole';
import vueDevTools from 'vite-plugin-vue-devtools'
const pathResolve = (dir) => resolve(__dirname, dir);
// https://vitejs.dev/config/
export default defineConfig(( command, mode ) => {
  // 获取环境变量
  const env = loadEnv(mode, process.cwd());
  return {
    plugins: [
      /**
       * unplugin-auto-import 按需 import
       * @see https://github.com/antfu/unplugin-auto-import
       */
      AutoImport({
        imports: [
          'vue',
          'pinia',
          'vue-router',
          {
            '@vueuse/core': [
              // named imports
              'useMouse', // import { useMouse } from '@vueuse/core',
              // alias
              ['useFetch', 'useMyFetch'], // import { useFetch as useMyFetch } from '@vueuse/core',
            ],
            'axios': [
              // default imports
              ['default', 'axios'], // import { default as axios } from 'axios',
            ],
            '[package-name]': [
              '[import-names]',
              // alias
              ['[from]', '[alias]'],
            ],
          },
        ],
        dirs: ['./src/**'],
      }),

      /**
       * unplugin-vue-components 按需引入组件
       * 注意：需注册至 uni 之前，否则不会生效
       * @see https://github.com/antfu/vite-plugin-components
       */
      Components({
        dirs: 'src/components',
        resolvers: [VantResolver()],
      }),

      /**
       * vite-plugin-vue-devtools 增强 Vue 开发者体验
       * @see https://github.com/webfansplz/vite-plugin-vue-devtools
       */
      // vueDevTools(), // 浏览器没装调试可以打开
      viteVConsole({
        entry: pathResolve('src/main.js'),
        localEnabled: true,
        enabled: env.VITE_USER_NODE_ENV !== 'production',
        config: {
          maxLogNumber: 1000,
          theme: 'dark',
        },
      }),
      vue(),
      vueJsx(),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    }
  }
})
