import { ScoreUser } from '../../entities/ScoreUser/model';

export type UserTableProps = {
  removeUser: (user: ScoreUser) => void;
  users?: ScoreUser[];
};
