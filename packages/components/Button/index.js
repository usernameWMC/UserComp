//  单个组件出口
import Button from './Button.vue'
import { withInstall } from '@usercomp/utils'

// 对该组件进行改造 挂载 install 方法 并导出
const UserButton = withInstall(Button)

export default UserButton
