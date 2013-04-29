app.controller('RollerCtrl', function ($scope, Dice) {
	$scope.dice = Dice;
	
	$scope.rolls = [];
	
	$scope.rollDice = function (sides, amount) {
		var rolled_dice = randy.multiBetween(sides, amount);
		var new_roll = new dieRoll(rolled_dice, sides);
		
		$scope.rolls.push(new_roll);
	}
})