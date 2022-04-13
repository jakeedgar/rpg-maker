import npcClass from '../src/js/npcGen.js';

describe( 'npcClass',()=>{
  let npcPlayer;
  beforeEach(()=>{
  npcPlayer = new npcClass(4,6,7,8);
  })
  test ("Should return the npc  stats ",()=>{

  expect(npcPlayer.strength).toEqual(4);
  expect(npcPlayer.intelligence).toEqual(6);
  expect(npcPlayer.dexterity).toEqual(7);
  expect(npcPlayer.constitution).toEqual(8);
  });
});