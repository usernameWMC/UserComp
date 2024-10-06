export const IconProps = {
  props: {
    // icon: 可以是数组、对象或字符串，表示图标的名称或图标对象
    icon: {
      type: [Array, Object, String],
      required: true
    },

    // size: 字符串类型，表示图标的大小，支持 'xs', 'lg', '2x', '3x', '4x', '5x' 等
    size: {
      type: String,
      default: null
    },

    // spin: 布尔值，控制图标是否旋转
    spin: {
      type: Boolean,
      default: false
    },

    // pulse: 布尔值，控制图标是否以慢速旋转
    pulse: {
      type: Boolean,
      default: false
    },

    // flip: 字符串类型，控制图标的翻转方向，可以是 'horizontal', 'vertical', 'both'
    flip: {
      type: String,
      default: null,
      validator: function (value) {
        return ['horizontal', 'vertical', 'both'].includes(value)
      }
    },

    // rotation: 数字类型，表示图标旋转的角度，支持 90, 180, 270 等
    rotation: {
      type: Number,
      default: null,
      validator: function (value) {
        return [90, 180, 270].includes(value)
      }
    },

    // fixedWidth: 布尔值，控制图标宽度是否固定
    fixedWidth: {
      type: Boolean,
      default: false
    },

    // border: 布尔值，控制图标是否带边框
    border: {
      type: Boolean,
      default: false
    }
  }
}
