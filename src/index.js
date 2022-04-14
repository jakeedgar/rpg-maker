import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import npcClass from "./js/npcGen";
import PlayerClass from "./js/playerClass";
import Battle from './js/battle';

$(document).ready(function() {
  let playerClass;
  let playerOne;
  playerClass = $("input:radio[name=player]:checked").val();
  playerOne = new PlayerClass();
  const enemy = new npcClass();
  const game = new Battle(playerOne, enemy)
    $("#game").submit(function(event) {
      event.preventDefault();
      playerOne.vocation(playerClass);
      console.log(playerOne.type);
    $("#game").hide();
    $("#playerStats").show();
    $("#pClass").text(playerOne.type);
    $("#pStr").text(playerOne.strength);
    $("#pInt").text(playerOne.intelligence);
    $("#pCon").text(playerOne.constitution);
    $("#pDex").text(playerOne.dexterity);

    $("#rat-gen").on("click",function() {
      enemy.enemyType("rat");
    });
  });
});