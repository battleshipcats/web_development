var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomImageSource1 = "images/dice" + randomNumber1 + ".png";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSource1);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImageSource2);

if (randomNumber1>randomNumber2) {
    document.querySelector(".container h1").innerHTML="🚩 Player 1 Wins!";
}   
else if (randomNumber1<randomNumber2) {
    document.querySelector(".container h1").innerHTML="Player 2 Wins! 🚩";
}   
else {
    document.querySelector(".container h1").innerHTML="Draw!";
}


/*var diceList = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"] ;
var randomDicePosition1 = Math.floor(Math.random() * 6);
var randomNumber1 = diceList[randomDicePosition1];
var randomDicePosition2 = Math.floor(Math.random() * 6);
var randomNumber2 = diceList[randomDicePosition2];
var imageOne = (document.getElementsByClassName("img1")[0]);
var imageTwo = (document.getElementsByClassName("img2")[0]);

function die1(dice) {
    return randomNumber1;
}
die1(["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"]) ;

function die2(dice) {
    return randomNumber2;
}
die2(["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"]) ;

imageOne.src = die1(diceList);
imageTwo.src = die2(diceList);


if (randomNumber1>randomNumber2) {
    document.querySelector(".container h1").innerHTML="🚩 Player 1 Wins!";
}   else if (randomNumber1<randomNumber2) {
        document.querySelector(".container h1").innerHTML="Player 2 Wins! 🚩";
}   else {
        document.querySelector(".container h1").innerHTML="Draw!";
}
 */ 
