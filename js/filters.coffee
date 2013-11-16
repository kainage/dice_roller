@app.filter "ensureNumerical", ->
  (text) ->
    stringified = String(text)

    if stringified.match(/^\d+$/)
      text
    else
      0


@app.filter "ensureInList", (Dice) ->
  (text) ->
    list = Dice.types
    mapped = []
    i = 0

    while i < list.length
      mapped.push list[i].sides
      i++
    if mapped.indexOf(text) > -1
      text
    else
      mapped[0]
