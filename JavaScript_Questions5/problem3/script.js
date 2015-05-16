function drawDiamond(){

	for(var i = 1; i < 10; i += 2){
		for(var j = 0; j <= 8 - i; j++)
			document.write("&nbsp;");

		for(var j = 0; j < i; j++)
			document.write("*");

		document.write("<br />");
	}	

	for(var i = 7; i > 0; i -= 2){
		for(var j = 0; j < 9-i; j++)
			document.write("&nbsp;");

		for(var j = 0; j < i; j++)
			document.write("*");

		document.write("<br />");
	}
}