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