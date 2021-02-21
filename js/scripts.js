//Business Logic Stuff
function diceRoll() {
  return Math.floor(Math.random() * 6) + 1; 
}


function playerOne

function playerTwo


// UI Logic Stuff
$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const playerOneName = $("input#playerOneName").val();
    const playerTwoName = $("input#playerTwoName").val();
    $("#formOne").hide();
    $("#gamePlay").show();

  });
