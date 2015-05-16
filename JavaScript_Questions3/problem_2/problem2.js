// user name
var name = prompt("Please enter your name: ", "Enter Here");

// create date hours
var d = new Date();
var h = d.getHours();

// logic for saying
if ((h < 12)){
	document.write("Good Morning " + name + "!");
}
else if ((h > 12) && (h < 18)){
	document.write("Good Afternoon " + name + "!");
}
else if ((h > 18) && (h < 24)){
	document.write("Good Night " + name + "!");
}