describe("roll", function() {
  var dice_ary = [1, 2, 3];
  var new_roll = new dieRoll(dice_ary, 4);
  
  it("should store the dice as an array", function() {
    expect(new_roll.dice).toEqual(dice_ary.join(', '));
  })
  
  it("should store the sum of dice", function() {
    expect(new_roll.total).toEqual(dice_ary.sum());
  })
  
  it("should store the sides count of the dice rolled", function() {
    expect(new_roll.sides).toEqual(4);
  })
  
  it("should store the amount of dice rolled", function() {
    expect(new_roll.amount).toEqual(dice_ary.length);
  })
  
  it("should store the current time", function() {
    expect(new_roll.time).toBeTruthy();
  })
})
