@app.directive "amountfield", ->
  errorMessage = angular.element("<div class=\"error hide\">Amount must be a number</div>")
  @link = (scope) ->
    scope.$watch "amount_of_dice", (value) ->
      stringified = String(value)
      if stringified.match(/^\d+$/) or stringified is "undefined" or stringified is ""
        errorMessage.addClass "hide"
      else
        errorMessage.removeClass "hide"


  restrict: "E"
  replace: true
  template: "<span class=\"amount\"><input autofocus id=\"amount\" type=\"text\" class=\"input-small\" ng-model=\"amount_of_dice\" placeholder=\"Amount\" /></span>"
  compile: (tElem) ->
    tElem.append errorMessage
    link