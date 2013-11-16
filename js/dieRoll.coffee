@dieRoll = (rolled_dice, sides) ->
  @dice   = rolled_dice.join(", ")
  @total  = rolled_dice.sum()
  @sides  = sides
  @amount = rolled_dice.length
  @time   = getCurrentDateTime()