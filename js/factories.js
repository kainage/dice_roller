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