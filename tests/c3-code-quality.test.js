"use strict";

describe("pow", function () {

  /*     before( () => console.log("Testing started") );
      after( () => console.log("Testing finished") );
      beforeEach( () => console.log("Test started") );
      afterEach( () => console.log("Test finished") ); */

  it("2 raised to the power of 3 is 8", function () {
    assert.equal(pow(2, 3), 8);
  });

  it("for negative n the result is NaN", function () {
    assert(Number.isNaN(pow(2, -1)));
  });

  it("for non-integer n the result is NaN", function () {
    assert(Number.isNaN(pow(2, 1.5)));
  });

  describe("raises x to the power of 3", function () {

    function makeTest(x) {
      let expected = x * x * x;
      it(`${x} in the power of 3 is ${expected}`, function () {
        assert.equal(pow(x, 3), expected);
      });
    }

    for (let n = 1; n <= 5; n++) {
      makeTest(n);
    }
  });
});