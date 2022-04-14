export default class npcClass {
  constructor(strength, intelligence, dexterity, constitution) {
    this.strength = strength;
    this.intelligence = intelligence;
    this.dexterity = dexterity;
    this.constitution = constitution;
    this.type = {};
    this.turn = false;
  }
  enemyType(npcPlayer) {
    if (npcPlayer === "enemyKnight") {
      this.strength = 8;
      this.intelligence = 7;
      this.dexterity = 8;
      this.constitution = 7;
      this.type = "enemyKnight";
    } else if(npcPlayer === "wolf") {
      this.strength = 5;
      this.intelligence = 6;
      this.dexterity = 5;
      this.constitution = 5;
      this.type = "wolf";
    }else {
      this.strength = 4;
      this.intelligence = 4;
      this.dexterity = 4;
      this.constitution = 4;
      this.type = "rat";
    }
  }
}