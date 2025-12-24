<script setup lang="ts">
import { Button } from '@/components/ui';
import { useRaceStore } from '@/stores/useRaceStore';
import { computed } from 'vue';

const raceStore = useRaceStore();

const participants = computed(() => raceStore.currentRound?.participants);
</script>

<template>
  <div
    v-if="!raceStore.isRunning && raceStore.currentRound && !raceStore.isRaceFinished"
    class="absolute inset-0 z-50 flex flex-col items-center justify-center bg-black/20 backdrop-blur-[2px] transition-all duration-500"
  >
    <div class="relative group">
      <Button
        @click="raceStore.toggleRace"
        icon="fa-solid fa-play text-4xl text-emerald-600 ml-1.5"
        label="Start"
      />
    </div>

    <div class="mt-6 text-white text-sm font-black uppercase tracking-[0.2em] drop-shadow-lg">
      {{
        raceStore.currentRoundIndex === 0 && !participants?.some((h) => h.currentPosition > 0)
          ? 'Start Race'
          : participants?.some((h) => h.currentPosition > 0 && h.currentPosition < 100)
            ? 'Resume'
            : 'Next Round'
      }}
    </div>
  </div>
</template>
