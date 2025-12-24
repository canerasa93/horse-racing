<script setup lang="ts">
import { BUTTON_VARIANTS } from '@/common/enums';
import { Button } from '@/components/ui';
import { useRaceStore } from '@/stores';
import { computed } from 'vue';

const raceStore = useRaceStore();

const isDisabled = computed(() => raceStore.program.length === 0);
const isRunning = computed(() => raceStore.isRunning);

function toggle() {
  raceStore.toggleRace();
}

function generate() {
  raceStore.initProgram();
}

function reset() {
  raceStore.resetAll();
}
</script>

<template>
  <nav class="flex items-center gap-3">
    <Button
      @click="reset"
      label="Reset"
      icon="fa-solid fa-rotate-left"
      :variant="BUTTON_VARIANTS.GREY"
      :disabled="isDisabled"
    />
    <div class="w-px h-6 bg-white/10 mx-1"></div>
    <Button
      @click="generate"
      label="Generate Program"
      icon="fa-solid fa-dice"
      :variant="BUTTON_VARIANTS.DARK"
    />
    <Button
      @click="toggle"
      :label="isRunning ? 'Pause' : 'Start'"
      :icon="isRunning ? 'fa-solid fa-pause' : 'fa-solid fa-play'"
      :variant="BUTTON_VARIANTS.LIGHT"
      :disabled="isDisabled"
    />
  </nav>
</template>
