import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  server: {
		port: 7788
	},
  plugins: [
    vue({
      // refTransform: true // 开启ref转换
    })
  ],
  // css: {
  //   preprocessorOptions: {
  //     scss: {
  //       additionalData: `@import "./src/assets/*.scss";`
  //     }
  //   }
  // }
})
