import { describe, expect, it } from 'vitest';
import { faker } from '@faker-js/faker';

import { ScoreUsers } from '..';
import { ScoreUser } from '../../model';

const generateTestUser = (): ScoreUser => ({
  userId: faker.string.uuid(),
  username: faker.internet.userName(),
  avatar: faker.image.avatar(),
  email: faker.internet.email(),
  score: faker.number.int({ min: 0, max: 10000 }),
});

describe('Score User Store', () => {
  it('should be empty state on initialization', () => {
    const store = new ScoreUsers();

    expect(store.scoreUsers.length).toBe(0);
    expect(store.scoreUsers).not.toBeUndefined();
    expect(store.scoreUsers).not.toBeNull();
    expect(store.scoreUsers.length).toBe(0);
  });

  it('should add score user', () => {
    const store = new ScoreUsers();

    expect(store.scoreUsers.length).toBe(0);
    store.addScoreUser(generateTestUser());
    expect(store.scoreUsers.length).toBe(1);
  });

  it('should remove score user', () => {
    const store = new ScoreUsers();

    expect(store.scoreUsers.length).toBe(0);
    const testUser = generateTestUser();
    store.addScoreUser(testUser);
    expect(store.scoreUsers.length).toBe(1);
    store.removeScoreUser(testUser);
    expect(store.scoreUsers.length).toBe(0);
  });

  it('should update limit value', () => {
    const store = new ScoreUsers();

    expect(store.limit).toBe(10);
    store.updateLimit(15);
    expect(store.limit).toBe(15);
  });

  it('should update userScores array length on limit change', () => {
    const store = new ScoreUsers();

    [...Array(10)].forEach(() => store.addScoreUser(generateTestUser()));
    expect(store.scoreUsers.length).toBe(10);
    store.updateLimit(2);
    expect(store.scoreUsers.length).toBe(2);
  });

  it('should prohibit NaN values on limit change', () => {
    const store = new ScoreUsers();

    expect(store.limit).toBe(10);
    store.updateLimit(NaN);
    expect(store.limit).toBe(10);
  });

  it('should prohibit negative values on limit change', () => {
    const store = new ScoreUsers();

    expect(store.limit).toBe(10);
    store.updateLimit(-10);
    expect(store.limit).toBe(10);
  });

  it('should prohibit greater than 20 values on limit change', () => {
    const store = new ScoreUsers();

    expect(store.limit).toBe(10);
    store.updateLimit(21);
    expect(store.limit).toBe(10);
  });
});
