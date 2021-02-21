//Business Logic Stuff
function diceRoll() {
  return Math.floor(Math.random() * 6) + 1; 
}


function playerOne() {
  let score = 0;
  let dice = diceRoll();
    if (dice === 1) {
      return score = 0;
    } else {
      score = playerScoreOne(dice, tempScoreOne);
      checkScoreOne(score);
      return score = tempScoreOne;
    }
};

function playerTwo() {
  let score = 0;
  let dice = diceRoll();
  if (dice === 1) {
    return score = 0;
  } else {
    score = playerScoreTwo(dice, tempScoreTwo);
    checkScoreTwo(score);
    return score = tempScoreTwo;
  }
};

function playerScoreOne(dice, tempScoreOne) {
  tempScoreOne = tempScoreOne + dice;
  return tempScoreOne;
};

function playerScoreTwo(dice, tempScoreTwo) {
  tempScoreTwo = tempScoreTwo + dice;
  return tempScoreTwo;
};

function checkScoreOne(score) {
  if (score >= 100) {
    console.log("winner");
  } else {}
};

function checkScoreTwo(score) {
  if (score >= 100) {
    console.log("winner");
  } else {}
};


// UI Logic Stuff
//Starting Scores:
let playerOneScore = 0;
let playerTwoScore = 0;
let tempScoreOne = 0;
let tempScoreTwo = 0;

$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    event.preventDefault();
    const playerOneName = $("input#playerOneName").val();
    const playerTwoName = $("input#playerTwoName").val();
    $("#formOne").hide();
    $("#gamePlayOne").show();
    $("#scoreDisplay").show();

    
  });
  $("#rollDiceOne").click(function(event) {
    event.preventDefault();
    playerOne();
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
    $("#scoreDislay").hide();
  });
});