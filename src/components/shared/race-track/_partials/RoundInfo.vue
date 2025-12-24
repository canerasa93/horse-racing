<script setup lang="ts">
interface RoundInfoProps {
  id?: number;
}
const props = defineProps<RoundInfoProps>();
</script>

<template>
  <div class="absolute top-4 left-1/2 -translate-x-1/2 z-30">
    <span
      v-if="props.id"
      class="bg-neutral-900/80 backdrop-blur-md text-white px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest border border-white/10 shadow-2xl"
    >
      Round {{ props.id }} underway
    </span>
    <span v-else> Round info not available </span>
  </div>
</template>
