<script setup lang="ts">
import { Round } from '@/common/types';
import { computed, toRefs } from 'vue';

interface BottomStatusBarProps {
  currentRound: Round | null;
}
const props = defineProps<BottomStatusBarProps>();

const { currentRound } = toRefs(props);

const distance = computed(() => currentRound.value?.distance);
</script>

<template>
  <div
    class="bg-neutral-900/40 backdrop-blur-md border-t border-white/5 px-4 py-2 flex justify-between items-center"
  >
    <div class="flex items-center gap-2">
      <div
        class="w-2 h-2 rounded-full"
        :class="currentRound ? 'bg-emerald-500 animate-pulse' : 'bg-neutral-600'"
      ></div>
      <span class="text-[10px] font-bold text-white/60 uppercase tracking-widest">
        {{ currentRound ? 'Race Live' : 'System Ready' }}
      </span>
    </div>
    <div class="text-[10px] font-medium text-white/40 italic">
      {{
        currentRound ? `Simulating ${distance}m track conditions...` : 'Awaiting program generation'
      }}
    </div>
  </div>
</template>
