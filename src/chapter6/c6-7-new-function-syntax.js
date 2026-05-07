"use strict";

// #region Examples

let sum = new Function('a', 'b', 'return a + b');
console.log(sum(1, 2)); // 3

// without arguments
let sayHi = new Function('console.log("Hello")');
sayHi(); // Hello

// Closure
function getFunc1() {
  let value = "test";

  let func = new Function('console.log(value)');

  return func;
}

// getFunc1()(); // error: value is not defined

// regular function behavior
function getFunc() {
  let value = "test";

  let func = function () { console.log(value); };

  return func;
}

getFunc()(); // "test", from the Lexical Environment of getFunc

// arguments as comma-separated list
let func1 = new Function('a', 'b', 'return a + b'); // basic syntax
let func2 = new Function('a,b', 'return a + b'); // comma-separated
let func3 = new Function('a , b', 'return a + b'); // comma-separated with spaces
// endregion