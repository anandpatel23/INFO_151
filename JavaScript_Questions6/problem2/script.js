function randomNumberTable(){
	// create array with random numbers
	var nums = new Array();
	for(var i = 0; i < 10; i++){
		nums[i] = randomNumber();
	}

	// create header row
	document.writeln("<table border = \"1\">");
	document.writeln("<th>Index</th>");
	document.writeln("<th>Number</th>");
	
	// if duplicate, print in red, else, black
	for(var j = 0; j <= nums.length-1; j++){
		var isExist = numberExists(nums[j], nums, j);	
		if (isExist){
			document.writeln("<tr>");
			document.writeln("<td>" + j + "</td>");
			document.writeln("<td><font color=\"red\">" + nums[j] + "</font></td>");
			document.writeln("</tr>");
		}
		else{
			document.writeln("<tr>");
			document.writeln("<td>" + j + "</td>");
			document.writeln("<td>" + nums[j] + "</td>");
			document.writeln("</tr>");
		}
	}
}

// generate a random number between 1 and 20
function randomNumber(){
	var randomNum = Math.floor(Math.random()*20) + 1;
	return randomNum;
}

// checking if the number exists 
function numberExists(num, myArray, myIndex){
	for(var k = 0; k < myIndex; k++){
		if(num == myArray[k])
			return true;
	}
			return false;
}