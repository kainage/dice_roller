Array.prototype.sum = function() {
	var a = this[0];
	for (var i = 1; i < this.length; i++) {
		a = a + this[i];
	}
	return a;
};

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

function pluralize(amount, singular, plural) {
	if ( amount == 1 ) {
		return singular;
	} else {
		return plural;
	}
}

var app = angular.module('rollerApp', [])

app.factory('Dice', function() {
	var Dice = {};
	Dice.types = [
		{ sides: 2, label: "D2" },
		{ sides: 4, label: "D4" },
		{ sides: 6, label: "D6" },
		{ sides: 8, label: "D8" },
		{ sides: 10, label: "D10" },
		{ sides: 12, label: "D12" },
		{ sides: 20, label: "D20" },
		{ sides: 100, label: "D100" }
	];
	return Dice
})

app.directive("mouseup", function () {
	return function (scope, element, attrs) {
		element.bind("mouseup", function () {
			scope.$apply(attrs.mouseup)
		})
	}
})

app.controller('AppCtrl', function ($scope, Dice) {
	$scope.dice = Dice;
	
	$scope.rolls = []
	
	$scope.rollDice = function (sides, amount) {
		var rolls = multiRandomBetween(sides, amount)
		$scope.rolls.push({
			dice: rolls,
			total: rolls.sum(),
			sides: sides,
			amount: amount,
			time: getCurrentDateTime()
		});
	}
})
