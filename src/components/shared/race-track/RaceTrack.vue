<script setup lang="ts">
import { computed, PropType, toRefs } from 'vue';
import { Round } from '@/common/types';
import { Box, EmptyState } from '@/components/ui';
import GrassBg from './_partials/GrassBg.vue';
import RoundInfo from './_partials/RoundInfo.vue';
import FinishLine from './_partials/FinishLine.vue';
import HorseLines from './_partials/HorseLines.vue';
import BottomStatusBar from './_partials/BottomStatusBar.vue';
import PlayOverlay from './_partials/PlayOverlay.vue';

const props = defineProps({
  currentRound: {
    type: Object as PropType<Round | null>,
    default: null,
  },
});

const { currentRound } = toRefs(props);

const id = computed(() => currentRound.value?.id);
const distance = computed(() => currentRound.value?.distance);
const participants = computed(() => currentRound.value?.participants);
</script>

<template>
  <Box
    title="Race Track"
    :suffix="currentRound ? `${distance}m` : undefined"
    iconClass="fa-solid fa-flag-checkered text-amber-500"
  >
    <div class="flex-1 relative overflow-hidden flex flex-col bg-emerald-800">
      <GrassBg />

      <EmptyState
        v-if="!currentRound"
        title="Waiting for Race..."
        description="Generate a program and click 'Start' to begin the race."
        icon="fa-solid fa-horse-head"
        class="bg-white/10 text-dark"
      />

      <template v-else>
        <div class="flex flex-col h-full relative p-4">
          <RoundInfo :id="id" />

          <FinishLine />

          <HorseLines :participants="participants" />

          <PlayOverlay />
        </div>
      </template>

      <BottomStatusBar :currentRound="currentRound" />
    </div>
  </Box>
</template>
