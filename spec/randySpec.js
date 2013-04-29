describe("Randy", function() {
	describe("between", function() {
		it("should return a number inbetween specified bounds", function() {
			expect(new Randy().between(5)).toMatch(/[1-5]/);
			expect(new Randy().between(2)).toMatch(/[1-2]/);
			expect(new Randy().between(999)).toMatch(/[1-999]/);
		})
	})
	
	describe("multiBetween", function() {
		it("should contain proper amount of elements", function() {
			expect(new Randy().multiBetween(5, 5).length).toEqual(5);
		})
		
		it("should have elements which are in the bounds", function() {
			var nums = new Randy().multiBetween(5, 5);
			
			expect(nums[0]).toMatch(/[1-5]/);
			expect(nums[1]).toMatch(/[1-5]/);
			expect(nums[2]).toMatch(/[1-5]/);
			expect(nums[3]).toMatch(/[1-5]/);
			expect(nums[4]).toMatch(/[1-5]/);
		})
		
		it("should return an empty array when given 0 amount", function() {
			expect(new Randy().multiBetween(5, 0).length).toEqual(0);
		})
		
		it("calls between()", function() {
			var randy = new Randy();
			
			spyOn(randy, "between");
			randy.multiBetween(2, 2);
			expect(randy.between).toHaveBeenCalled();
		})
		
		it("calls between() with the proper arguments", function() {
			var randy = new Randy();
			
			spyOn(randy, "between");
			randy.multiBetween(5, 100);
			
			expect(randy.between).toHaveBeenCalledWith(5);
		})
	})
})