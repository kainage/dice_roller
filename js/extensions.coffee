@Array::sum = ->
  a = this[0]
  i = 1

  while i < @length
    a = a + this[i]
    i++
  a


unless @Array::indexOf
  @Array::indexOf = (needle) ->
    i = 0

    while i < @length
      return i  if this[i] is needle
      i++
    -1