function drivingCalculator(){
	// initialize vars
	var totalMi = 0;
	var totalGa = 0;

	var mi = window.prompt("Miles Driven: ");
	var ga = window.prompt("Gallons Used: ");
	mi = parseInt(mi);
	ga = parseInt(ga);

	while((mi >= 0) || (ga >= 0)){
		
		// tally up
		totalMi = parseInt(totalMi);
		totalGa = parseInt(totalGa);

		var mpg = (mi/ga).toFixed(2);
		

		// print that too
		document.write("Current miles: " + mi + "<br />");
		document.write("Current gallons: " + ga + "<br />");
		document.write("MPG: " + mpg+ "<br />");
		
		// let's average this out for total, brah
		totalMi = totalMi + mi;
		totalGa = totalGa + ga;
		var totalMPG = (totalMi/totalGa).toFixed(2);
		
		// and you're done
		document.writeln("Total miles: " + totalMi + "<br />");
		document.write("Total gallons: " + totalGa + "<br />");
		document.write("Total MPG: " + totalMPG + "<br />");
		document.write("______________________________<br />");

		// prompt user for miles and gallons
		mi = window.prompt("Miles Driven: ");
		ga = window.prompt("Gallons used: "); 

	}
}