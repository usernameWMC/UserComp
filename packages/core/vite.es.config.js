// 导入必要的模块

import { readdirSync, readdir } from 'fs'
import { resolve } from 'path' // 用于处理路径
import { fileURLToPath } from 'url'
import { dirname } from 'path'
import shell from 'shelljs'
import hooks from './hookPlugin.js'

import vue from '@vitejs/plugin-vue' // Vue 插件
import { defineConfig } from 'vite' // Vite 的配置函数

import { visualizer } from 'rollup-plugin-visualizer' // 打包可视化工具
import { defer, delay, filter, map, includes } from 'lodash-es'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

function moveFileStyle() {
  try {
    // 既然这个文件能够读取 就意味着这个文件存在
    readFileSync('./dist/umd/style.css.gz')
    // 移动文件
    shell.cp('./dist/umd/style.css', './dist/index.css')
  } catch (e) {
    delay(moveFileStyle, 800)
  }
}

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
  plugins: [
    vue(),
    visualizer({
      filename: 'dist/stats.html', // 可视化结果的输出文件
      open: false // 构建完成后自动打开
    }),
    hooks({
      rmFiles: ['./dist/es', './dist/theme'],
      afterBuild: moveFileStyle
    })
  ],
  build: {
    // 构建输出目录
    outDir: 'dist/es',
    sourcemap: true,
    cssCodeSplit: true,
    lib: {
      // 入口文件
      entry: resolve(__dirname, './index.js'),
      // 库的名称
      name: 'UserComp',
      // 输出文件名
      fileName: 'index',
      // 输出格式
      formats: ['es']
    },
    rollupOptions: {
      // 外部依赖，不打包
      external: ['vue', '@fortawesome/fontawesome-svg-core', '@fortawesome/free-solid-svg-icons', '@fortawesome/vue-fontawesome'],
      output: {
        exports: 'named',
        assetFileNames: assetInfo => {
          // 自定义资产文件名
          // 将 style.css 重命名为 index.css
          if (assetInfo.name === 'style.csss') return 'index.css'
          // CSS 文件将放在 `styles` 文件夹下
          if (assetInfo.type === 'asset' && assetInfo.name.endsWith('.css')) {
            return 'theme/[name].css'
          }
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
  }
})
