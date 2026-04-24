"use strict";

// #region Examples
console.log("## Examples ##");
// Code blocks
{
  console.log("\n** Code blocks **");
  if (true) {
    let phrase = "Hello!";

    console.log(phrase); // Hello!
  }

  // console.log(phrase); // Error, no such variable!
}

// Nested funcitons
{
  console.log("\n** Nested functions **");
  function sayHiBye(firstName, lastName) {

    // helper nested function to use below
    function getFullName() {
      return firstName + " " + lastName;
    }

    console.log("Hello, " + getFullName());
    console.log("Bye, " + getFullName());
  }

  function makeCounter() {
    let count = 0;

    return function () {
      return count++;
    };
  }

  let counter = makeCounter();

  console.log(counter()); // 0
  console.log(counter()); // 1
  console.log(counter()); // 2
}

// Garbage collection
{
  console.log("/n** Garbage collection **");

  function f() {
    let value = 123;

    return function () {
      alert(value);
    };
  }

  let g = f(); // g.[[Environment]] stores a reference to the Lexical Environment
  // of the corresponding f() call

  g = null; // ...and now the memory is cleaned up

  function f2() {
    let value = Math.random();

    return function () { console.log(value); };
  }

  // 3 functions in array, every one of them links to Lexical Environment
  // from the corresponding f2() run
  let arr = [f2(), f2(), f2()];
  console.log(arr);
}

// #endregion


// #region Tasks
console.log("\n## Tasks ##");


// Task 1: Does a function pickup latest changes?
console.log("\n** Task 1 **");
{
  let name = "John";

  function sayHi() {
    console.log("Hi, " + name);
  }

  name = "Pete";

  sayHi(); // Pete
}


// Task 2: Which variables are available?
console.log("\n** Task 2 **");
{
  function makeWorker() {
    let name = "Pete";

    return function () {
      console.log(name);
    };
  }

  let name = "John";

  let work = makeWorker();

  work(); // Pete
}


// Task 3: Are counters independent?
console.log("\n** Task 3 **");
{
  function makeCounter() {
    let count = 0;

    return function () {
      return count++;
    };
  }

  let counter = makeCounter();
  let counter2 = makeCounter();

  console.log(counter()); // 0
  console.log(counter()); // 1

  console.log(counter2()); // 0
  console.log(counter2());// 1
  // Yes, Independent - because new Lexical scope is created at the time of funciton call
  // They have independent outer Lexical Environments, each one has its own count
}


// Task 4: Counter object
console.log("\n** Task 4 **");
{
  function Counter() {
    let count = 0;

    this.up = function () {
      return ++count;
    };

    this.down = function () {
      return --count;
    };
  }

  let counter = new Counter();

  console.log(counter.up()); // 1
  console.log(counter.up()); // 2
  console.log(counter.down()); // 1
  // Both nested functions are created within the same outer Lexical Environment,
  // so they share access to the same count variable
}


// Task 5: Function in if
console.log("\n** Task 5 **");
{
  let phrase = "Hello";

  if (true) {
    let user = "John";

    function sayHi() {
      console.log(`${phrase}, ${user}`);
    }
  }

  // sayHi(); // Error
  console.log("Error!");
}


// Task 6: Sum with closures
console.log("\n** Task 6 **");
{
  console.log(sum(1)(2));
  console.log(sum(5)(-1));

  function sum(a) {
    return function (b) {
      return a + b; // takes "a" from the outer lexical environment
    };
  }
}


// Task 7: Is variable visible?
console.log("\n** Task 7 **");
{
  let x = 1;

  function func() {
    // the local varialbe x is known to the engine from the beginning of the function,
    // but "uninitialized" (unusable) until let ("dead zone")
    // hence the error

    console.log(x); // ReferenceError: Cannot access 'x' before initialization 

    // This zone of temporary unusability of a variable (from the beginning of the
    // code block till let) is sometimes called the "dead zone"
    let x = 2;
  }

  // func(); // Error
  console.log("Error!");
}


// Task 8: Filter through function
console.log("\n** Task 8 **");
{
  let arr = [1, 2, 3, 4, 5, 6, 7];

  console.log(arr.filter(inBetween(3, 6)));
  console.log(arr.filter(inArray([1, 2, 10])));

  function inBetween(a, b) {
    return function (item) {
      return a <= item && b >= item;
    };
  }

  function inArray(array) {
    return function (item) {
      return array.includes(item);
    }
  }
}


// Task 9: Sort by field
console.log("\n** Task 9 **");
{
  let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
  ];

  users.sort(byField('name'));

  users.sort(byField('age'));
  console.log(users);

  function byField(fieldName) {
    return (a, b) => a[fieldName] > b[fieldName] ? 1 : -1;
  }
}


// Task 10: Army of functions
console.log("\n** Task 10 **");
{
  function makeArmy() {
    let shooters = [];

    let i = 0;
    while (i < 10) {
      let a = i;
      let shooter = function () {
        console.log(a);
      };
      shooters.push(shooter);
      i++;
    }

    // for (let i = 0; i < 10; i++) {
    //   let shooter = function() {
    //     console.log(i);
    //   }
    //   shooters.push(shooter);
    // }

    return shooters;
  }

  let army = makeArmy();

  army[0]();
  army[1]();
  army[2]();
}

// #endregion