/*
	Taylor Yee
*/

var window;
window.onload = function() {
	"use strict";
	
	// Declare control elements
	var startButton = document.getElementById("startBtn");
	var status = document.getElementById("roundStatus");
	var playerMove = document.getElementById("playerMove");
	var comMove = document.getElementById("comMove");
	var outcome = document.getElementById("outcome");
	var tally = document.getElementById("tally");
	var endButton = document.getElementById("endBtn");
	var results = document.getElementById("results");
	var resultImage = document.getElementById("resultImage");
	var result = document.getElementById("resultMessage");
	var restartButton = document.getElementById("restartBtn");
	
	// Declare variables
	var round;
	var playerChoice;
	var playerSelection;
	var output;
	var playerScore;
	var tieScore;
	
	// Declare result images
	var win = new Image();
	win.src = "images/win.png";
	var lose = new Image();
	lose.src = "images/lose.jpg";
	var tie = new Image();
	tie.src = "images/tie.jpg";
	
	// Declare image path lists
	var playerIdleList = ["images/player_idle_rock.png", "images/player_idle_paper.png", "images/player_idle_scissors.png"];
	var playerHoverList = ["images/player_hover_rock.png", "images/player_hover_paper.png", "images/player_hover_scissors.png"];
	var playerSelectList = ["images/player_select_rock.png", "images/player_select_paper.png", "images/player_select_scissors.png"];
	var comIdleList = ["images/com_idle_rock.png", "images/com_idle_paper.png", "images/com_idle_scissors.png"];
	var comSelectList =["images/com_select_rock.png", "images/com_select_paper.png", "images/com_select_scissors.png"];
	
	// Declare page image lists
	var playerList = document.getElementsByClassName("player");
	var comList = document.getElementsByClassName("computer");
	
	// Declare computer object
	var computer = {
		score: 0,
		choice: 0,
		selection: "",
		newChoice: function() {
			return Math.floor(Math.random() * 3);
		}
	};
	
	// Start game and show game screen
	var startHandler = function() {
		document.getElementById("startScreen").style.display = "none";
		document.getElementById("gameScreen").style.display = "block";
		document.getElementById("score").style.display = "block";
		round = 0;
		playerScore = 0;
		computer.score = 0;
		tieScore = 0;
	};
	
	// Shows score screen elements
	var makeVisible = function() {
		document.getElementById("score").style.visibility = "visible";
	};
	
	// Plays round of game
	var playGame = function() {
		computerMove();
		compare();
	};
	
	// Computer makes a move
	var computerMove = function() {
		// Reset computer image to idle
		comList[computer.choice].src = comIdleList[computer.choice];
		// Computer makes new move
		computer.choice = computer.newChoice();
		comList[computer.choice].src = comSelectList[computer.choice];
	};
	
	// Compares player and computer choices
	var compare = function() {
		playerSelection = getSelection(playerChoice);
		computer.selection = getSelection(computer.choice);
		if(playerChoice === computer.choice) {
			output = "You picked the same as the computer, you Tie!";
			tieScore += 1;
		} else if(playerChoice === 0) {
			if(computer.choice === 1) {
				output = "Rock gets covered by Paper, you Lose.";
				computer.score += 1;
			} else {
				output = "Rock smashes Scissors, you Win.";
				playerScore += 1;
			}
		} else if(playerChoice === 1) {
			if(computer.choice === 0) {
				output = "Paper covers Rock, you Win";
				playerScore += 1;
			} else {
				output = "Paper gets cut by Scissors, you Lose";
				computer.score += 1;
			}
		} else {
			if(computer.choice === 0) {
				output = "Scissors gets smashed by Rock, you Lose";
				computer.score += 1;
			} else {
				output = "Scissors cuts Paper, you Win";
				playerScore += 1;
			}
		}
		updateScore();
	};
	
	// Defines selection based off choice
	var getSelection = function(choice) {
		if(choice === 0) {
			return "Rock";
		} else if(choice === 1) {
			return"Paper";
		} else {
			return "Scissors";
		}
	};
	
	// Updates score and shows results of round
	var updateScore = function() {
		status.innerHTML = "Results of Round " + round + ":";
		playerMove.innerHTML = playerSelection;
		comMove.innerHTML = computer.selection;
		outcome.innerHTML = output;
		tally.innerHTML = "Player: " + playerScore + " Computer: " + computer.score + " Tie: " + tieScore;
		makeVisible();
	};
	
	// Highlights player image on hover
	var mouseoverHandler = function(eventObj) {
		var pic = eventObj.target;
		var j = pic.index;
		pic.src = playerHoverList[j];
	};
	
	// Reverts player image to idle
	var mouseoutHandler = function(eventObj) {
		var pic = eventObj.target;
		var j = pic.index;
		pic.src = playerIdleList[j];
	};
	
	// Highlights player selection image and plays game round
	var clickHandler = function(eventObj) {
		var pic = eventObj.target;
		playerChoice = pic.index;
		pic.src = playerSelectList[playerChoice];
		round += 1;
		// Computer "thinks" before choosing and progressing game
		setTimeout(playGame, 2000);
		// Ends game when round count hits 10
		if(round >= 10) {
			endGame();
		}
	};
	
	// Disables game function and displays end screen button
	var endGame = function() {
		// Disables player picture interaction
		var j;
		var targetDisable;
		for(j = 0; j < playerList.length; j += 1) {
			targetDisable = playerList[j];
			targetDisable.removeEventListener("mouseover", mouseoverHandler);
			targetDisable.removeEventListener("mouseout", mouseoutHandler);
			targetDisable.removeEventListener("click", clickHandler);
		}
		endButton.style.visibility = "visible";
		results.innerHTML = "Player: " + playerScore + " Computer: " + computer.score + " Tie: " + tieScore;
		
		if(playerScore > computer.score) {
			resultImage.src = win.src;
			result.innerHTML = "You win! Enjoy your brief moment of peace.";
		} else if(playerScore < computer.score) {
			resultImage.src = lose.src;
			result.innerHTML = "You Lose. Punishment will be delivered shortly.";
		} else {
			resultImage.src = tie.src;
			result.innerHTML = "Tie game! You're lucky.";
		}
	};
	
	// Proceeds to end screen
	var endScreenHandler = function() {
		document.getElementById("gameScreen").style.display = "none";
		document.getElementById("score").style.display = "none";
		document.getElementById("endScreen").style.display = "block";
	};
	
	// Restart page
	var restartHandler = function() {
		location.reload(true);
	};
	
	// Set Event Listeners for player images
	var i;
	var targetImage;
	for(i = 0; i < playerList.length; i += 1) {
		targetImage = playerList[i];
		targetImage.index = i;
		targetImage.addEventListener("mouseover", mouseoverHandler, false);
		targetImage.addEventListener("mouseout", mouseoutHandler, false);
		targetImage.addEventListener("click", clickHandler, false);
		
		
	}
	
	// Declare button Event Listeners
	startButton.addEventListener("click", startHandler, false);
	endButton.addEventListener("click", endScreenHandler, false);
	restartButton.addEventListener("click", restartHandler, false);
};