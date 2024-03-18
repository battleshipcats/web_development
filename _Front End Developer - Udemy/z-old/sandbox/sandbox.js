function test() {
  var a = "3";
  var b = "8";
  
/***********Do not change the code above 👆*******/
//Write your code on lines 7 - 9:
var c = b;
b = a;
a = c;
/***********Do not change the code below 👇*******/

  console.log("a is " + a);
  console.log("b is " + b);
}

/* Make name input first letter cap and rest lower case */
var name = prompt("What is your name?");  //lIsA
var numLetters = name.length;	//gets number of lettters in name
var firstLetter = name.slice(0,1); //slices out first letter
var restOfName = name.slice(1,numLetters);  //slices out remainder
var firstCap = firstLetter.toUpperCase();  //caps first letter
var restLower = restOfName.toLowerCase();  //lc rest
alert("Hello, "+(firstCap)+(restLower));  //”Hello, Lisa”

//human age = (dog age - 2) x 4 + 21
var dogAge = prompt("Wie alt ist deinen hund?");
var humanAge = ((dogAge - 2)*4)+21;
alert("Dein hund ist "+humanAge+" Jahre alt menschlich!")

/* move beeper */
function main(){
    putBeeper();
    moveAndPutBeeper();
    moveAndPutBeeper();
    leftAndPutBeeper();
    moveAndPutBeeper();
    rightAndPutBeeper();
    moveAndPutBeeper();
    moveAndPutBeeper();
    leftAndPutBeeper();
    moveAndPutBeeper();
    rightAndPutBeeper();
    moveAndPutBeeper();
    moveAndPutBeeper();
    }
    
    function moveAndPutBeeper() {
    move();
    move();
    putBeeper();
    }
    
    function leftAndPutBeeper() {
    turnLeft();
    move();
    turnLeft();
    move();
    putBeeper();
    }
    
    function rightAndPutBeeper() {
    move();
    turnRight();
    move();
    turnRight();
    putBeeper();
    }
    
/**
 * Correct Answer
 **/

 function main(){
    moveBeeperRight();
    goUpTurnLeft();
    moveBeeperLeft();
    goUpTurnRight();
    moveBeeperRight();
    goUpTurnLeft();
    moveBeeperLeft();
    goUpTurnRight();
    moveBeeperRight();
    }
    
    function moveBeeperRight() {
    putBeeper();
    move();
    move();
    putBeeper();
    move();
    move();
    putBeeper();
    }
    
    function moveBeeperLeft() {
    move();
    putBeeper();
    move();
    move();
    putBeeper();
    move();
    }
    
    function goUpTurnLeft() {
    turnLeft();
    move();
    turnLeft();
    }
    
    function goUpTurnRight() {
    turnRight();
    move();
    turnRight();
    
    }
    
        
    function getMilk(money) {   
        var numOfBottles = Math.floor(money/1.5);
        console.log("Spend $"+money+".");
        console.log("Buy "+numOfBottles+" bottles of milk.");    
        console.log("Get $"+money%1.5+" back in change.");

    }
    
   var change = getMilk(10); //6 bottles of milk

   //alt
   function getMilk(money) {  
    var milkCost = 1.5;
    var bottles = (Math.floor(money/milkCost));
    var change = (money%milkCost);

  console.log("You bought "+bottles+" of milk. Your change is $"+change+".");

}
getMilk(5);

    
function lifeInWeeks(age) {
    var yearsLeft = 90-age;
    var x = yearsLeft*365;
    var y = yearsLeft*52;
    var z = yearsLeft*12;
    console.log("You have "+x+" days, "+y+" weeks, and "+z+" months left.");
}
// You have 14235 days, 2028 weeks, and "468" months left.

lifeInWeeks(12); //input is 12.


function getMilk(money, costPerBottle) {   
  console.log("Buy "+calcBottles(money, costPerBottle)+" bottles of milk.");    
  return calcChange(money, costPerBottle);
}
  
function calcBottles(startingMoney, costPerBottle) {
  var numOfBottles = Math.round(startingMoney/costPerBottle);
  return numOfBottles;
}

