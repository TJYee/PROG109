/* 
Taylor Yee
Completed: 6/4/15
 */
window.onload = function()
{
	// Declare control elements
	var startBtn = document.getElementById('startBtn');
	var restart = document.getElementById('restart');
	var input = document.getElementById('inputGuess');
	var guessBtn = document.getElementById('guessBtn');
	var counter = document.getElementById('counter');
	var output = document.getElementById('output');
	var results = document.getElementById('results');
	
	// Declare local variables
	var attempt;
	var attemptCounter;
	var answer;
	var guess;
	
	// Generate new answer number
	var newNumber = function() {
		var rnd = Math.floor( Math.random() * ( 50 - 1 + 1 ) ) + 1;
		return rnd;
	};
	
	// Display results of game and disable user input
	var endGame = function() {
		guessBtn.disabled = true;
		input.disabled = true;
		if(guess === answer) {
			results.innerHTML = "Congratulations! " + guess + " was the correct answer!";
		} else {
			results.innerHTML = "I'm sorry, the answer was " + answer +"...<br />Now what to do with you...";
		}
	};
	
	// Validate guess and compares guess to answer
	var compare = function(guess, answer) {
		// Specifically validate if guess is a number in the range of valid numbers
		if((guess < 1) || (guess > 50)) {
			output.innerHTML += "Your guess should be a number 1 through 50. " + "That was attempt #<span class='emphasis'>" + attemptCounter + "</span>!<br />";
		}else if(guess > answer) {
			output.innerHTML += guess +" is too high. " + "That was attempt #<span class='emphasis'>" + attemptCounter + "</span>!<br />";
		} else if(guess < answer) {
			output.innerHTML += guess +" is too low. " + "That was attempt #<span class='emphasis'>" + attemptCounter + "</span>!<br />";
		// End game if answer is found
		} else {
			endGame();
		}
		// End game if number of attempts reaches 0
		if(attempt === 0){	
			endGame();
		}
	};
	
	// Display game page and starts new game
	// Game plays until attempts reach 0 or answer is found
	var startGameHandler = function() {
		document.getElementById("startScreen").style.display = "none";
		document.getElementById("gameScreen").style.display = "block";
		attempt = 6;
		attemptCounter = 0;
		counter.innerHTML = attempt;
		answer = newNumber();
	};
	
	// Evaluate submitted guess attempt and status of game
	var submitHandler = function() {
		guess = parseInt(input.value);
		// Clear submission box
		input.value = "";
		if(isNaN(guess)) {
			output.innerHTML += "Please Enter a Number!<br />";
		} else {
			attemptCounter++;
			attempt--;
			counter.innerHTML = attempt;
			compare(guess, answer);
		}
	};
	
	// Reload page
	var restartHandler = function() {
		location.reload(true);
	};
	
	// Declare Click Event Listeners
	startBtn.addEventListener("click", startGameHandler, false);
	guessBtn.addEventListener("click", submitHandler, false);
	restart.addEventListener("click", restartHandler, false);
};