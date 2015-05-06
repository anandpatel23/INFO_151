// ask for ints
var firstInt = prompt("First Number: ", "Enter Here");
var secondInt = prompt("Second Number: ", "Enter Here");

// string to ints
var firstInt = parseInt(firstInt);
var secondInt = parseInt(secondInt);

// show input
document.writeln("First Integer is " + firstInt);
document.write("<br />");
document.writeln("Second Integer is " + secondInt);
document.write("<br />");

// logic for modulus
if (firstInt % secondInt == 0){
	document.writeln("First Integer is a multiple of the second integer.");
	document.write("<br />");
}
else {
	document.writeln("First Integer is not a multiple of the second integer");
	document.write("<br />");
}