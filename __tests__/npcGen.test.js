import npcClass from '../src/js/npcGen.js';

describe( 'npcClass',()=>{
  let npcPlayer;
  
  beforeEach(()=>{
  npcPlayer = new npcClass(4,6,7,8);
  })

  test ("Should return the npc stats ",()=>{

  expect(npcPlayer.strength).toEqual(4);
  expect(npcPlayer.intelligence).toEqual(6);
  expect(npcPlayer.dexterity).toEqual(7);
  expect(npcPlayer.constitution).toEqual(8);
  });

  test("should update player stats based on player type input", () => {
    npcPlayer.enemyType("enemyKnight");
    expect(npcPlayer.strength).toEqual(8);
    expect(npcPlayer.intelligence).toEqual(7);
    expect(npcPlayer.dexterity).toEqual(8);
    expect(npcPlayer.constitution).toEqual(7);
    npcPlayer.enemyType("wolf");
    expect(npcPlayer.strength).toEqual(5);
    expect(npcPlayer.intelligence).toEqual(6);
    expect(npcPlayer.dexterity).toEqual(5);
    expect(npcPlayer.constitution).toEqual(5);
    npcPlayer.enemyType("rat");
    expect(npcPlayer.strength).toEqual(4);
    expect(npcPlayer.intelligence).toEqual(4);
    expect(npcPlayer.dexterity).toEqual(4);
    expect(npcPlayer.constitution).toEqual(4)
  });
});