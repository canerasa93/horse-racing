import type { VNodeChild } from 'vue';

export type TableData = {
  id: number;
  value: string;
};

export type TableColumn<T = unknown> = {
  key: string;
  label: string;
  render?: (value: unknown, item: T, index: number) => VNodeChild;
};
