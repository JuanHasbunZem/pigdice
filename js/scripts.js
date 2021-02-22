//Business Logic Stuff
function Gamer(name) {
  this.name = name;
  this.tempScore = 0;
  this.score = 0;
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
    let score = playerOne();
    checkScoreOne(score);
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