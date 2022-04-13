export default class PlayerClass {
  constructor(strength, intelligence, dexterity, constitution) {
    this.strength = strength;
    this.intelligence = intelligence;
    this.dexterity = dexterity;
    this.constitution = constitution;
    this.experience = 0;
    this.level = 1;
  }
  
  xp(xpPoints) {
    return(this.experience + xpPoints);
  }
}