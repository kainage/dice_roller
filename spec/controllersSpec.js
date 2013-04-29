describe('RollerCtrl', function() {
	var ctrl, scope
	
	beforeEach(module('rollerApp'));
	
	beforeEach(inject(function($rootScope, $controller) {
		scope = $rootScope.$new();
		ctrl = $controller('RollerCtrl', {$scope: scope});
	}));
	
	it("should have dice", function() {
		expect(scope.dice.types.length).toEqual(8);
	})
	
	it("should have empty rolls", function() {
		expect(scope.rolls.length).toEqual(0);
	})
	
	it("should add a dice roll to the rolls array when rollDice() is called", function() {
		scope.rollDice(2, 2);
		
		expect(scope.rolls.length).toEqual(1);
	})
});