
var buttonColors = ["green","red","yellow","blue"];
var gamePattern = [];
var userClickedPattern = [];
var started = false;
var level = (0);

// click any key to start game.
$(document).keypress(function() {
    if (!started) {
    nextSequence();
    started = true;
    };
 }); 

 // trigger next sequence
function nextSequence() {
    level++;
    userClickedPattern = [];
    $("#level-title").text("Level "+level);
    var randomNumber = Math.floor(Math.random() * 4);   
    randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    $("#" + randomChosenColor).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor);
    //console.log("Game: "+gamePattern);  //<-- this console log is for testing only.
};

// button clicks
$(".btn").on("click", function() {
    var userChosenColor = this.id;
    userClickedPattern.push(userChosenColor);
    animatePress(userChosenColor);  
    playSound(userChosenColor);
    var lastUserIndex = userClickedPattern.length-1; //this will always set back to 0 after next sequence.
    //console.log("User: "+userClickedPattern);  //<-- this console log is for testing only.
    checkAnswer(lastUserIndex);
    });

// button animations
function animatePress (currentColor) {
    var activeButton = $("#" + currentColor);
    $(activeButton).addClass("pressed");
    setTimeout(function() {
        $(activeButton).removeClass("pressed");
    }, 100);
};

//button sounds
function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3")
    audio.play();
};

//check answer
 function checkAnswer(currentLevel) {
    if(userClickedPattern[(currentLevel)] === gamePattern[(currentLevel)]) {
    //console.log("Success "+currentLevel);  //<-- currentlevel is for testing only
    if (currentLevel === gamePattern.length-1) {
        setTimeout (function() {
            nextSequence()
        },1000);}

  } else {
    $("body").addClass("game-over");
    setTimeout(function() {
        $("body").removeClass("game-over");
    }, 200);
    $("#level-title").text("Game Over - Press Any Key to Restart");
    gamePattern = [];
    started = false;
    level = (0);
    console.log("Wrong");
  }
 };

/* add a function that will initiate check answer ONLY when 
    number of values in userClickedPattern is equal to that of gamePattern
    or
    index of userClickedPattern that was last pressed matches the last index number of gamePattern.
 */