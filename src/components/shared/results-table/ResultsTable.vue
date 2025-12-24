<script setup lang="ts">
import { RaceResult, TableColumn } from '@/common/types';
import { Box, EmptyState, Table } from '@/components/ui';
import { computed, h, toRefs } from 'vue';

interface ResultsTableProps {
  results: RaceResult[];
}

const props = defineProps<ResultsTableProps>();

const { results } = toRefs(props);
const hasResults = computed(() => results.value.length > 0);

const columns: TableColumn[] = [
  {
    key: 'position',
    label: 'Position',
    render: (_, __, index: number) => {
      const isWinner = index === 0;

      return h('div', { class: 'flex items-center gap-2' }, [
        h('span', index + 1),

        isWinner ? h('i', { class: 'fas fa-trophy text-yellow-500', title: 'Winner' }) : null,
      ]);
    },
  },
  {
    key: 'name',
    label: 'Name',
  },
];
</script>

<template>
  <Box title="Results" iconClass="fa-solid fa-trophy text-amber-500">
    <EmptyState
      v-if="!hasResults"
      title="No results yet."
      description="Waiting for the race to finish..."
      icon="fa-solid fa-flag-checkered"
    />

    <div v-else class="flex-1 overflow-y-auto">
      <div
        v-for="res in results"
        :key="res.roundId"
        class="border-b last:border-0 border-neutral-100"
      >
        <div
          class="bg-emerald-50/50 px-3 py-1.5 flex justify-between items-center border-b border-neutral-100"
        >
          <span class="text-[11px] font-black text-emerald-700 uppercase"
            >{{ res.roundId }}. Round Finish</span
          >
          <i class="fa-solid fa-check-circle text-emerald-500 text-xs"></i>
        </div>

        <Table :data="res.rankings" :columns="columns" class="w-full text-xs" />
      </div>
    </div>
  </Box>
</template>
