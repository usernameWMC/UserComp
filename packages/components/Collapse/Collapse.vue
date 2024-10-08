<template>
  <div class="user-collapse">

  </div>
</template>
<script setup>
import { ref, provide, watch, watchEffect } from 'vue';
import { CollapseProps } from './CollapseProps.js';
import { CollapseEmits } from './CollapseEmits.js';
import { COLLAPSE_CTX_KEY } from './context.js';
defineOptions({
  name: 'UserCollapse'
});

const props = defineProps(CollapseProps);
const emits = defineEmits(CollapseEmits);

// 父组件提供上下文
const activeNames = ref(props.modelValue);
const handleItemClick = item => {
  let _activeNames = [...activeNames.value];
  // 手风琴模式
  if (props.accordin) {
    _activeNames = [_activeNames[0] === item ? '' : item];
    updateActiveName(newNames);
    return;
  }
  // 正常模式
  const index = _activeNames.indexOf(item);
  if (index === -1) {
    _activeNames.push(name); // 添加到 activeNames
  } else {
    _activeNames.splice(index, 1); // 从 activeNames 中移除
  }
  updateActiveName(newNames);
};

// 更新组件
function updateActiveName(newNames) {
  activeNames.value = newNames;
  emits('update:modelValue', newNames);
  emits('change', newNames);
}

// 监听更新
watch(
  () => props.modelValue,
  newNames => updateActiveName(newNames)
);

// 报错
watchEffect(() => {
  if (props.accordin && activeNames.value.length > 1) {
    console.warn('accordion mode should only have on active item');
  }
});

// 提供注入
provide(COLLAPSE_CTX_KEY, {
  activeNames,
  handleItemClick
});
</script>
<style scoped>
@import './style.css';
</style>