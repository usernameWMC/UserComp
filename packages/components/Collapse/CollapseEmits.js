// 定义组件的发射事件
export const CollapseEmits = {
  'update:modelValue': value => {
    // 这里可以添加逻辑以验证 value 的类型
    return Array.isArray(value) // 确保 value 是一个数组
  },
  change: value => {
    // 这里可以添加逻辑以验证 value 的类型
    return Array.isArray(value) // 确保 value 是一个数组
  }
}
