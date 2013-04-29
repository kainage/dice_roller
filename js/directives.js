app.directive("mouseup", function () {
	return function (scope, element, attrs) {
		element.bind("mouseup", function () {
			scope.$apply(attrs.mouseup)
		})
	}
})
