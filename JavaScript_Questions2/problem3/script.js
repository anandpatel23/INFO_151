// timer for seconds
function startTimer(){
	window.setInterval("showTime()", 1000);
}

// print time on screen
function showTime(){
	var mydate = new Date();

	var myhour = mydate.getHours();
	var mymin = mydate.getMinutes();
	var mysec = mydate.getSeconds();

	document.body.innerHTML = myhour + ":" + mymin + ":" + mysec;
}