function calcChange(startingAmount, costPerBottle) {
  var change = startingAmount % costPerBottle;
  return change;
}
  console.log("Here is your $"+getMilk(10, 3)+" change.");
  console.log("Here are "+calcBottles(5, 1.5)+" bottles of milk.");

//Create your function below this line.
//The first parameter should be the weight and the second should be the height.
//BMI = weight/(height2)
/* If my weight is 65Kg and my height is 1.8m, I should be able to call your function like this:
var bmi = bmiCalculator(65, 1.8); 
bmi should equal 20 when it's rounded to the nearest whole number.*/
function bmiCalculator(weight, height) {
    var bmi = Math.round(weight/Math.pow(height, 2));
    return bmi;
}

var bmi = bmiCalculator(65, 1.8);

console.log("Your BMI is "+bmi+".");


// love calculator
prompt("What is your name?");
prompt("What is your love interest's name?");
var loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1;
console.log(loveScore);
    
alert("Love Calculator result is: "+loveScore+"%");


// reversing a string - one of many ways
function reverseString(str) {

    return str.split("").reverse().join("");
}
reverseString("54321");


function bmiCalculator(weight, height) {
  var bmi = Math.round(weight/Math.pow(height, 2));
  return bmi;
}

var bmi = bmiCalculator(65, 1.8);

if(bmi<18.50) {
  alert("Your BMI is "+bmi+". You are underweight.");
}

if(bmi>18.50 && bmi<25.50) {
  alert("Your BMI is "+bmi+". You are normal weight.");
}

if(bmi>25.5) {
  alert("Your BMI is "+bmi+". You are overweight.");
}


function bmiCalculator (weight, height) {
  var bmi = Math.round(weight/Math.pow(height, 2));
  var interpretation = "";
  if(bmi<18.50) {
      interpretation="Your BMI is "+bmi+", so you are underweight."
  } else if(bmi>=18.5 && bmi<24.9) {
      interpretation="Your BMI is "+bmi+", so you have a normal weight."
  } else {
      interpretation="Your BMI is "+bmi+", so you are overweight."
  }
  return interpretation;
}

//leap year
// my answer
function isLeap(year) {
  var div4 = year%4;
  var div100 = year%100;
  var div400 = year%400;
  var leapYear = "";
      
      if(div400===0){        
          leapYear = year+" is a leap year."
      } else  if (div4===0 && div100!==0) {
          leapYear = year+" is a leap year."
      } else {
          leapYear = year+" is not a leap year."
      }
  return leapYear;
  }

  function isLeap(year) {
    var div4 = year%4;
    var div100 = year%100;
    var div400 = year%400;
    var leapYear = "";
        
        if(div400===0){        
            leapYear = "Leap year."
        } else  if (div4===0 && div100!==0) {
            leapYear = "Leap year."
        } else {
            leapYear = "Not leap year."
        }
    return leapYear;
    }
  
  isLeap(1964)
      // angela's snswer
    /*   That's it. I would also recommend you to look at the solution given by Angela. 
    Since year is given to you in isLeap, you don't need to store it in div4, div100  and div400. 
    If you have a large program with a lot of variables, it can prove to be confusing down the road.
*/

function leap(year) {
    
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return "Leap year.";
            } else {
                return "Not leap year";
                }
        } else {
            return "Leap year.";           
            }
    } else {
        return "Not leap year.";
        }
}

    leap(2002);
    
    function isLeap(year) {
        var div400 = (year%400);
        var div100 = (year%100);
        var div4 = (year%4);
        var leapYear = "";
    
        if (div400 === 0) {
            leapYear = "Yes, "+year+" is a leap year";
        }
        else if (div4 === 0 && div100 !== 0) {
            leapYear = "Yes, "+year+" is a leap year";
        }
        else {
            leapYear = "No, "+year+" is not a leap year.";
        }
    
        return leapYear;
    }
    
    isLeap (prompt("Year?"));
    

// arrays
var guestList = [   ];

var guestName = prompt ("What is your name?");

if (guestList.includes(guestName)) {
    alert("Welcome!");
}else {
    alert("Sorry!");
}


//fizzBuzz - my solution - these do not have returns or outputs.
var output = [];

