@app.controller "RollerCtrl", ($scope, $filter, Dice) ->
  $scope.dice = Dice
  $scope.rolls = []
  ensureNumerical = $filter("ensureNumerical")
  ensureInList = $filter("ensureInList")
  $scope.rollDice = (sides, amount) ->
    filteredSides = ensureNumerical(sides)
    doubleFilteredSides = ensureInList(filteredSides)
    filteredAmount = ensureNumerical(amount)
    rolled_dice = randy.multiBetween(doubleFilteredSides, filteredAmount)
    new_roll = new dieRoll(rolled_dice, doubleFilteredSides)
    $scope.rolls.push new_roll

  $scope.clearRolls = ->
    $scope.rolls = []
