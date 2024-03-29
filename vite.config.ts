import { defineConfig,loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path';
export default ({mode})=>{

  // 获取环境变量
  const env = loadEnv(mode,process.cwd())
  console.log(env,'获取环境变量env');
  
  return  defineConfig({
    server: {
      port: 7788
    },
    base: './',
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
}
