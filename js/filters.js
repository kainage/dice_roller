app.filter('ensureNumerical', function() {
	return function(text) {
		var stringified = String(text);
		if(stringified.match(/^\d+$/)) {
			return text
		} else {
			return 0
		}
	}
})

app.filter('ensureInList', function(Dice) {
	return function(text) {
		var list = Dice.types;
		var mapped = []
		
		for (var i = 0; i < list.length; i++) {
			mapped.push(list[i].sides)
		}
		
		if(mapped.indexOf(text) > -1) {
			return text
		} else {
			return mapped[0]
		}
	}
})