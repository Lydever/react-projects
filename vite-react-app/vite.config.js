import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const pathResolve = (dir) => {
  return resolve(process.cwd(), '.', dir)
}

const dirRoot = process.cwd()

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  //base: env.VITE_PUBLIC_PATH,
  server: {
    host: '0.0.0.0',
    port: 9990,
    proxy: {
      /*        '/api': {
          target: '',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '')
        },*/
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
