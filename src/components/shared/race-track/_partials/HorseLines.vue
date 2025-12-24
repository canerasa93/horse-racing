<script setup lang="ts">
import { RaceParticipant } from '@/common/types';

interface HorseLinesProps {
  participants: RaceParticipant[] | undefined;
}
const props = defineProps<HorseLinesProps>();
</script>

<template>
  <div class="flex-1 flex flex-col justify-between py-8" v-if="participants">
    <div
      v-for="(horse, index) in participants"
      :key="horse.id"
      class="relative flex items-center h-full group"
    >
      <div
        class="w-8 h-8 flex items-center justify-center text-xs font-black text-white/30 border border-white/10 rounded-lg mr-4 group-hover:text-white/60 transition-colors"
      >
        {{ index + 1 }}
      </div>

      <div
        class="absolute left-10 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent bottom-0"
      ></div>

      <div class="flex-1 relative h-full">
        <div
          class="absolute top-1/2 -translate-y-1/2 transition-all duration-100 ease-linear"
          :style="{ left: `calc(${horse.currentPosition}% - 40px)` }"
        >
          <div class="relative group">
            <div
              class="absolute inset-0 blur-lg opacity-40 rounded-full transition-all duration-300"
              :style="{ backgroundColor: horse.color }"
            ></div>

            <div
              class="relative w-12 h-12 rounded-2xl bg-white shadow-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 border-2 border-white"
              :style="{ borderColor: horse.color }"
            >
              <i class="fa-solid fa-horse text-2xl" :style="{ color: horse.color }"></i>

              <div
                class="absolute -top-2 -right-2 w-5 h-5 bg-neutral-900 text-white text-[10px] font-black rounded-lg flex items-center justify-center border border-white/20 shadow-lg"
              >
                {{ index + 1 }}
              </div>
            </div>

            <div
              class="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[9px] font-bold text-white/40 whitespace-nowrap bg-black/20 px-1.5 py-0.5 rounded backdrop-blur-sm"
            >
              {{ Math.round(horse.currentPosition) }}%
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
