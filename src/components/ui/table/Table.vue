<script setup lang="ts" generic="T extends Record<string, any>">
import { TableColumn } from '@/common/types';
import { toRefs } from 'vue';

interface TableProps {
  classname?: string;
  data: T[];
  columns: TableColumn<T>[];
}
const props = withDefaults(defineProps<TableProps>(), {
  classname: 'w-full text-sm',
});

const { data, columns } = toRefs(props);
</script>

<template>
  <table :class="[classname, 'border-separate border-spacing-0 overflow-hidden']">
    <thead class="bg-neutral-50 border-b border-neutral-200">
      <tr>
        <th
          class="p-3 text-left text-xs font-bold text-neutral-500 uppercase tracking-wider first:rounded-tl-lg last:rounded-tr-lg border-b border-neutral-200"
          v-for="column in columns"
          :key="column.key"
        >
          {{ column.label }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        class="group hover:bg-amber-50/30 transition-colors"
        v-for="(item, index) in data"
        :key="item.id || index"
      >
        <td
          class="p-3 text-neutral-700 font-medium whitespace-nowrap border-b border-neutral-100"
          v-for="column in columns"
          :key="column.key"
        >
          <template v-if="column.render">
            <component :is="() => column.render!(item[column.key], item, index)" />
          </template>
          <template v-else>
            {{ item[column.key] }}
          </template>
        </td>
      </tr>
    </tbody>
  </table>
</template>
