"use strict";

// #region Examples
console.log('#### Examples ####');

// Variables - dynamically types
let x = 5;
x = "John";

// typeof operator
console.log(typeof null == "object"); // true (error in the language)
console.log(typeof function () { } == "function") // true (functions are treated specially)


// operators
// string concat
console.log('1' + 2); // '12', string
console.log(1 + '2'); // '12', string

// comparisons
// equality check == for values of different types converts them to a number except null/ undefined
console.log(0 == false); // true ( false is converted to 0)
console.log(0 == ''); // true ('' is converted to 0)


// the "switch" construct
let age = "18";

switch (age) {
  case 18:
    console.log("Won't work");
    break;

  case "18":
    console.log("This works!");
    break;

  default:
    console.log("Any value not equal to one above");
}


// functions
// function declaration
function sumD(a, b) {
  let result = a + b;

  return result;
}

// function expression
let sumE = function (a, b) {
  let result = a + b;

  return result;
}

// arrow functions
// expression on the right side
let sum1 = (a, b) => a + b;

// multi-line
let sum2 = (a, b) => {
  return a + b;
}

// without arguments
let sayHi = () => console.log("Hello");

// with a single argument
let double = n => n * 2;

// #endregion