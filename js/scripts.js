//Business Logic Stuff
function ListOfGamers() {
  this.gamers = {};
  this.currentId = 0;
}

ListOfGamers.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

ListOfGamers.prototype.addGamer = function(gamer) {
  gamer.id = this.assignId();
  this.gamers[gamer.id] = gamer;
}

ListOfGamers.prototype.findGamer = function(id) {
  if (this.gamers[id] != undefined) {
    return this.gamers[id];
  }
  return false;
}

function Gamer(name) {
  this.name = name;
  this.tempScore = 0;
  this.score = 0;
}

function diceRoll() {
  return Math.floor(Math.random() * 6) + 1; 
}

Gamer.prototype.checkScore = function(score) {
  if (this.score >= 100) {
    $("#gamePlayOne").hide();
    $("#gamePlayTwo").hide();
    $("#playOneWin").show();
  } else {
    gamersList.gamers[1].tempScore(score);
  }
}

Gamer.prototype.tempScore = function(dice) {
  this.tempScore = this.tempScore + dice;
  return this.tempScore;
}

Gamer.prototype.score = function(score) {
  this.score = this.score + this.tempScore;
  return this.score;
}


// UI Logic Stuff
let gamersList = new ListOfGamers();

$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    event.preventDefault();
    const playerOneName = $("input#playerOneName").val();
    const playerTwoName = $("input#playerTwoName").val();
    $(".playerOneName").text(playerOneName);
    $(".playerTwoName").text(playerTwoName);
    $("#formOne").hide();
    $("#gamePlayOne").show();
    $("#scoreDisplay").show();

    let playerOne = new Gamer(playerOneName);
    let playerTwo = new Gamer(playerTwoName);
    gamersList.addGamer(playerOne);
    gamersList.addGamer(playerTwo);
  });
  

  $("#rollDiceOne").click(function(event) {
    event.preventDefault();
    let rolled = diceRoll();
    if (rolled === 1) {
      this.gamers[1].tempScore = 0;
      this.gamers[1].score(0);
    } else {
      Gamer.checkScore(rolled);
    }
  });

  $("#rollDiceTwo").click(function(event) {
    event.preventDefault();
    playerTwo();
  });

  $("#holdDiceOne").click(function(event) {
    event.preventDefault();
    playerScoreOne();
    checkScoreOne();
    $("#gamePlayOne").hide();
    $("#gamePlayTwo").show();
    tempScore = 0;
  });

  $("#holdDiceTwo").click(function(event) {
    event.preventDefault();
    playerScoreTwo();
    checkScoreTwo();
    $("#gamePlayOne").show();
    $("#gamePlayTwo").hide();
    tempScore = 0;
  });


  $("#giveUpOne").click(function(event) {
    event.preventDefault();
    $("#formOne").show();
    $("#gamePlayOne").hide();
    $("#gamePlayTwo").hide();
    $("#scoreDisplay").hide();
  });

  $("#giveUpTwo").click(function(event) {
    event.preventDefault();
    $("#formOne").show();
    $("#gamePlayOne").hide();
    $("#gamePlayTwo").hide();
    $("#scoreDisplay").hide();
  });



});