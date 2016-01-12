window.onload = function() {
	var message = document.getElementById('text');
	var btn = document.getElementById('btn');
	var textList = [
		"On my way there.",
		"Did you need anything from the store?",
		"Wanna play SF?",
		"Wanna play Anime?",
		"New episode is out.",
		"Bring the game when you come over.",
		"Your match is up next.",
		"Want anything to drink?",
		"What's the address?",
		"Should I bring anything?",
		"You free today?",
		"That restaurant was terrible",
		"New patch is out.",
		"I have class tomorrow.",
		"I'll see you in 30."
	];
	
	var randomIndex = function(index) {
		var rand = Math.floor(Math.random() * (index));
		return rand;
	};
	
	function clickHandler() {
		
		message.innerHTML = textList[randomIndex(textList.length)];
	}
	
	btn.onclick = clickHandler;
};