<template>
  <!-- 使用动态组件 -->
  <component :is="props.tag" :type="props.tag === 'button' ? props.nativeType : void 0" :class="{
      [`user-button--${props.type}`]: type,
      [`user-button--${props.size}`]: size,
      'is-plain': props.plain,
      'is-round': props.round,
      'is-circle': props.circle,
      'is-disabled': disabled,
      'is-loading': props.loading,
    }" :disabled="props.disabled || props.loading ? true : void 0" @click="(e)=>useThrottle ? handleClickThrottle(e) : handleClick(e)" :autofocus="autofocus" class="user-button" ref="_ref">

    <template v-if="loading">
      <slot name="loading"></slot>
      <user-icon class="loading-icon" :icon="loadingIcon ?? 'spinner'" spin :style="iconStyle"></user-icon>
    </template>

    <user-icon v-if="icon && !loading" :icon="icon" :style="iconStyle" size="1x">
    </user-icon>

    <slot></slot>
  </component>
</template>

<script setup>
import { ref, computed, inject } from 'vue';
import { ButtonProps } from './ButtonProps.js';
import { ButtonEmit } from './ButtonEmit.js';
import { throttle } from 'lodash-es';
import UserIcon from '../Icon/IconR.vue';

// 默认配置
defineOptions({
  name: 'UserButton'
});

// 默认属性
const props = defineProps(ButtonProps);
// 默认事件
const emits = defineEmits(ButtonEmit);

// 默认插槽
const solts = defineSlots();

// 原生DOM
const _ref = ref();

// 暴漏原生DOM
defineExpose({ ref: _ref });

// 定义一个向父组件传递事件
const handleClick = e => emits('click', e);
// 节流版本
const handleClickThrottle = throttle(handleClick, props.throttleDuration);

// 使用依赖
const ctx = inject('Button_Group_CTX_key');
// 通过依赖计算自身属性 选择使用 provide提供的属性还是用户定义时传入的属性
const size = computed(() => ctx?.size ?? props?.size ?? '');
const type = computed(() => ctx?.type ?? props?.type ?? '');
const disabled = computed(() => ctx?.disabled || props?.disabled || '');

// 计算图标样式
const iconStyle = computed(() => ({
  marginRight: slots.default ? '6px' : '0px'
}));
</script>

<style scoped>
@import './style.css';
</style>
