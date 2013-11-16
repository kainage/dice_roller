@getCurrentDateTime = ->
  currentTime = new Date()
  month   = currentTime.getMonth() + 1
  day     = currentTime.getDate()
  year    = currentTime.getFullYear()
  hours   = currentTime.getHours()
  minutes = currentTime.getMinutes()
  seconds = currentTime.getSeconds()
  period  = undefined

  if hours > 11
    period = "PM"
  else
    period = "AM"

  hours   = hours - 12  if hours > 12
  minutes = "0" + minutes  if minutes < 10
  seconds = "0" + seconds  if seconds < 10

  hours + ":" + minutes + ":" + seconds + " " + period + ", " + month + "/" + day + "/" + year