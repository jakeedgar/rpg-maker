import PlayerClass from '../src/js/playerClass.js';

describe('PlayerClass', () => {
  
  test('should return the stats of the player class', () => {
    let playerOne = new PlayerClass(5, 5, 5, 5); 
    expect(playerOne.strength).toEqual(5);
    expect(playerOne.intelligence).toEqual(5);
    expect(playerOne.dexterity).toEqual(5);
    expect(playerOne.constitution).toEqual(5);
  });
});