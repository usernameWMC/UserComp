export const ButtonProps = {
  tag: {
    type: String,
    default: 'button'
  },
  type: {
    type: String,
    default: 'default'
  },
  size: {
    type: String,
    default: 'medium'
  },
  nativeType: {
    type: String,
    default: 'button'
  },
  disabled: {
    type: Boolean,
    default: false
  },
  loading: {
    type: Boolean,
    default: false
  },
  icon: String,
  circle: Boolean,
  plain: Boolean,
  round: Boolean,
  // 加载图标
  loadingIcon: String,
  // 自动聚焦
  autofocus: Boolean,
  // 是否节流
  useThrottle: Boolean,
  // 节流时间
  throttleDuration: Number
}
