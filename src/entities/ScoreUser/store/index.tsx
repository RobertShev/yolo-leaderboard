import { makeAutoObservable } from 'mobx';

import { ScoreUser } from '../model';

const removeScoreUser = (
  scoreUsers: ScoreUser[],
  scoreUser: ScoreUser
): ScoreUser[] => scoreUsers.filter((user) => user.userId !== scoreUser.userId);
const addScoreUser = (
  scoreUsers: ScoreUser[],
  scoreUser: ScoreUser
): ScoreUser[] => [...scoreUsers, scoreUser].sort((a, b) => b.score - a.score);

const updateScoreUsersLimit = (
  scoreUsers: ScoreUser[],
  limit: number
): ScoreUser[] => scoreUsers.slice(0, limit);

export class ScoreUsers {
  scoreUsers: ScoreUser[] = [];

  limit: number = 10;

  constructor() {
    makeAutoObservable(this);
  }

  addScoreUser = (scoreUser: ScoreUser) => {
    this.scoreUsers = updateScoreUsersLimit(
      addScoreUser(this.scoreUsers, scoreUser),
      this.limit
    );
  };

  removeScoreUser = (scoreUser: ScoreUser) => {
    this.scoreUsers = removeScoreUser(this.scoreUsers, scoreUser);
  };

  updateLimit = (newLimit: number) => {
    if (!Number.isNaN(newLimit) && newLimit > 0 && newLimit <= 20) {
      this.scoreUsers = updateScoreUsersLimit(this.scoreUsers, newLimit);
      this.limit = newLimit;
    }
  };
}

const store = new ScoreUsers();

export default store;
