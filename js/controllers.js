app.controller('RollerCtrl', function ($scope, $filter, Dice) {
	$scope.dice = Dice;
	
	$scope.rolls = [];
	
	var ensureNumerical = $filter('ensureNumerical');
	var ensureInList = $filter('ensureInList');
	
	$scope.rollDice = function (sides, amount) {
		var filteredSides = ensureNumerical(sides);
		var doubleFilteredSides = ensureInList(filteredSides);
		var filteredAmount = ensureNumerical(amount);
		
		var rolled_dice = randy.multiBetween(doubleFilteredSides, filteredAmount);
		var new_roll = new dieRoll(rolled_dice, doubleFilteredSides);
		
		$scope.rolls.push(new_roll);
	}
	
	$scope.clearRolls = function() {
		$scope.rolls = [];
	}
})