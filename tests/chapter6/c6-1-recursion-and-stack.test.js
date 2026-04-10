"use strict";

describe("sumTo(n)", function () {
  it("should return 1 for n = 1", function () {
    assert.equal(sumTo(1), 1);
  });

  it("should return 3 for n = 2", function () {
    assert.equal(sumTo(2), 3);
  });

  it("should return 6 for n = 3", function () {
    assert.equal(sumTo(3), 6);
  });

  it("should return 10 for n = 4", function () {
    assert.equal(sumTo(4), 10);
  });

  it("should return 5050 for n = 100", function () {
    assert.equal(sumTo(100), 5050);
  });
});

describe("factorial(n)", function () {
  let nFactorial = [1, 1, 2, 6, 24, 120];

  for (let i = 0; i <= 5; i++) {
    it(`should return ${nFactorial[i]} for n = ${i}`, function () {
      assert.equal(factorial(i), nFactorial[i]);
    });
  }
});

describe("Fibonacci number: n-th, fib(n)", function () {
  let nFib = { 3: 2, 4: 3, 5: 5, 6: 8, 7: 13, 77: 5527939700884757 };

  for (let [n, value] of Object.entries(nFib)) {
    it(`should return ${value} for n = ${n}`, function () {
      assert.equal(fib(n), value);
    });
  }

  // for (let key in nFib) {
  //   it(`should return ${nFib[key]} for n = ${key}`, function () {
  //     assert.equal(fib(key), nFib[key]);
  //   });
  // }
});