// manipuating strings in the DOM
function stringAndDom(){
	var fullName = prompt("Enter your full Name separated by space");
	var desc = prompt("Enter a description");
	var integerFontSize = prompt("Enter an int for font size");
	integerFontSize = integerFontSize + "px";

	// separate first and last name
	fullName = fullName.split(" ");
	var firstName = fullName[0];
	var lastName = fullName[1];

	// change 1st h2 element to first name
	document.getElementById("firstNameID").innerHTML = firstName;

	// change 2nd h2 element to last name
	document.getElementById("lastNameID").innerHTML = lastName;

	// change font size of p tag
	document.getElementById("descID").style.fontSize = integerFontSize;
}
