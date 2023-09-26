import { ScoreUser } from '../../entities/ScoreUser/model';

export type LeaderboardTableProps = {
  removeUser: (user: ScoreUser) => void;
  users?: ScoreUser[];
};
