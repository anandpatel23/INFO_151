function changeBackground(){
	var num = Math.random();

	if((num > 0) && (num < (0.333333333))) {
		document.body.style.backgroundColor = "red";
	}
	else if ((num > (0.333333333)) && (num < (.6666666666667))){
		document.body.style.backgroundColor = "blue";
	}
	else {
		document.body.style.backgroundColor = "green";
	}
}