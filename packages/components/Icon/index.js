// 神奇的问题 使用 Icon 作为组件名称会出现大小写不明确的问题 导致报错
import Icon from './IconR.vue'
import { withInstall } from '@usercomp/utils'

// 对该组件进行改造 挂载 install 方法 并导出
export const UserIcon = withInstall(Icon)
