<script setup lang="ts">
import { Round } from '@/common/types';
import { Box, EmptyState, Table } from '@/components/ui';
import { computed } from 'vue';

interface ProgramTableProps {
  program: Round[];
}

const props = defineProps<ProgramTableProps>();

const hasProgram = computed(() => props.program.length > 0);

const columns = [
  {
    key: 'linePosition',
    label: 'Position',
  },
  {
    key: 'name',
    label: 'Name',
  },
];
</script>

<template>
  <Box title="Race Program" iconClass="fa-solid fa-calendar-alt text-amber-500">
    <EmptyState
      v-if="!hasProgram"
      title="No program yet."
      description="Click 'Generate Program' to start."
      icon="fa-solid fa-list-check"
    />
    <div v-else class="flex-1 overflow-y-auto">
      <div
        v-for="round in program"
        :key="round.id"
        class="border-b last:border-0 border-neutral-100"
      >
        <div
          class="bg-amber-50/50 px-3 py-1.5 flex justify-between items-center border-b border-neutral-100"
        >
          <span class="text-[11px] font-black text-amber-700 uppercase">{{ round.id }}. Round</span>
          <span
            class="text-[10px] font-bold text-neutral-500 bg-white px-2 py-0.5 rounded-full border border-neutral-200"
          >
            {{ round.distance }}m
          </span>
        </div>

        <Table :data="round.participants" :columns="columns" class="w-full text-xs" />
      </div>
    </div>
  </Box>
</template>
