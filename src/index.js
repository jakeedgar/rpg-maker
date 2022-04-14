import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import npcClass from "./js/npcGen";
import PlayerClass from "./js/playerClass";
import Battle from './js/battle';

$(document).ready(function() {
  $("#game").submit(function(event) {
    event.preventDefault();
    const playerClass = $("input:radio[name=player]:checked").val();
    console.log(playerClass);
    const playerOne = new PlayerClass();
    playerOne.vocation(playerClass);
    console.log(playerOne);
    const enemy = new npcClass();
    

    const game = new Battle(playerOne, enemy)

    $("#rat-gen").on("click",function() {
      enemy.enemyType("rat");
      console.log(enemy);
    });
  });
});