//Business Logic Stuff
function diceRoll(min, max) {
  let min = Math.ceil(min);
  let max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

function playerOne

function playerTwo


// UI Logic Stuff
$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();

    const playerOneName = $("input#playerOneName").val();
    const playerTwoName = $("input#playerTwoName").val();

  });
