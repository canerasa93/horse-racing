<script setup lang="ts">
interface EmptyStateProps {
  title: string;
  description?: string;
  icon?: string;
}

withDefaults(defineProps<EmptyStateProps>(), {
  icon: 'fa-solid fa-circle-info',
});
</script>

<template>
  <div class="flex flex-col items-center justify-center h-full p-8 text-center text-neutral-400">
    <div class="w-12 h-12 bg-neutral-50 rounded-full flex items-center justify-center mb-3">
      <i :class="[icon, 'text-xl']"></i>
    </div>
    <p class="text-xs font-medium uppercase tracking-tight">{{ title }}</p>
    <p v-if="description" class="text-[10px] mt-1 italic">{{ description }}</p>
  </div>
</template>
