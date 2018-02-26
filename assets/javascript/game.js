// Crystal Variables
var yellowCrystal = 0;
var blueCrystal = 0;
var pinkCrystal = 0;
var redCrystal = 0;

// Wins/Losses Counter Variables
var winCount = 0;
var lossCount = 0;

//Score Counter Variables
var targetScore = 0;
var yourScore = 0;

// Functions

//random number generator
var getRandomNum = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//starts the game each time
var startGame = function() {

//reset current score (why not use var infront of the below variables??)
yourScore = 0;

// Computer picks random number for target score (19-120)
targetScore = getRandomNum(19, 120);
  

// Computer picks random number for each crystal (1-12)
yellowCrystal = getRandomNum(1, 12);
blueCrystal = getRandomNum(1 ,12);
pinkCrystal = getRandomNum(1, 12);
redCrystal = getRandomNum(1, 12);


// testing 
console.log("Target Score " + targetScore);
console.log("yellow " + yellowCrystal);
console.log("blue " + blueCrystal);
console.log("pink " + pinkCrystal);
console.log("red " + redCrystal);


// Loads the target score to the page at start
$("#targetScore").html(targetScore);

//  Loads the player's score to the page at start
$("#yourScore").html(yourScore);
}
// Fuctions to check if won each tme a player clicksa crystal
var checkWin = function() {
  if (yourScore === targetScore) {
    //if won, wins increase by 1 
    winCount++;
    //and alerts winner winner
    alert("Winner Winner!!");
    //updates wins to html
    $("#winCount").html(winCount);
    //restarts the game
    startGame();
  }

  // if our score goes over target score
  else if (yourScore > targetScore) {
    //losses increase by 1
    lossCount++;
    //alerts the loss
    alert("Try Again!!");
    //updates losses to html
    $("#lossCount").html(lossCount);
    //restarts the game
    startGame();
  }
};

//function to add each crystals value to total score
var addValues = function(clickedCrystals) {
  //sets total score equal to crystal value + total score
  yourScore += clickedCrystals
  //updates total score to html
  $("#yourScore").html(yourScore);
  //restarts game
  checkWin();
}



// console.log("crystal".length);
// $("").on("click", function() {

// When Your Score = Target Score, alert player wins

// Win count increases, another random target score and crystal number is selected, your score resets

// When Your Score > Target Score, alert player lost

// Loss count increases, another random target score and crystal number is selected, your score resets

// Main Process
//calls the game to start
startGame();

$("#yellow").click(function() {
  addValues(yellowCrystal);
});

$("#blue").click(function() {
  addValues(blueCrystal);
  });

$("#pink").click(function() {
  addValues(pinkCrystal);
  });

$("#red").click(function() {
  addValues(redCrystal);
  })
