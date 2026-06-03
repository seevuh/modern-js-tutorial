// #region Examples

// "var" has no block scope
if (true) {
  var test = true;
}
console.log(test);


// "var" tolerates redeclarations
var user = "Pete";

var user = "John";

console.log(user);


// "var" variables can be declared below their use
function sayHi() {
  phrase = "Hello";

  console.log(phrase);
  if (false) {
    var phrase;
  }
}
sayHi();

// "hoisting"
function sayHi2() {
  // declration works at the start...
  console.log(phrase2); // undefined

  var phrase2 = "Hello2"; // ...assignment - when the execution reaches it
}

sayHi2();


// IIFE - Immediately-Invoked Function Expressions
// (), !, +
(function () {

  var message = "Hello3";

  console.log(message); // Hello
})();

// #endregion