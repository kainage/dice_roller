Array.prototype.sum = function() {
	var a = this[0];
	for (var i = 1; i < this.length; i++) {
		a = a + this[i];
	}
	return a;
};

if (!Array.prototype.indexOf) {
	Array.prototype.indexOf = function(needle) {
		for (var i = 0; i < this.length; i++) {
			if (this[i] === needle) {
				return i;
			}
		}
		return -1;
	};
}