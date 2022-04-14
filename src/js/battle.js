import npcClass from "./npcGen";
import PlayerClass from "./playerClass";

export default class Battle {
  constructor(player, enemy) {
    this.player = player;
    this.enemy = enemy;
  }

  ratBattle() {
    if(this.player.type === "knight") {
      this.player.constitution -= 1;
    }else {
      return this.player.constitution;
    }
  }
}

