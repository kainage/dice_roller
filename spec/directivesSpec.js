describe("Directives", function() {
	beforeEach(module('rollerApp'));
	
	beforeEach(inject(function($rootScope, $compile) {
		scope = $rootScope.$new();
		compile = $compile;
	}));
	
	it("should have associated inner elements", function() {
		var element = compile('<amountfield></amountfield>')(scope)
		
		expect(element.html()).toMatch(/input/);
		expect(element.html()).toMatch(/error/);
		expect(element.html()).toMatch(/Amount must be a number/);
	})
})
