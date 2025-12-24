import { ROUND_DISTANCES } from '@/common/enums';
import { Horse } from './horseTypes';

export interface RaceParticipant extends Horse {
  currentPosition: number;
  finishTime?: number;
  linePosition?: number;
}

export interface Round {
  id: number;
  distance: ROUND_DISTANCES;
  participants: RaceParticipant[];
  isCompleted: boolean;
}

export interface RaceResult {
  roundId: number;
  rankings: RaceParticipant[];
}
