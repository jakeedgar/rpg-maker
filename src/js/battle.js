import npcClass from "./npcGen";
import PlayerClass from "./playerClass";

export default class Battle {
  constructor(player, enemy) {
    this.player = player;
    this.enemy = enemy;
    this.hit = () => {
      return (Math.floor(Math.random()* this.enemy.strength + 1));
    }
    
  }
  
  ratBattle() {
    // let hit = (Math.floor(Math.random()* this.enemy.strength + 1));
    if(this.player.type === "knight") {
      this.player.constitution -= this.hit();
    }else {
      return this.player.constitution;
    }
  }
}

