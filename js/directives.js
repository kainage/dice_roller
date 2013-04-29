app.directive("mouseup", function () {
	return function (scope, element, attrs) {
		element.bind("mouseup", function () {
			scope.$apply(attrs.mouseup)
		})
	}
})

app.directive("amountfield", function() {
	var errorMessage = angular.element("<div class='error hide'>Amount must be a number</div>")
	
	this.link = function(scope) {
		scope.$watch("amount_of_dice", function(value) {
			var stringified = String(value);
			console.log(stringified);
			
			if(stringified.match(/^\d+$/) || stringified === 'undefined' || stringified === '') {
				errorMessage.addClass('hide');
			} else {
				errorMessage.removeClass('hide');
			}
		})
	}
	
	return {
		restrict: 'E',
		replace: true,
		template: "<span class='amount'><input id='amount' type='text' class='input-small' ng-model='amount_of_dice' placeholder='Amount' /></span>",
		compile: function(tElem) {
			tElem.append(errorMessage);
			
			return link;
		}
	}
})
