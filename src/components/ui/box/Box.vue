<script setup lang="ts">
interface BoxProps {
  title: string;
  suffix?: string;
  iconClass?: string;
}
defineProps<BoxProps>();
</script>

<template>
  <div
    class="flex flex-col h-full bg-white rounded-xl shadow-lg border border-neutral-100 overflow-hidden"
  >
    <div class="px-4 py-3 bg-neutral-800 text-white flex items-center justify-between">
      <span class="font-bold text-sm tracking-wide uppercase">{{ title }}</span>

      <i v-if="iconClass" :class="iconClass"></i>

      <span
        v-if="suffix"
        class="text-[10px] bg-amber-500 text-neutral-900 px-1.5 py-0.5 rounded font-black"
        >{{ suffix }}</span
      >
    </div>

    <slot />
  </div>
</template>
