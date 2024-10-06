// UMD 打包

// 导入必要的模块
import { defineConfig } from 'vite' // Vite 的配置函数
import vue from '@vitejs/plugin-vue' // Vue 插件
import { resolve } from 'path' // 用于处理路径

// 导出 Vite 配置
export default defineConfig({
  // 使用 Vue 插件
  plugins: [vue()],
  build: {
    // 构建输出目录
    outDir: 'dist/umd',
    lib: {
      // 入口文件
      entry: resolve(__dirname, './index.js'),
      // 库的名称
      name: 'UserComp',
      // 输出文件名
      fileName: 'index',
      // 输出格式
      formats: ['umd']
    }
  },
  rollupOptions: {
    // 外部依赖，不打包 Vue
    external: ['vue'],
    output: {
      // 全局变量配置
      globals: {
        // 输出的 exports 风格
        exports: 'named',
        // 指定 Vue 的全局变量名
        vue: 'Vue'
      },
      assetFileNames: assetInfo => {
        // 自定义资产文件名
        // 将 style.css 重命名为 index.css
        if (assetInfo.name === 'style.css') return 'index.css'
        // 其他文件名保持不变
        return assetInfo.name
      }
    }
  }
})
