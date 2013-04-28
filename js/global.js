function getCurrentDateTime() {
	var currentTime = new Date()
	var month = currentTime.getMonth() + 1
	var day = currentTime.getDate()
	var year = currentTime.getFullYear()
	var hours = currentTime.getHours()
	var minutes = currentTime.getMinutes()
	var seconds = currentTime.getSeconds()
	var period
		
	if (hours > 11) {
		period = "PM"
	} else {
		period = "AM"
	}
	
	if (hours > 12) {
		hours = hours - 12
	}
	
	if (minutes < 10) {
		minutes = "0" + minutes
	}
	
	if (seconds < 10) {
		seconds = "0" + seconds
	}
	
	return hours + ':' + minutes + ':' + seconds + ' ' + period + ', ' + month + "/" + day + "/" + year
}

var Randy = function() {};

Randy.prototype.between = function(ceil) {
	return Math.floor((Math.random()*ceil)+1); 
}

Randy.prototype.multiBetween = function(ceil, amount) {
	var nums = [];
	for (var i = 0; i < amount; i++) {
		nums.push(this.between(ceil));
	}
	
	return nums;
}