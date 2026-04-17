"use strict";

// #region chapter examples

// Rest parameters ...
function sumAll(...args) {
  let sum = 0;

  for (let arg of args) sum += arg;

  return sum;
}
console.log(sumAll(1));
console.log(sumAll(1, 2, 3));

function showName(firstName, lastName, ...titles) {
  console.log(firstName + ' ' + lastName);
  console.log(titles[0]);
  console.log(titles[1]);
  console.log(titles.length);
}
showName("Julius", "Caesar", "Consul", "Imperator");

// The "argument" variable
function showName2() {
  console.log(arguments.length);
  console.log(arguments[0]);
  console.log(arguments[1]);
}
showName2("Julius", "Caesar");
showName2("Ilya");

// arrow functions do not have "arguments", takes them from outer "normal" function
function f() {
  let showArg = () => console.log(arguments[0]);
  showArg();
}
f(1);

// Spread Syntax
let arr = [3, 5, 1];
console.log(Math.max(arr)); // NaN
console.log(Math.max(...arr)); // 5

let arr1 = [1, -2, 3, 4];
let arr2 = [8, 3, -8, 1];
console.log(Math.max(1, ...arr1, 2, ...arr2, 25));

let arr3 = [8, 9, 15];
let merged = [0, ...arr, 2, ...arr3];
console.log(merged);

let str = "Hello";
console.log(str, ...str, [...str]);

// The spread syntax works only with iterables
console.log([...str]);

// Array.from operates on both array-like and iterables
console.log(Array.from(str));


// Copy an array/object
let arr4 = [1, 2, 3];
let arr4Copy = [...arr4];

console.log(JSON.stringify(arr4) === JSON.stringify(arr4Copy));
console.log(arr4 === arr4Copy);
arr4.push(4);
console.log(arr4);
console.log(arr4Copy);

// object copy
let obj = { a: 1, b: 2, c: 3 };
let objCopy = { ...obj };

console.log(JSON.stringify(obj) === JSON.stringify(objCopy));
console.log(obj === objCopy);

obj.d = 4;
console.log(JSON.stringify(obj));
console.log(JSON.stringify(objCopy));
// much shorter than let objCopy = Object.assign({}, obj);
// #endregion