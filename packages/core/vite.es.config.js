// UMD 打包

// 导入必要的模块
import { defineConfig } from 'vite' // Vite 的配置函数
import vue from '@vitejs/plugin-vue' // Vue 插件
import { resolve } from 'path' // 用于处理路径

// 添加组件
function getDirectoriesSync(basePath) {
  const entries = readdirSync(basePath, { withFileTypes: true })

  return map(
    filter(entries, entry => entry.isDirectory()),
    entry => entry.name
  )
}

// 导出 Vite 配置
export default defineConfig({
  // 使用插件
  plugins: [vue()],
  build: {
    // 构建输出目录
    outDir: 'dist/es',
    lib: {
      // 入口文件
      entry: resolve(__dirname, './index.js'),
      // 库的名称
      name: 'UserComp',
      // 输出文件名
      fileName: 'index',
      // 输出格式
      formats: ['es']
    }
  },
  rollupOptions: {
    // 外部依赖，不打包
    external: ['vue', '@fortawesome/fontawesome-svg-core', '@fortawesome/free-solid-svg-icons', '@fortawesome/vue-fontawesome'],
    output: {
      assetFileNames: assetInfo => {
        // 自定义资产文件名
        // 将 style.css 重命名为 index.css
        if (assetInfo.name === 'style.css') return 'index.css'
        // 其他文件名保持不变
        return assetInfo.name
      },
      // 分包
      manualChunks(id) {
        // 第三方库包
        if (includes(id, 'node_modules')) return 'vendor'
        // 自定义hook包
        if (includes(id, '/packages/hooks')) return 'hooks'
        // 自定以uitls包
        if (includes(id, '/packages/utils') || includes(id, 'plugin-vue:export-helper')) return 'utils'
        // 每一个组件都有自己的包
        for (const item of getDirectoriesSync('../components')) {
          if (includes(id, `/packages/components/${item}`)) return item
        }
      }
    }
  }
})
