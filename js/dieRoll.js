function dieRoll(rolled_dice, sides) {
	this.dice = rolled_dice.join(', '),
	this.total = rolled_dice.sum(),
	this.sides = sides,
	this.amount = rolled_dice.length,
	this.time = getCurrentDateTime()
}
