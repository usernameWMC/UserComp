<template>
  <div class="user-button-group">
    <solt></solt>
  </div>
</template>
<script setup>
import { provide, reactive, toRef } from 'vue';
import { ButtonGroupProps } from './ButtonGroupProps.js';
defineOptions({
  name: 'ButtonGroups'
});

const props = defineProps(ButtonGroupProps);

// 提供依赖
provide(
  'Button_Group_CTX_key',
  reactive({
    size: toRef(props, 'size'),
    type: toRef(props, 'type'),
    disabled: toRef(props, 'disabled')
  })
);
</script>
<style scoped>
@import './style.css';
</style>
