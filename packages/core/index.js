import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { makeInstaller } from '@usercomp/utils'
import components from './component.js'
import '@usercomp/theme/index.css'

// 注册所有组件 并返回为 mian.js 中app.use做准备
// 以插件的形式使用组件
export const installer = makeInstaller(components)

// 图标导入
library.add(fas)

// 将组件库直接导出
export * from '@usercomp/components'

// 做过修改 可能出现问题 未使用默认导出
