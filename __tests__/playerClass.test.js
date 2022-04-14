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
    reusablePlayer.xp(5)
    expect(reusablePlayer.experience).toEqual(5);
  });

  test('should return player level',() =>{
    reusablePlayer.xp(1);
    expect(reusablePlayer.level).toEqual(1);
    reusablePlayer.xp(11);
    expect(reusablePlayer.level).toEqual(2);
    reusablePlayer.xp(21);
    expect(reusablePlayer.level).toEqual(3);
  });

  test("should update player stats based on player type input", () => {
    reusablePlayer.vocation("knight");
    expect(reusablePlayer.strength).toEqual(6);
    expect(reusablePlayer.intelligence).toEqual(4);
    expect(reusablePlayer.dexterity).toEqual(7);
    expect(reusablePlayer.constitution).toEqual(7);
    reusablePlayer.vocation("mage");
    expect(reusablePlayer.strength).toEqual(4);
    expect(reusablePlayer.intelligence).toEqual(7);
    expect(reusablePlayer.dexterity).toEqual(6);
    expect(reusablePlayer.constitution).toEqual(4);
  });

  test("should increase player stats based on held item", () => {
    reusablePlayer.vocation("knight");
    reusablePlayer.inventory("sword");
    expect(reusablePlayer.strength).toEqual(7);
    reusablePlayer.vocation("mage");
    reusablePlayer.inventory("staff");
    expect(reusablePlayer.intelligence).toEqual(8);
    reusablePlayer.vocation("knight");
    reusablePlayer.inventory("potion");
    expect(reusablePlayer.constitution).toEqual(12);
  })
});