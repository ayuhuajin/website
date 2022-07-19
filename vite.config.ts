import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path';

export default defineConfig({
  server: {
		port: 7788
	},
  plugins: [
    vue({
      // refTransform: true // 开启ref转换
    })
  ],
  optimizeDeps: {
    // exclude: ['lodash-es']
  },
  resolve: {
		extensions: ['.vue', '.mjs', '.js', '.ts', '.json'],
		alias: {
			'@': resolve(__dirname, 'src')
		}
	},
  // css: {
  //   preprocessorOptions: {
  //     scss: {
  //       additionalData: `@import "./src/assets/*.scss";`
  //     }
  //   }
  // }
})
