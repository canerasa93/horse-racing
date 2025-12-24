<script setup lang="ts">
import { Horse, TableColumn } from '@/common/types';
import { h } from 'vue';
import { EmptyState, Table, Box } from '@/components/ui';

interface HorseListProps {
  horses: Horse[];
}

defineProps<HorseListProps>();

const columns: TableColumn<Horse>[] = [
  {
    key: 'name',
    label: 'Name',
  },
  {
    key: 'condition',
    label: 'Condition',
  },
  {
    key: 'color',
    label: 'Color',
    render: (value: unknown) => {
      return h('div', {
        class: 'w-5 h-5 mx-auto rounded-full shadow-inner',
        style: { backgroundColor: value as string },
      });
    },
  },
];
</script>

<template>
  <Box title="Horse List" :suffix="`${horses.length} horses`">
    <EmptyState
      v-if="!horses.length"
      title="No horses yet."
      description="Waiting for the generation to program the horses..."
      icon="fa-solid fa-horse"
    />

    <div v-else class="flex-1 overflow-y-auto">
      <Table :data="horses" :columns="columns" class="w-full text-xs" />
    </div>
  </Box>
</template>
