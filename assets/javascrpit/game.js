
    

// Creates an array that lists out all of the options (Rock, Paper, or Scissors).
    
var computerChoices = ["a" , "b" , "c" , "d" , "e" , "f" , "g" ,"h" , "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    
var guessCount = [];

// Creating variables to hold the number of wins, losses, and ties. They start at 0.
    
var wins = 0;
    var losses = 0;
      


// Create variables that hold references to the places in the HTML where we want to display things.
    
var directionsText = document.getElementById("directions-text");
    
var userChoiceText = document.getElementById("userchoice-text");
    
var computerChoiceText = document.getElementById("computerchoice-text");
    
var winsText = document.getElementById("wins-text");
    
var lossesText = document.getElementById("losses-text");
  
var guessLog = document.getElementById("guess-log");
 
var guessesLeft = document.getElementById("guesses-left");
 
  

// This function is run whenever the user presses a key.
    
document.onkeyup = function(event) {

      

// Determines which key was pressed.
      
var userGuess = event.key;

      

// Randomly chooses a choice from the options array. This is the Computer's guess.
      
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

      

// Reworked our code from last step to use "else if" instead of lots of if statements.

      
console.log(userGuess)

// This logic determines the outcome of the game (win/loss/tie), and increments the appropriate number
      
if (userGuess === computerGuess) {
wins++;
guessCount = [];
//console.log(wins);
} else if (!/^[a-zA-Z]*$/g.test(userGuess) || userGuess == "Shift" || userGuess == "Meta"  || userGuess == "Control" || userGuess == "Enter" || userGuess == "Alt"  || userGuess == "CapsLock"  || userGuess == "ContextMenu") {
alert("A letter, that is not");
} else if (guessCount.length < 9){

guessCount.push(userGuess);
} else {

losses++;
guessCount = [];


}





    
   
      

// Hide the directions
        
directionsText.textContent = "";

        

// Display the user and computer guesses, and wins/losses/ties.
        
userChoiceText.textContent = "Chose, you did: " + userGuess.toUpperCase();
        
computerChoiceText.textContent = "Thinking of, I was: " + computerGuess.toUpperCase();
        
winsText.textContent = "Do: " + wins;
        
lossesText.textContent = "Not do: " + losses;
 
guessLog.textContent = "There is no try: " + guessCount;
 
guessesLeft.textContent = "Guesses left, you have: " + (10 - guessCount.length);

}
;    


  



