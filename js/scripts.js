//Business Logic Stuff
function Gamer(name) {
  this.name = name;
  this.tempScore = 0;
  this.score = 0;
}

function diceRoll() {
  return Math.floor(Math.random() * 6) + 1; 
}

Gamer.prototype.checkScore = function(score) {
  if (Gamer.score >= 100) {
    $("#gamePlayOne").hide();
    $("#gamePlayTwo").hide();
    $("#playOneWin").show();
  } else {
    Gamer.prototype.tempScore(score);
  }
}

Gamer.prototype.tempScore = function(dice) {
  this.tempScore = tempScore + dice;
}

Gamer.prototype.score = function(scored) {
  this.score = Gamer.tempScore;
}


// UI Logic Stuff
//Starting Scores:
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
  });

  $("#rollDiceOne").click(function(event) {
    event.preventDefault();
    let rolled = rollDice();
    let scored = playerOne.score;
    if (rolled = 1) {
      playerOne.score = 0;
      playerOne.tempScore = 0;
      playerOne.prototype.score(0);
    } else {
      playerOne.prototype.tempScore(rolled);
      playerOne.prototype.checkScore(scored);
    }
  });

  $("#holdDiceOne").click(function(event) {
    event.preventDefault();
    playerOne.prototype.score(playerOne.tempScore);
    $("#gamePlayOne").hide();
    $("#gamePlayTwo").show();
    playerOne.tempScore = 0;
  });

    $("#giveUpOne").click(function(event) {
    event.preventDefault();
    $("#formOne").show();
    $("#gamePlayOne").hide();
    $("#gamePlayTwo").hide();
    $("#scoreDisplay").hide();
  });
});