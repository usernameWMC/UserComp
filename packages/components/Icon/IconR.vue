<template>
  <i class="uer-icon" :class="[`user-icon-${props.type}`]" :style="customStyles" v-bind="$attrs">
    <font-awesome-icon v-bind="filterProps" />
  </i>
</template>
<script setup>
import { IconProps } from './iconPropsR.js';
import { omit } from 'lodash-es';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { computed } from 'vue';

defineOptions({
  name: 'UserIcon',
  inheritAttrs: false
});

const props = defineProps(IconProps);
//
const filterProps = computed(() => omit(props, ['type', 'color']));
//
const customStyles = computed(() => ({ color: props.color ?? void 0 }));
</script>
<style scoped>
@import './style.css';
</style>