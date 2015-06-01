function guessingGame(){

	// computer generated number from 0 to 10
	var num = Math.floor(Math.random() * 10);

	// parse user's response
	var guess = window.prompt("Enter a number between 1 and 10");
	guess = parseInt(guess);

	// set limit 
	guessNum = 0;
	limit = 5;

	// process for guiding user to answer
	while (guessNum < limit){
		if (num == guess){
			alert("Congrats " + num + " is the correct number!");
			guessNum = 6;
		}
		else if (guess < num){
			guess = window.prompt("Higher - Try again");
			guess = parseInt(guess);
			guessNum++;
		}
		else if (guess > num){
			guess = window.prompt("Lower - Try again");
			guess = parseInt(guess);
			guessNum++;
		}
	}

	// if succeeded, limit - end program
	if (guessNum == limit){
		alert("No soup for you!");
	}


}	
