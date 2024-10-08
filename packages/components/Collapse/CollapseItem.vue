<template>
  <!-- 
    整体内容
    项目头部
    项目标题
    使用默认插槽关联子组件
     
  -->
  <div class="user-collapse-item" :class="{'is-disabled': disabled}">
    <div class="user-collapse-item__header" :id="`item-header-${name}`" :class="{
      'is-disabled': disabled,
      'is-active': active
    }" @click="handleClick">
      <span class="user-collapse-item__title">
        <slot name="title">
          {{ title }}
        </slot>
      </span>
      <user-icon icon="angle-right" class="header-angle"></user-icon>
    </div>
    <div class="user-collapse-item__wapper" v-show="isActive">
      <div class="user-collapse-item__content" :id="`item-content-${name}`">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<script setup>
import { inject, computed } from 'vue';
import { COLLAPSE_CTX_KEY } from './context.js';
import { CollapseItemProps } from './CollapseItemProps.js';
import UserIcon from '../Icon/IconR.vue';

defineOptions({
  name: 'UserCollapseItem'
});
// 获取注入
const ctx = inject(COLLAPSE_CTX_KEY, void 0);

const props = defineProps(CollapseItemProps);
// 计算是否需要展示
const isActive = computed(() => ctx?.activeNames.value?.includes(props.name));
//
function handleClick() {
  if (props.disabled) return;
  ctx?.handleItemClick(props.name);
}
</script>
<style scoped>
@import './style.css';
</style>