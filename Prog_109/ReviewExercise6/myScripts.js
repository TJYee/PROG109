window.onload = function()
{
	var dealerHand;
	var playerHand;
	var card;
	var cardValue;
	var score = document.getElementById('score');
	var result = document.getElementById('result');
	var hit;
	var ace;
	var play;
	
	var newGame = function()
	{
		playerHand = 0;
		card = 0;
		cardValue = 0;
		score.innerHTML = '';
		result.innerHTML = '';
		hit = true;
		dealerHand = dealerDraw();
	};
	
	var dealerDraw = function()
	{
		var rnd = Math.floor( Math.random() * ( 21 - 17 + 1 ) ) + 17;
		return rnd;
	};
	
	var newCard = function()
	{
		var rnd = Math.floor( Math.random() * ( 13 - 1 + 1 ) ) + 1;
		return rnd;
	};
	
	do
	{
		newGame();
		
		do
		{
			card = newCard();
			
			window.alert( "You drew " + card );
			
			cardValue = card;
			
			if( card > 10 )
			{
				cardValue = 10;
			}
			if( ( card == 1 ) && ( playerHand < 11 ) )
			{
				ace = confirm( "Use 1 as 11?" );
				if( ace )
				{
					cardValue = 11;
				}
			}
			
			playerHand = playerHand + cardValue;
			
			score.innerHTML = "Your score is " + playerHand;
			
			if( playerHand < 22 )
			{
				hit = confirm( "Hit?" );
			}
		} while( ( hit ) && ( playerHand < 22 ) );
		
		if( playerHand > 21 )
		{
			result.innerHTML = "You went bust!";
		} else if (playerHand < dealerHand)
		{
			result.innerHTML = "Dealer score is " + dealerHand + ". Dealer wins!";
		} else if (playerHand == dealerHand)
		{
			result.innerHTML = "Dealer score is " + dealerHand + ". It's a draw.";
		} else
		{
			result.innerHTML = "Dealer score is " + dealerHand + ". You win!";
		}
		
		play = confirm( "Do you want to continue playing?" );
	} while( play );
};