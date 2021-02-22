//Business Logic Stuff
function Gamer(playerName) {
  this.playerName = playerName;
  this.score = 0;
}


function playerOne() {
  let score = 0;
  let dice = diceRoll();
    if (dice === 1) {
      return score = 0;
    } else {
      score = playerScoreOne(dice, oldScoreOne);
      return score = newScoreOne;
    }
};

function playerTwo() {
  let score = 0;
  let dice = diceRoll();
  if (dice === 1) {
    return score = 0;
  } else {
    score = playerScoreTwo(dice, tempScoreTwo);
    return score = tempScoreTwo;
  }
};

function playerScoreOne(dice, oldScoreOne) {
  newScoreOne = oldScoreOne + dice;
  return newScoreOne;
};

function playerScoreTwo(dice, tempScoreTwo) {
  tempScoreTwo = tempScoreTwo + dice;
  return tempScoreTwo;
};

function checkScoreOne(score) {
  if (score >= 100) {
    console.log("winner");
    $("#formOne").hide();
    $("#gamePlayOne").hide();
    $("#gamePlayTwo").hide();
    $("#scoreDislay").hide();
    $("#winnerTwo").hide();
    $("#winnerOne").show();
  } else {
    return score;
  }
};

function checkScoreTwo(score) {
  if (score >= 100) {
    console.log("winner");
    $("#formOne").hide();
    $("#gamePlayOne").hide();
    $("#gamePlayTwo").hide();
    $("#scoreDislay").hide();
    $("#winnerTwo").show();
    $("#winnerOne").hide();
  } else {
    return score;
  }
};


// UI Logic Stuff
//Starting Scores:
let playerOneScore = 0;
let playerTwoScore = 0;
let oldScoreOne = 0;
let tempScoreTwo = 0;

let pigDiceGamer = new Gamer();

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

    let newGamer = new Gamer(playerOneName)
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