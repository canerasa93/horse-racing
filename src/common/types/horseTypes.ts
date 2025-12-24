import { HORSE_COLORS } from '@/common/enums';

export interface Horse {
  id: number;
  name: string;
  condition: number;
  color: HORSE_COLORS;
}
