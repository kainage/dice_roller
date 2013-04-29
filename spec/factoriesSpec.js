describe('Dice', function() {
	beforeEach(module('rollerApp'));

	it('should have 8 .types', inject(function(Dice) {
		expect(Dice.types.length).toEqual(8);
	}));
});