function fizzBuzz () {
    if ((output.length+1)%15===0) {
        output.push ("fizzbuzz");
    }
    else if ((output.length+1)%5===0) {
        output.push ("buzz");
    }
    else if ((output.length+1)%3===0) {
        output.push ("fizz");
    }
    else {
        output.push(output.length+1)
    }
    
    console.log(output);
}
  // angela's solution
var output = [];
var count = 1;

function fizzBuzz () {
    if (count%3===0 && count%5===0) {
        output.push ("fizzbuzz");
    }
    else if (count%5===0) {
        output.push ("buzz");
    }   
    else if (count%3===0) {
        output.push ("fizz");
    }
    else {
        output.push (count);  

    count++;
    }
    
    console.log(output);
}
//order of if statement matters!
var output = [];
var count = 1;

function fizzBuzz() {
    if(count%15===0) {
        output.push("fizzbuzz");
        console.log(output);
        }else if (count%5===0) {
            output.push("buzz");
            console.log(output);
        }else if (count%3===0) {
            output.push("fizz");
            console.log(output);
        }else {
            output.push(count);
            console.log(output);

    }
    count++;
}
//while loop. 
var output = [];
var count = output.length;

function fizzBuzz() {
      while (count<16) {
          
       if(count%15===0) {
            output.push("fizzbuzz");
            console.log(output);
        }else if (count%5===0) {
            output.push("buzz");
            console.log(output);
        }else if (count%3===0) {
            output.push("fizz");
            console.log(output);
        }else {
            output.push(count);
            console.log(output);    
    }
    count++;
  }
}


/** Who's Buying Lunch? Code Challenge
You are going to write a function which will select a random name from a list of names. The person selected will have to pay for everybody's food bill.

Important: The output should e returned from the function and you do not need alert, prompt or console.log. The output should match the example output exactly, including capitalisation and punctuation.

Example Input

["Angela", "Ben", "Jenny", "Michael", "Chloe"]
Example Output

Michael is going to buy lunch today!


Hint

1. You might need to think about Array.length.

2. Remember that Arrays start at position 0!

 */
//My answer - not perfect
var guestList = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];

function whosPaying(names) {
    var poorSucker = guestList[Math.floor(Math.random() * guestList.length)];
    return poorSucker+" is going to buy lunch today!";
}

//Angela's answer 

function whosPaying(names) {
    var numberOfPeople = guestList.length;
    var randomPersonPosition = Math.floor(Math.random() * numberOfPeople);
    var randomPerson = guestList[randomPersonPosition];

    return randomPerson+" is going to buy lunch today!";
}
whosPaying(["Angela", "Ben", "Jenny", "Michael", "Chloe"]) ;


// while loops
    //My answer
var output = [];

function fizzBuzz () {

    while (output.length+1 <= 100) {
        
        if ((output.length+1)%15===0) {
            output.push ("fizzbuzz");
        }
        else if ((output.length+1)%5===0) {
            output.push ("buzz");
        }
        else if ((output.length+1)%3===0) {
            output.push ("fizz");
        }
        else {
            output.push(output.length+1);
        }

        output.lengh++;
    }
    
    console.log(output);
}
    //Angela's answer

    var output = [];
    var count = 1;

    function fizzBuzz () {

        while (count <= 100) {

            if (count % 3 === 0 && count % 5 === 0 ) {
                output.push ("FizzBuzz");
            }
            else  if (count % 3 === 0) {
                output.push ("Fizz");
            }
            else if (count % 5 === 0) {
                output.push ("Buzz");
            }
            else {
                output.push (count);
            }

            count++;
        }

        console.log (output);
    }

//bottles of beer while loop
function beer(count) {
    while (count >= 1) {
       console.log (count+" bottles of beer on the wall, "+count+" bottles of beer. Take one down, pass it around, "+(count-1)+"  bottles of beer on the wall.");

        count--;
    }
       console.log ("No more bottles of beer on the wall, no more bottles of beer. Go to the store, buy some more, 99 bottles of beer on the wall.");

}

beer(99);

//grammatically correct

function beer(count) {
    while (count > 0) {
       if (count > 1) {
        console.log (count+" bottles of beer on the wall, "+count+" bottles of beer. Take one down, pass it around, "+(count-1)+"  bottles of beer on the wall.");
    }
        else if (count = 1) {
        console.log ("1 bottle of beer on the wall, 1 bottle of beer. Take one down, pass it around, no more bottles of beer on the wall.");
    }
        count--;
    }
       console.log ("No more bottles of beer on the wall, no more bottles of beer. Go to the store, buy some more, 99 bottles of beer on the wall.");

}

