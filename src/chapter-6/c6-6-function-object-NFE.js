"use strict";

// #region Examples
console.log("#### Examples ####");

// The "name" property
console.log('\n*** The "name" property ***');
{
  // function declaration
  function sayHi() {
    console.log("Hi");
  }
  console.log(sayHi.name);

  // works with assignment
  let sayHi2 = function () {
    console.log("Hi2");
  }
  console.log(sayHi2.name);

  // object methods have names too
  let user = {
    sayHi() {
      // ...
    },

    sayBye: function () {
      // ...
    }
  };

  let a = "sayHi";
  console.log(user.sayHi.name); // sayHi
  console.log(user[a].name); // sayHi
  console.log(user[a]["name"]); // sayHi
  console.log(user.sayBye.name); // sayBye

  // empty name property
  let arr = [function () { }];
  console.log(arr[0].name); // <empty string>
}

// The "length" property
console.log('\n*** The "length" property ***');
{
  function f1(a) { }
  function f2(a, b) { }
  function many(a, b, ...more) { }

  console.log(f1.length); // 1
  console.log(f2.length); // 2
  console.log(many.length); // 2

  // introspection
  function ask(question, ...handlers) {
    let isYes = true; // confirm(question);

    for (let handler of handlers) {
      if (handler.length == 0) {
        if (isYes) handler();
      } else {
        handler(isYes);
      }
    }

  }

  // for positive answer, both handlers are called
  // for negative answer, only the second one
  ask("Question?", () => console.log('You said yes'), result => console.log(result));
}

// Custom properties
console.log("\n*** Custom properties ***");
{
  function sayHi() {
    console.log("Hi");

    // let's count how many times we run
    sayHi.counter++;
  }
  sayHi.counter = 0; // initial value

  sayHi(); // Hi
  sayHi(); // Hi

  console.log(`Called ${sayHi.counter} times`); // Called 2 times

  // rewrite counter function
  function makeCounter() {
    // instead of:
    // let count = 0;

    function counter() {
      return counter.count++;
    };

    counter.count = 0;

    return counter;
  }

  let counter = makeCounter();

  counter.count = 10;
  console.log(counter()); // 10
  console.log(counter()); // 11
}

// Named Function Expression
console.log("\n*** Named Function Expression***");
{
  let sayHi = function func(who) {
    if (who) {
      console.log(`Hello, ${who}`);
    } else {
      func("Guest");
    }
  };

  let welcome = sayHi;
  sayHi = null;

  welcome(); // Hello, Guest (nested call works)
}
// #endregion

// #region Tasks
console.log("\n#### Tasks ####");

// Task 1 : Set and decrease for counter
console.log("\n*** Task 1 ***");
{
  function makeCounter() {

    function counter() {
      return counter.count++;
    }

    counter.count = 0;

    counter.set = function (value) {
      counter.count = value;
    };

    counter.decrease = function () {
      counter.count--;
    };

    return counter;
  }

  function makeCounter1() {
    let count = 0;
    function counter() {
      return count++;
    }
    counter.set = value => count = value;
    counter.decrease = () => count--;
    return counter;
  }

  let counter = makeCounter();
  console.log(counter());
  counter.set(10);
  console.log(counter());
  counter.decrease();
  counter.decrease();
  console.log(counter());

}

// Task 2: Sum with an arbitrary amount of brackets
console.log("\n***Task 2 ***");
{
  console.log(sum(1)(2) == 3);
  console.log(`${sum(1)(2)}`);
  console.log(sum(1)(2)(3) == 6);
  console.log(sum(5)(-1)(2) == 6);
  console.log(sum(6)(-1)(-2)(-3) == 0);
  console.log(sum(0)(1)(2)(3)(4)(5) == 15);


  function sum(a) {
    let sum = a;

    let f = function (b) {
      sum += b;
      return f;
    }

    f[Symbol.toPrimitive] = (hint) => {
      return sum;
    };

    return f;
  }

  // function sum(a) {
  //   let currentSum = a;

  //   function f(b) {
  //     // if (f.length) {
  //       currentSum += b;
  //       return f;
  //     // }
  //     // return currentSum;
  //   }

  //   f[Symbol.toPrimitive] = (hint) => {
  //     return currentSum;
  //   };

  //   // f.toString = function () {
  //   //   return currentSum;
  //   // };

  //   return f;
  // }

  // function sum1(value) {
  //   let currentSum = value;

  //   function f(newValue) {
  //     if (newValue) {
  //       currentSum += newValue;
  //       return f;
  //     }
  //     return currentSum;
  //   }
  //   return f;
  // }
}
// end region