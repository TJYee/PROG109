window.onload = function() {
	var evaluation;

	var age = prompt('Enter you age');

	if (isNaN(age)) {
		evaluation = "You did not enter an age";
	}else if (age >= 65) {
		evaluation = "You are old enough to retire, vote, and drive.";
	} else if (age >= 18) {
		evaluation = "You are old enough to vote and drive.";
	} else if (age >= 16) {
		evaluation = "You are old enough to drive.";
	} else {
		evaluation = "You are not enough to do anything.";
	}

	document.getElementById('message').innerHTML = evaluation;
}