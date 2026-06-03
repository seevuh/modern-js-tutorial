"use strict";

// global object
console.log("this");
window.console.log("this2");

// globalThis - a standardized name for a global object
// supported across all environments
globalThis.console.log("this3");


// global functions and variables declared with var
// become the property of the global object
var gVar = 5;
console.log(window.gVar);
console.log(globalThis.gVar);


// Using for polyfills
if (!window.Promise) {
  console.log("old browser");
} else {
  console.log("new browser");
}


// global object holds variables that should be available everywhere
// that includes JavaScript built-ins, such as Array and 
// environment-specific values, such as window.innerHeight
console.log(window.innerHeight);
console.log(globalThis.innerHeight);
console.log(globalThis.history);
