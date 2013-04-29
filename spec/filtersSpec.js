describe("Filters", function() {
	beforeEach(module('rollerApp'));
	
	describe("ensureNumerical", function() {
		it("should exist", inject(function($filter) {
			expect($filter('ensureNumerical')).not.toBeNull();
		}));
		
		it("should return a number when given", inject(function($filter) {
			var num = $filter('ensureNumerical')(5)
			
			expect(num).toEqual(5);
		}));
		
		it("should return 0 when empty", inject(function($filter) {
			var num = $filter('ensureNumerical')()
			
			expect(num).toEqual(0);
		}));
		
		it("should return 0 when non numbers given", inject(function($filter) {
			var num = $filter('ensureNumerical')('hello')
			
			expect(num).toEqual(0);
		}))
	})
	
	describe("ensureInList", function() {
		it("should exist", inject(function($filter) {
			expect($filter('ensureInList')).not.toBeNull();
		}));
		
		it("should return a number when given", inject(function($filter) {
			var num = $filter('ensureInList')(2)
			
			expect(num).toEqual(2);
		}));
		
		it("should return 0 when empty", inject(function($filter) {
			var num = $filter('ensureInList')()
			
			expect(num).toEqual(2);
		}));
		
		it("should return 0 when number not in list given", inject(function($filter) {
			var num = $filter('ensureInList')(17)
			
			expect(num).toEqual(2);
		}))
		
		it("should return 0 when non numbers given", inject(function($filter) {
			var num = $filter('ensureInList')('hello')
			
			expect(num).toEqual(2);
		}))
	})
})