beer(99);

// Angela's solution:
var numberOfBottles = 99
while (numberOfBottles >= 0) {
    var bottleWord = "bottles";
    if (numberOfBottles === 1) {
        bottleWord = "bottle";
    } 
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
    console.log(numberOfBottles + " " + bottleWord + " of beer,");
    console.log("Take one down, pass it around,");
	numberOfBottles--;
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall.");
}


function beer(count) {
    while (count > 0) {
        console.log(count+" bottles of beer on the wall, "+count+" bottles of beer!");
        console.log("You take one down, pass it around, "+(count-1)+" bottles of beer on the wall!")
        count--;
      }
    }
    
    beer(99)


function beer(count) {
    while (count > 0) {
        console.log(count+" bottles of beer on the wall, "+count+" bottles of beer!");
        console.log("You take one down, pass it around, "+(count-1)+" bottles of beer on the wall!")
        count--;
      }
      if (count === 0) {
        console.log("No more bottles of beer on the wall, No more bottles of beer!");
        console.log("We all go home and go to bed, no more bottles of beer on the wall!")
      }
    }
    
    beer(100)
    
    

// for loop - syntactic sweetener: makes code more efficient
//  Compare to while loop of fizzBuzz

var output = [];

function fizzBuzz () {

    for (var count = 1; count <= (n);  count++) {
    if (count % 3 === 0 && count % 5 === 0 ) {
            output.push ("FizzBuzz");
        } else  if (count % 3 === 0) {
            output.push ("Fizz");
        } else if (count % 5 === 0) {
            output.push ("Buzz");
        } else {
            output.push (count);
        }    
    }
    console.log (output);
}   

/* 
The Fibonacci Exercise
Fibonacci was an Italian mathematician who came up with the Fibonacci sequence:
0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
Where every number is the sum of the two previous ones.
e.g. 0, 1, 1, 2, 3, 5 comes from
0 + 1 = 1
1 + 1 = 2
1 + 2 = 3
2 + 3 = 5
etc.

Create a function where you can call it by writing the code:
fibonacciGenerator (n)
Where n is the number of items in the sequence.
So I should be able to call:
fibonacciGenerator(3) and get
[0,1,1]
as the output.

IMPORTANT: The solution checker is expecting an array as the correct output.
Do NOT change any of the existing code.
You do NOT need any alerts or prompts, the result should be returned from the function as an output.
The first two numbers in the sequence must be 0 and 1.
Also, if you decide to create a for loop, make sure you explicitly specify var i = 0 rather than simply writing i = 0 . This is a quirk of the testing suite.
e.g. for (var i = 0; i < 10; i ++)

HINT: Use this Repl.it Playground to test out your solution.
HINT: Use this flow chart to understand the logic if you get stuck.
*/

// NOT working!! 😡

function fibonacciGenerator(n) {
    var fibArray = []; 


for (var i = 0; i < n; i++) {
        var fibCalc = ((i) + (i-1));
    

    if (i === 0) {
        fibArray.push (0);
    } else if (i === 1) {
            fibArray.push (1);
    } else {
            fibArray.push (fibCalc);
    }
    
}

return fibArray;
}
fibonacciGenerator(10);

// returns (10) [0, 1, 3, 5, 7, 9, 11, 13, 15, 17]

// my next answer that works, but may not be correct:
function fibonacciGenerator(n) {
    var output = [];

    for (var i = 0; i < n; i++) {
        if (i < 1) {
            output.push (0);
        } else if (i === 1) {
            output.push (1);
        } else {
            output.push ((output[output.length-1]) + (output[output.length-2]));
        }
    }
    return output;
}
fibonacciGenerator(5);

//Angela's answer:
function fibonacciGenerator(n) {

    var output = [];
    if (n === 1) {
        output = [0];
    } else if (n === 2) {
        output = [0, 1];
    } else {
        output = [0, 1];
        
    for (var i = 2; i < n; i++) {
            output.push (((output[output.length-1]) + (output[output.length-2])));
        }
    }

    return output;
}
fibonacciGenerator(5);

