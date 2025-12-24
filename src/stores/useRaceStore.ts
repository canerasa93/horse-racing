import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { Horse, Round, RaceResult } from '@/common/types';
import { generateHorses, generateProgram } from '@/common/utils';
import { BASE_SPEED, CONDITION_FACTOR, DISTANCE_FACTOR, RANDOM_FACTOR } from '@/common/constants';

export const useRaceStore = defineStore('race', () => {
  // States
  const horses = ref<Horse[]>([]);
  const program = ref<Round[]>([]);
  const results = ref<RaceResult[]>([]);

  const currentRoundIndex = ref<number>(-1);
  const isRunning = ref<boolean>(false);
  const isPaused = ref<boolean>(false);
  let raceInterval: number | null = null;

  // Reactive Getters
  const currentRound = computed(() =>
    currentRoundIndex.value >= 0 && currentRoundIndex.value < program.value.length
      ? program.value[currentRoundIndex.value]
      : null,
  );

  const isRaceFinished = computed(() => currentRoundIndex.value >= program.value.length);

  // Actions
  const initProgram = () => {
    resetAll();
    horses.value = generateHorses(); // [cite: 6]
    program.value = generateProgram(horses.value);
    results.value = [];
    currentRoundIndex.value = 0;
    isRunning.value = false;
    isPaused.value = false;
  };

  const startRace = () => {
    if (!program.value.length) return;

    isRunning.value = true;
    isPaused.value = false;

    raceInterval = window.setInterval(runRace, 100);
  };

  const pauseRace = () => {
    isRunning.value = false;
    isPaused.value = true;
    if (raceInterval) clearInterval(raceInterval);
  };

  const resetAll = () => {
    horses.value = [];
    program.value = [];
    results.value = [];
    currentRoundIndex.value = -1;
    isRunning.value = false;
    isPaused.value = false;

    if (raceInterval) clearInterval(raceInterval);
    raceInterval = null;
  };

  const toggleRace = () => {
    if (isRaceFinished.value) return;

    if (isRunning.value) {
      pauseRace();
    } else {
      startRace();
    }
  };

  const runRace = () => {
    const round = currentRound.value;
    if (!round) {
      pauseRace();
      return;
    }

    let allFinished = true;

    round.participants.forEach((horse) => {
      if (horse.currentPosition < 100) {
        allFinished = false;

        const conditionFactor = horse.condition * CONDITION_FACTOR;
        const randomFactor = Math.random() * RANDOM_FACTOR;
        const distanceFactor = DISTANCE_FACTOR / round.distance;

        const moveStep = (BASE_SPEED + conditionFactor + randomFactor) * distanceFactor;

        horse.currentPosition += moveStep;

        if (horse.currentPosition >= 100) {
          horse.currentPosition = 100;
          horse.finishTime = Date.now();
        }
      }
    });

    if (allFinished) {
      completeRound(round);
    }
  };

  const completeRound = (round: Round) => {
    if (raceInterval) clearInterval(raceInterval);

    round.isCompleted = true;

    const sorted = [...round.participants].sort(
      (a, b) => (a.finishTime || 0) - (b.finishTime || 0),
    );

    results.value.push({
      roundId: round.id,
      rankings: sorted,
    });

    currentRoundIndex.value++;

    if (currentRoundIndex.value < program.value.length) {
      pauseRace();
    } else {
      isRunning.value = false;
    }
  };

  return {
    horses,
    program,
    results,
    currentRound,
    isRunning,
    isPaused,
    initProgram,
    toggleRace,
    resetAll,
    currentRoundIndex,
    isRaceFinished,
  };
});
