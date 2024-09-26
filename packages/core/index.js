import { makeInstaller } from '@usercomp/utils'
import components from './component.js'
import '@usercomp/theme/index.css'

// 注册所有组件 并返回为 mian.js 中app.use做准备
const installer = makeInstaller(components)

// 将组件库直接导出
export * from '@usercomp/components'

// 以插件的形式使用组件
export default installer
