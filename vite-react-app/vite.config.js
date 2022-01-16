import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const pathResolve = (dir) => {
  return resolve(process.cwd(), '.', dir)
}

const dirRoot = process.cwd()

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),

  ],
  //base: env.VITE_PUBLIC_PATH,
  server: {
    host: '0.0.0.0',
    port: 9990,
    proxy: {
/*      '/api': {
        // 当遇到 /api 路径时，将其转换成 target 的值，这里我们为了测试，写了新蜂商城的请求地址
        target: 'http://47.99.134.126:28019/api/v1',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '') // 将 /api 重写为空
      }*/
      /*        '/api': {
          target: '',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '')
        },*/
    },
    resolve: {
      alias: {
        '~': path.resolve(__dirname, './'), // 根路径
        '@': path.resolve(__dirname, 'src') // src 路径
      }
    }
  },
  build: {
    sourcemap: false,
    outDir: 'dist',
    // rollupOptions: {
    //   input: {
    //     main: resolve(__dirname, 'index.html'),
    //     release: resolve(__dirname, 'release/index.html'),
    //   },
    // },
  },
  esbuild: {
  },
})
