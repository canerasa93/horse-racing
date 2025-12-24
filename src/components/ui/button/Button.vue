<script setup lang="ts">
import { BUTTON_VARIANTS } from '@/common/enums';
import { getButtonClassNameByVariant } from '@/common/utils/buttonUtils';
import { computed, toRefs } from 'vue';

const emit = defineEmits(['click']);

interface ButtonProps {
  label?: string;
  icon: string;
  variant?: BUTTON_VARIANTS;
}

const props = withDefaults(defineProps<ButtonProps>(), {
  variant: BUTTON_VARIANTS.LIGHT,
});

const { variant } = toRefs(props);

const buttonClassName = computed(() => {
  return getButtonClassNameByVariant(variant.value);
});
</script>

<template>
  <button
    @click="emit('click')"
    :class="[
      'px-4 py-1 flex items-center gap-1 rounded shadow font-bold transition disabled:opacity-50 cursor-pointer textsm',
      buttonClassName,
    ]"
  >
    <i :class="[icon, 'text-sm']"></i>
    <template v-if="label">{{ label }}</template>
  </button>
</template>
