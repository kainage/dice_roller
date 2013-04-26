function getCurrentDateTime() {
	var currentTime = new Date()
	var month = currentTime.getMonth() + 1
	var day = currentTime.getDate()
	var year = currentTime.getFullYear()
	var hours = currentTime.getHours()
	var minutes = currentTime.getMinutes()
	var seconds = currentTime.getSeconds()
	var suffix
		
	if (hours > 11) {
		suffix = "PM"
	} else {
		suffix = "AM"
	}
	
	if (hours > 12) {
		hours = hours - 12
	}
	
	if (minutes < 10) {
		minutes = "0" + minutes
	}
	
	return hours + ':' + minutes + ':' + seconds + ' ' + suffix + ', ' + month + "/" + day + "/" + year
}

function randomBetween(ceil) {
	return Math.floor((Math.random()*ceil)+1); 
}

function multiRandomBetween(ceil, amount) {
	var rolls = [];
	for (var i = 0; i < amount; i++) {
		rolls.push(randomBetween(ceil));
	}
	
	return rolls;
}