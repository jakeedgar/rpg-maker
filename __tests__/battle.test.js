import Battle from '../src/js/battle.js';
import PlayerClass from '../src/js/playerClass.js';
import npcClass from '../src/js/npcGen.js';

describe('battle', () => {
  let enemy;
  let player;
  let battle;

  beforeEach(() => {
    enemy = new npcClass();
    player = new PlayerClass();
    battle = new Battle(player, enemy);
  })

  test('should return the specific stat with player or npc input', () => {
    player.vocation("knight");
    expect(battle.player.strength).toEqual(6);
    enemy.enemyType("wolf");
    expect(battle.enemy.strength).toEqual(5);
    player.vocation("mage");
    expect(battle.player.intelligence).toEqual(7)
  });

  test("should decrement opposing players constitution by 1", () => {
    player.vocation("knight");
    enemy.enemyType("wolf");
    battle.ratBattle();
    expect(battle.player.constitution).toEqual(6);
  });
});
