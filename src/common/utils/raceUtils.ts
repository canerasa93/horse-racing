import { HORSE_COLORS } from '@/common/enums';
import { Horse, Round, RaceParticipant } from '@/common/types';
import { HORSE_NAMES, TOTAL_HORSES, ROUND_DISTANCES, HORSES_PER_ROUND } from '@/common/constants';

import { generateRandomNumber } from './commonUtils';

export const generateHorses = (): Horse[] => {
  const colorValues = Object.values(HORSE_COLORS);
  return Array.from({ length: TOTAL_HORSES }, (_, index) => ({
    id: index + 1,
    name: HORSE_NAMES[index] || `Horse ${index + 1}`,
    condition: generateRandomNumber(1, 100),
    color: colorValues[index % colorValues.length] as HORSE_COLORS,
  }));
};

export const generateProgram = (allHorses: Horse[]): Round[] => {
  const program: Round[] = [];

  ROUND_DISTANCES.map((distance, index) => {
    const shuffled = [...allHorses].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, HORSES_PER_ROUND);

    const participants: RaceParticipant[] = selected.map((horse, idx) => ({
      ...horse,
      currentPosition: 0,
      linePosition: idx + 1,
    }));

    program.push({
      id: index + 1,
      distance,
      participants,
      isCompleted: false,
    });
  });

  return program;
};
