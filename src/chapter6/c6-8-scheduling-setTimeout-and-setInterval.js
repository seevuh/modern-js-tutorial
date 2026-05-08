"use strict";

// #region Examples
console.log("#### Examples ####");

// setTimeout
console.log("\n*** setTimeout ***");
{
  function sayHi() {
    console.log('Hello');
  }
  setTimeout(sayHi, 100);
}

// with arguments
{
  function sayHi(phrase, who) {
    console.log(`${phrase}, ${who}`);
  }
  setTimeout(sayHi, 100, "Hello", "John"); // Hello, John
}

// first argument string
{
  setTimeout("console.log('Hello')", 100);
}

// arrow functions instead of string
{
  setTimeout(() => console.log('Hello'), 100);
}

// Cancelling with clearTimeout
let timerId = setTimeout(() => console.log("never happens"), 100);
console.log(timerId); // timer identifier

clearTimeout(timerId);
console.log(timerId);


// setInterval
{
  setTimeout(() => console.log('\n*** setInterval ***'), 150);
  let timerId = setInterval(() => console.log('tick'), 200);

  setTimeout(() => { clearInterval(timerId); console.log('stop'); }, 500);
}

// Nested setTimeout
{
  setTimeout(() => console.log('\n*** Nested setTimeout ***'), 510);

  let timerId = setTimeout(function tick() {
    console.log('tick');
    timerId = setTimeout(tick, 550);
  }, 550);

  setTimeout(() => clearTimeout(timerId), 2500);
}

// Zero delay setTimeout
{
  setTimeout(() => console.log("World", "\\\\Zero delay setTimeout"));
  console.log("Hello", "\\\\Zero delay setTimeout");
}

// Zero delay is in fact not zero (in a browser)
{
  let start = Date.now();
  let times = [];

  setTimeout(function run() {
    times.push(Date.now() - start);

    if (start + 100 < Date.now()) {
      console.log("\n*** Zero delay is in fact not zero (in a browser) ***");
      console.log(times, "\n");
    }
    else setTimeout(run);
  });
}

// #endregion

// #region Tasks

// Task 1
printNumbers(2, 5);

function printNumbers1(from, to) {
  let timerId = setInterval(() => {
    if (from == to) clearInterval(timerId);
    console.log(from++);
    // if (from <= to) console.log(from++);
    // else clearInterval(timerId);
  }, 1000);
}

// print first number immediately
function printNumbers(from, to) {
  function print() {
    if (from == to) clearInterval(timerId);
    console.log(from++);
  }

  print();
  let timerId = setInterval(print, 1000);
}


function printNumbers2(from, to) {
  setTimeout(function print() {
    console.log(from++);
    if (from <= to) {
      setTimeout(print, 1000);
    }
    // if (from <= to) {
    //   console.log(from++);
    //   setTimeout(print, 1000)
    // }
  }, 1000);
}

// Task 2

{
  let i = 0;

  // value of i is 100000, because below line executes after the script
  setTimeout(() => console.log(i), 100);

  for (let j = 0; j < 100000; j++) {
    i++;
  }
}

// #endregion