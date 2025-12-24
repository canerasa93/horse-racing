<script setup lang="ts">
import { useRaceStore } from '@/stores';
import { HorseList, ProgramTable, ResultsTable, RaceTrack } from '@/components/shared';
import DefaultLayout from '@/components/layout/DefaultLayout.vue';

const raceStore = useRaceStore();
</script>

<template>
  <DefaultLayout>
    <div class="grid grid-cols-12 gap-4 h-full">
      <div class="col-span-3 h-full overflow-hidden">
        <HorseList :horses="raceStore.horses" />
      </div>

      <div class="col-span-6 h-full overflow-hidden shadow-lg">
        <RaceTrack :currentRound="raceStore.currentRound" />
      </div>

      <div class="col-span-3 h-full flex flex-col gap-4 overflow-hidden">
        <div class="flex-1 overflow-hidden">
          <ProgramTable :program="raceStore.program" />
        </div>
        <div class="flex-1 overflow-hidden">
          <ResultsTable :results="raceStore.results" />
        </div>
      </div>
    </div>
  </DefaultLayout>
</template>
