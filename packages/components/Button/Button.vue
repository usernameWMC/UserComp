<template>
  <!-- 使用动态组件 -->
  <component :is="props.tag" :type="props.tag === 'button' ? props.nativeType : void 0" :class="{
      [`user-button--${props.type}`]: props.type,
      [`user-button--${props.size}`]: props.size,
      'is-plain': props.plain,
      'is-round': props.round,
      'is-circle': props.circle,
      'is-disabled': props.disabled,
      'is-loading': props.loading,
    }" :disabled="props.disabled || props.loading ? true : void 0" class="user-button" ref="_ref">
    <slot></slot>
  </component>
</template>

<script setup>
import { ref } from 'vue';
import { ButtonProps } from './ButtonProps.js';

// 默认配置
defineOptions({
  name: 'UserButton'
});

// 默认属性
const props = defineProps(ButtonProps);

// 默认插槽
const solts = defineSlots();

// 原生DOM
const _ref = ref();
</script>

<style scoped>
@import './style.css';
</style>
