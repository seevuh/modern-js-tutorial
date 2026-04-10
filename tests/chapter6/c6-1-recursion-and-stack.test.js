"use strict";

describe("sumTo(n)", function () {
  it("should return 1 for n = 1", function () {
    assert.equal(sumTo(1), 1);
  });

  it("should return 3 for n = 2", function() {
    assert.equal(sumTo(2), 3);
  });

  it("should return 6 for n = 3", function() {
    assert.equal(sumTo(3), 6);
  });

  it("should return 10 for n = 4", function() {
    assert.equal(sumTo(4), 10);
  });

  it("should return 5050 for n = 100", function() {
    assert.equal(sumTo(100), 5050);
  });
});