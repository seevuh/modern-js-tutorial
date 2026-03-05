/* eslint-disable no-unassigned-vars */
/* eslint-disable no-constant-binary-expression */
/* eslint-disable no-unused-vars */
"use strict";
/* alert("Hello");

[1, 2].forEach(alert); */

// This is a comment

/* This is a
multi-line comment */

let admin;
let name;

name = "John";
admin = name;

// alert(admin); // John

let ourPlanetName = "Earth";
let currentUserName = "John";

const BIRTHDAY = '18.04.1982'; // make uppercase for constants
// const age = someCode(BIRTHDAY); 

let message = "hello";
message = 12345; // JavaScript is a dynamically typed language

let n = 1234;
n = 12.345; // can be a float

console.log(1 / 0); // Infinity
console.log(Infinity); // Infinity
console.log("not a number" / 2); // NaN
console.log(NaN**0);
console.log(1/0);

console.log(1n+2n);
console.log(5n/2n); // 2n
console.log("23", +"23");

console.log(`Hello ${name}`); // Hello John

let age = null;
console.log(age); // null

let age2;
console.log(age2); // undefined

// eslint-disable-next-line no-useless-assignment
let age3 = 100;
age3 = undefined;
console.log(age3); // undefined

console.log(typeof 10n);
console.log(typeof Symbol("id"));
console.log(typeof Math);
console.log(typeof null); // object (this is a historical bug in JavaScript)
console.log(typeof undefined); // undefined
console.log(typeof alert); // function
// alert("Hello");
// let result = prompt("new", 100);
// console.log(result);

/* let isBoss = confirm("Are you the boss?");
console.log(isBoss); */

let str = '';
console.log(Boolean(str)); // object

for (let a = 1, b = 3, c = a*b; a < 5; a++, b++, c = a*b) {
    console.log(a, b, c);
}

let a = + "1";
let b = + "2";
console.log(a + b); // 3
console.log('' == false, '   ' == false, 'a' == false, 0 == false, 0 === false); // true
// eslint-disable-next-line use-isnan
console.log(null >= 0, NaN == NaN, undefined == undefined);

/* 
function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  "Do you agree?",
  function() { alert("You agreed."); },
  function() { alert("You canceled the execution."); }
); */

/* let ask = (question, yes, no) => confirm(question) ? yes() : no();

ask(
    "Do you agree?",
    () => alert("You agreed."),
    () => alert("You canceled the execution.")
);

if (true){
    console.log("Hello");
} else {
    console.log("Goodbye");
}
 */

/* let userName = prompt("Your name?", "Alice");
let isTeaWanted = confirm("Do you want some tea?");

alert( "Visitor: " + userName ); // Alice
alert( "Tea wanted: " + isTeaWanted ); // true
 */