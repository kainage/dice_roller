describe("Array sum", function() {
  it("should sum the array elements", function() {
    var ary = [1, 2, 3]
    
    expect(ary.sum()).toEqual(6);
  })
  
  it("should equal the input when only one item in array", function() {
    var ary = [6]
    
    expect(ary.sum()).toEqual(6);
  })
  
  it("should be undefined when empty", function() {
    var ary = []
    
    expect(ary.sum()).toEqual(undefined);
  })
  
  it("should combine strings when strings are given", function() {
    var ary = ['a', 'b', 'c']
    
    expect(ary.sum()).toEqual('abc');
  })
})