//my recent attempt, still had to cheat a little 🤥

var output = [];

function fibonacciGenerator(n) {
  for(var i = 0; i < n; i++) {
      if(i < 1) {
      output.push(0);
      }else if(i === 1) {
      output.push(1);
      }else {
      output.push(output[output.length-2] + output[output.length-1]);
    }
  }
}

fibonacciGenerator(10)
console.log(output);

// <!-- My attempt at guessing a random number in 10 guesses or less

var randomNum = Math.ceil(Math.random()*100);

for (var index = 1; index < 11; index++) {
    var chooseNum = prompt ("Choose a random number between 1 and 100");    

    if (randomNum < chooseNum) {
        alert ("Incorrect, your guess is too high.");
    } 
    else if (randomNum > chooseNum) {
        alert ("Incorrect, your guess is too low.");
    }
    else {
        alert("Correct! The number is "+randomNum+"!")
    break;
    }
}

// <!-- Same but with number tracking. Still can't figure out cancel button tho...
var randomNum = Math.ceil(Math.random()*100);
var output = [];

for (var index = 1; index < 11; index++) {
var chooseNum = prompt ("Choose a random number between 1 and 100");   
    output.push (chooseNum);
 
    if (randomNum < chooseNum) {
        alert ("Incorrect, your guess is too high." + "\n" + (output));

    } else if (randomNum > chooseNum) {
        alert ("Incorrect, your guess is too low." + "\n" + (output));
    } else {
        alert("Correct! The number is "+randomNum+"!")
        break;
    }

}

// Mary's version of Simon


var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
 
// trigger next sequence
 
function nextSequence() {
  level++;
  userClickedPattern = [];
  $("h1").text("Level " + level);
  var randomNumber = Math.floor(Math.random() * 4);
  randomChosenColor = buttonColors[randomNumber];
 
  var audio = new Audio("sounds/"+randomChosenColor+".mp3");
  gamePattern.push(randomChosenColor);
 
  $("#" + randomChosenColor).fadeOut(50).fadeIn(50);
  audio.play();
}
 
// button clicks 
 
$(".btn").click(function(){
  var userChosenColor = this.id;
  animatePress(this);
  var buttonSound = new Audio("sounds/"+userChosenColor+".mp3");
  buttonSound.play();
  userClickedPattern.push(userChosenColor);
  checkAnswer(userClickedPattern.lastIndexOf(userChosenColor));
  console.log(this.id);
})
 
// button animations
 
function animatePress(currentColor) {
  $(currentColor).addClass("pressed");
 
  setTimeout(function(){
    $(currentColor).removeClass("pressed");
  },50);
}
 
// first time keydown
 
var pressed = false;
var level = 0;
 
$(document).keydown(function(){
  if(!pressed){
    nextSequence();
    pressed = true;
  }
  $("h2").text("");
})
 
// Check answer (The Real Boss fight)
 
function checkAnswer(currentLevel){
  // Check if the LAST button clicked is right
  if(userClickedPattern[currentLevel] == gamePattern[currentLevel]){
    // set a variable to count how many colors the user got right
    var count = 0;
    // loop through the two arrays, and compare if EACH ONE of the values is the same as the other
    for (var i = 0; i < gamePattern.length; i++) {
      if(gamePattern[i] === userClickedPattern[i]){
        // if the two values match, count + 1
        count++;
      }
    }
    // ONLY if the count is the same number as gamePattern length,
    // (meaning each one of the colors was right) then it's success
    if(count === gamePattern.length){
      console.log("success");
      setTimeout(function(){
          nextSequence();
        }, 1000);
    }
    // otherwise, it's wrong and trigger Game Over
  } else {
    console.log("wrong");
      var wrongAudio = new Audio("sounds/wrong.mp3");
      wrongAudio.play();
      $("body").addClass("game-over");
      setTimeout(function(){
        $("body").removeClass("game-over");
      },200);
      $("h1").text("Game Over");
      $("h2").text("(Press Any Key to Restart)")
      startOver();
  }
}
 
// Reset every variable
 
function startOver(){
  level = 0;
  gamePattern = [];
  pressed = false;
  
}

  