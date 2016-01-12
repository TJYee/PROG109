/* 
Taylor Yee
Completed: 5/25/15
 */
window.onload = function()
{
	// Declare control elements
	var header = document.getElementById('header');
	var output = document.getElementById('out');
	
	// Declare local variables
	var attempt;
	var answer;
	var guess;
	var currentText;
	var quit;
	var play;
	
	// Generate new answer number
	newNumber = function() {
		var rnd = Math.floor( Math.random() * ( 50 - 1 + 1 ) ) + 1;
		return rnd;
	};
	
	// Play game until user cancels
	playGame = function() {
		do {
			reset();
			playRound();
			
			play = confirm("Play another round?");
		} while(play);
	};
	
	// Reset output, attempt count, and set new answer
	reset = function() {
		header.innerHTML = "I'm going to guess a number between 1 and 50 inclusive.<br>You have 6 tries.<br><hr>";
		output.innerHTML = "";
		attempt = 6;
		answer = newNumber();
	};
	
	// Plays round until no attempts or answer is found
	playRound = function() {
		currentText = output.innerHTML;
		do {
			// Allow user to quit
			quit = confirm("Quit this round?");
			if(quit) {
				output.innerHTML = currentText + "The answer was " + answer + ", quitter.";
			} else {
				guess = parseInt(prompt("What is your guess?"));
				attempt--;
				compare(guess, answer);
			}
		} while((attempt > 0) && (guess != answer) && (!quit));
		
		if((guess != answer) && (!quit)) {
			output.innerHTML = currentText + "The answer was " + answer + "! Too bad...";
		}
	};
	
	// Validates guess and compares guess to answer
	compare = function(guess, answer) {
		currentText = output.innerHTML;
		// Specifically validate if guess is a number in the range of valid numbers
		if((isNaN(guess)) || (guess < 1) || (guess > 50)) {
			output.innerHTML = currentText + "Your guess should be a number 1 through 50. " + attempt + " attempts left!<br>";
		}else if(guess > answer) {
			output.innerHTML = currentText + guess +" is too high. " + attempt + " attempts left!<br>";
		} else if(guess < answer) {
			output.innerHTML = currentText + guess +" is too low. " + attempt + " attempts left!<br>";
		} else {
			output.innerHTML = currentText + "You did it! Congratulations!";
		}
	};
	
	// Executed Javascript
	playGame();
};