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
  playerOne = new PlayerClass();
  const enemy = new npcClass();
  const game = new Battle(playerOne, enemy)

    $("#game").submit(function(event) {
      event.preventDefault();
      playerClass = $("input:radio[name=player]:checked").val();
      playerOne.vocation(playerClass);
      console.log(playerOne.type);
    $("#game").hide();
    $("#playerStats").show();
    $("#pClass").text("Your Player Class Is: " + playerOne.type);
    $("#pStr").text("Your Strength Stat Is: " + playerOne.strength);
    $("#pInt").text("Your Intelligence Stat Is: " + playerOne.intelligence);
    $("#pCon").text("Your Constitution Stat Is: " + playerOne.constitution);
    $("#pDex").text("Your Dexterity Stat Is: " + playerOne.dexterity);
    });
  $("#rat-gen").on("click",function() {
    $("p#rat").show();
    enemy.enemyType("rat");
  });
  $("#wolf-gen").on("click",function() {
    $("p#wolf").show();
    enemy.enemyType("wolf");
  });
  $("#knight-gen").on("click",function() {
    $("p#knight").show();
    enemy.enemyType("enemyKnight");
  });
});