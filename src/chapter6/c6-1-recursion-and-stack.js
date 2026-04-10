"use strict";

// #region Chapter Examples

// Two ways of thinking
function pow1(x, n) {
  let result = 1;
  for (let i = 0; i < n; i++) {
    result *= x;
  }
  return result;
}

console.log(pow1(2, 3));

function pow2(x, n) {
  return n == 1 ? x : x * pow2(x, n - 1);
}

console.log(pow2(2, 3));

// Recursive traversals
let company = {
  sales: [{ name: 'John', salary: 1000 }, { name: 'Alice', salary: 1600 }],
  development: {
    sites: [{ name: 'Peter', salary: 2000 }, { name: 'Alex', salary: 1800 }],
    internals: [{ name: 'Jack', salary: 1300 }]
  }
};

// recursion
function sumSalaries(department) {
  if (Array.isArray(department)) {
    return department.reduce((sum, person) => sum + person.salary, 0);
  } else {
    let sum = 0;
    for (let subdep of Object.values(department)) {
      sum += sumSalaries(subdep);
    }
    return sum;
  }
}

console.log(sumSalaries(company));
// #endregion

// #region Tasks

// Task 1: Sum all numbers till the given one
function sumTo1(n) {
  let sum = 0;

  for (let i = n; i > 0; i--) {
    sum += i;
  }
  return sum;
}

function sumTo2(n) {
  return n == 1 ? 1 : n + sumTo(n - 1);
}

function sumTo(n) {
  return n * (n + 1) / 2;
}

// #endregion