import npcClass from "./npcGen";
import PlayerClass from "./playerClass";

export default class Battle {
  constructor(player, enemy) {
    this.player = player;
    this.enemy = enemy;
    this.enemyHit = () => {
      return (Math.floor(Math.random()* this.enemy.strength + 1));
    }
    this.knightHit = () => {
      return (Math.floor(Math.random()* this.player.strength + 1));
    }
    this.mageHit = () => {
      return (Math.floor(Math.random()* this.player.intelligence + 1));
    }
  }
  

  // ratBattle() {
  //   if (this.player.type === "knight") {
  //     this.player.constitution -= this.enemyHit();
  //   } else if(this.player.type === "mage"){
  //     this.player.constitution-=this.enemyHit();

  //   }else {
  //     return this.player.constitution;
  //   }

    
  // currentBattle() {
  //   if (this.player )
  //     return this.player.constitution -= this.enemyHit();
  // }
  currentBattle() {
    if ((this.player.turn === true) && (this.player.type === "knight")) {
      this.enemy.constitution -= this.knightHit();
      this.player.turn = false;
    } else if ((this.player.turn === true) && (this.player.type === "mage")) {
      this.enemy.constitution -= this.mageHit();
      this.player.turn = false;
    } else {
      return this.player.constitution;
    }
  }
}

