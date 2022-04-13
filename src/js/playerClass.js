export default class PlayerClass {
  constructor(strength, intelligence, dexterity, constitution) {
    this.strength = strength;
    this.intelligence = intelligence;
    this.dexterity = dexterity;
    this.constitution = constitution;
    this.experience = 0;
    this.level = 1;
    this.type = {};
  }
  
  xp(xpPoints) {
    this.experience += xpPoints;
    if(this.experience <= 10){
      this.level = 1;
    }else if(this.experience <= 20) {
      this.level = 2;
    }else {
      this.level = 3;
    }
  }

  vocation(playerType) {
    if (playerType === "knight") {
      this.strength = 6;
      this.intelligence = 4;
      this.dexterity = 7;
      this.constitution = 7;
      this.type = "knight";
    } else {
      this.strength = 4;
      this.intelligence = 7;
      this.dexterity = 6;
      this.constitution = 4;
      this.type = "mage";
    }
  }
  
}