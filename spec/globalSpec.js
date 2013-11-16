describe("getCurrentDateTime", function() {
  var dateTime = getCurrentDateTime();
  
  it("should have a period", function() {
    expect(dateTime).toMatch(/AM|PM/);
  })
  
  it("should have a time", function() {
    expect(dateTime).toMatch(/[0-9]{1,2}:[0-9]{2}/);
  })
  
  it("should have a year", function() {
    expect(dateTime).toMatch(/[0-9]{4}/);
  })
})
