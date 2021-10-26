import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import viteSvgIcons from 'vite-plugin-svg-icons';
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import path from 'path';
export default ({ mode }) => {
  var env = loadEnv(mode, process.cwd());
  return defineConfig({
    resolve: {
      alias: {
        'vue-i18n': 'vue-i18n/dist/vue-i18n.cjs.js',
        '@': path.resolve(__dirname, './src'),
        public: path.resolve(__dirname, './public'),
      },
    },
    plugins: [
      vue(),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
      viteSvgIcons({
        iconDirs: [path.resolve(process.cwd(), 'src/icons')],
        symbolId: 'icon-[dir]-[name]',
      }),
    ],
    server: {
      port: 8080,
      open: true,
      proxy: {
        '/api': {
          target: env.VITE_APP_API_URL,
          changeOrigin: true, //开启代理
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
      },
    },
  });
};
