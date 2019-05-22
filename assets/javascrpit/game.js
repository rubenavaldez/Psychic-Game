


// Creates an array that lists out the alphabaet

var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


var guessCount = [];

// Creating variables to hold the number of wins and losses They start at 0.

var wins = 0;
var losses = 0;



// Create variables that hold references to the places in the HTML where we want to display things.

var directionsText = document.getElementById("directions-text");

var successText = document.getElementById("success-text");

var computerChoiceText = document.getElementById("computerchoice-text");

var winsText = document.getElementById("wins-text");

var lossesText = document.getElementById("losses-text");

var guessLog = document.getElementById("guess-log");

var guessesLeft = document.getElementById("guesses-left");

var computerGuess = "";


computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
//console.log(computerGuess)


// This function is run whenever the user presses a key.

document.onkeyup = function (event) {

// Randomly chooses a choice from the options array. This is the Computer's guess.

	

	

    // Determines which key was pressed.

    var userGuess = event.key;
    


    

    


    


    //console.log(userGuess)

  

    if (userGuess === computerGuess) {
        wins++;
        guessCount = [];
        computerChoiceText.textContent = "Thinking of, I was: " + computerGuess.toUpperCase();
	console.log(computerGuess);
	computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
	guessLog.textContent = "";
	successText.textContent = "A fine jedi, you are becoming."
	//console.log(computerGuess);
    

	} else if (!(event.keyCode >= 65 && event.keyCode <= 90))   {  //!/^[]*$/g.test(userGuess)|| userGuess == "Shift" || userGuess == "Meta" || userGuess == "Control" || userGuess == "Enter" || userGuess == "Alt" || userGuess == "CapsLock" || userGuess == "ContextMenu")
        alert("A letter, that is not");
    

	} else if (guessCount.length < 9) {

        guessCount.push(userGuess);
    	computerChoiceText.textContent = "";
	guessLog.textContent = "Chose, you did: " + guessCount;	
	successText.textContent = "";
	//console.log(computerGuess)
	
	} else {

        losses++;
        guessCount = [];
	computerChoiceText.textContent = "Thinking of, I was: " + computerGuess.toUpperCase();
	computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
	guessLog.textContent = "";
	successText.textContent = "Concentrate, you must." ;
    }









    // Hide the directions

    directionsText.textContent = "";



    // Display results to DOM

    //userChoiceText.textContent = "Chose, you did: " + userGuess.toUpperCase();

    

    winsText.textContent = "Do: " + wins;

    lossesText.textContent = "Not do: " + losses;

    

    guessesLeft.textContent = "There is " + (10 - guessCount.length) + " tries";



}
    ;






