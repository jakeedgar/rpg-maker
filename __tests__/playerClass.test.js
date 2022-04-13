import PlayerClass from '../src/js/playerClass.js';

describe('PlayerClass', () => {
  let reusablePlayer;

  beforeEach(() => {
    reusablePlayer = new PlayerClass(5, 5, 5, 5);
  })
  
  test('should return the stats of the player class', () => {
    expect(reusablePlayer.strength).toEqual(5);
    expect(reusablePlayer.intelligence).toEqual(5);
    expect(reusablePlayer.dexterity).toEqual(5);
    expect(reusablePlayer.constitution).toEqual(5);
  });

  test('should return the experience points', () => {
    expect(reusablePlayer.xp(5)).toEqual(5);
  });
});