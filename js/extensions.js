Array.prototype.sum = function() {
	var a = this[0];
	for (var i = 1; i < this.length; i++) {
		a = a + this[i];
	}
	return a;
};