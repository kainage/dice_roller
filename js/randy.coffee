@Randy = ->

@Randy::between = (ceil) ->
  Math.floor (Math.random() * ceil) + 1

@Randy::multiBetween = (ceil, amount) ->
  nums = []
  i = 0

  while i < amount
    nums.push @between(ceil)
    i++
  nums