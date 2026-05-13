"use strict";

// #region Examples
console.log("#### Examples ####");
console.log("\n*** Transparent caching ***");
{
  function slow(x) {
    console.log(`called with ${x}`);
    return x;
  }

  function cachingDecorator(func) {
    let cache = new Map();

    return function (x) {
      if (cache.has(x)) {
        return cache.get(x);
      }

      let result = func(x);
      cache.set(x, result);
      return result;
    }
  }

  slow = cachingDecorator(slow);
  console.log(slow(2));
  console.log(`Again: ${slow(2)}`);
}

// Using "func.call" for the context
console.log('\n*** Using "func.call" for the context ***');
{
  let worker = {
    someMethod() {
      return 1;
    },

    slow(x) {
      console.log(`Called with ${x}`);
      return x * this.someMethod();
    }
  };

  function cachingDecorator(func) {
    let cache = new Map();
    return function (x) {
      if (cache.has(x)) {
        return cache.get(x);
      }

      let result = func.call(this, x);
      cache.set(x, result);
      return result;
    };
  }

  // console.log(worker.slow(1));
  worker.slow = cachingDecorator(worker.slow);
  console.log(worker.slow(2));
}

// Going multi-argument
console.log("\n*** Going multi-argument ***");
{
  let worker = {
    slow(min, max) {
      console.log(`Called with ${min}, ${max}`);
      return min + max;
    }
  };

  function cachingDecorator(func, hash) {
    let cache = new Map();

    return function () {
      let key = hash(arguments);

      if (cache.has(key)) {
        return cache.get(key);
      }

      let result = func.call(this, ...arguments);

      cache.set(key, result);
      return result;
    };
  }

  function hash(args) {
    return args[0] + ',' + args[1];
  }

  worker.slow = cachingDecorator(worker.slow, hash);

  console.log(worker.slow(3, 5));
  console.log("Again " + worker.slow(3, 5));
}

// func.apply & Borrowing a method
console.log("\n*** func.apply ***");
{
  // simplest call forwading using apply
  let wrapper = function () {
    return original.apply(this, arguments);
  };

  // borrowing a method
  function printHash() {
    console.log([].join.call(arguments));
  }
  printHash(1, 2);

  let worker = {
    slow(min, max) {
      console.log(`Called with ${min}, ${max}`);
      return min + max;
    }
  };

  function cachingDecorator(func, hash) {
    let cache = new Map();

    return function () {
      let key = hash(arguments);

      if (cache.has(key)) {
        return cache.get(key);
      }

      let result = func.apply(this, arguments); // (*)

      cache.set(key, result);
      return result;
    };
  }

  function hash() {
    return [].join.call(arguments);
  }

  worker.slow = cachingDecorator(worker.slow, hash);

  console.log(worker.slow(3, 5));
  console.log("Again " + worker.slow(3, 5));

}
// #endregion

// #region Tasks
console.log("\n#### Tasks ####");

// Task 1: Spy decorator
console.log("\n*** Task 1: Spy decorator ***");
{
  function work(a, b) {
    console.log(a + b);
  }

  work = spy(work);

  work(1, 2);
  work(4, 5);

  for (let args of work.calls) {
    console.log('call:' + args.join());
  }

  function spy(func) {
    // using ...args instead of arguments to store "real" array in wrapper.calls
    function wrapper(...args) {
      wrapper.calls.push(args);
      return func.apply(this, args);
    }

    wrapper.calls = [];

    return wrapper;
  }
}

// Task 2: Delaying decorator
console.log("\n*** Task 2: Delaying decorator ***");
{
  function f(x) {
    console.log(x);
  }

  // create wrappers
  let f1000 = delay(f, 1000);
  let f1500 = delay(f, 1500);

  f1000("test");
  f1500("test2");

  function delay(f, ms) {

    return function () {
      setTimeout(() => f.apply(this, arguments), ms);
    }
  }
}

// Task 3: Debounce decorator
console.log("\n*** Task 3: Debounce decorator ***");
{
  let f = debounce(console.log, 1000);

  f("a");

  setTimeout(() => f("b"), 200);
  setTimeout(() => f("c"), 500);

  function debounce(f, ms) {
    let timeout;

    return function () {
      clearTimeout(timeout);
      timeout = setTimeout(() => f.apply(this, arguments), ms);
    }
  }
}

// Task 4: Throttle decorator
console.log("\n*** Task 4: Throttle decorator ***");
{
  function f(a) {
    console.log(a);
  }

  // f1000 passes calls to f at maximum once per 1000 ms
  let f1000 = throttle(f, 1000);

  // f1000(1);
  // f1000(2);
  // f1000(3);

  function throttle(func, ms) {
    let isThrottled = false;
    let savedArgs;
    let savedThis;

    function wrapper() {
      if (isThrottled) {
        savedArgs = arguments;
        savedThis = this;
        return;
      }

      isThrottled = true;

      func.apply(this, arguments);

      setTimeout(function () {
        isThrottled = false;
        if (savedArgs) {
          wrapper.apply(savedThis, savedArgs);
          savedThis = savedThis = null;
        }
      }, ms);
    }

    return wrapper;
  }
}
// #endregion


// #region Practice
console.log("\n#### Practice ####");

// Basic caching
console.log("\n*** Basic caching ***");
{
  function slow(x) {
    // CPU-heavy
    console.log(`Called with ${x}`);
    return x;
  }

  slow = cachingDecorator(slow);

  console.log(slow(1));
  console.log(`Again: ${slow(1)}`);

  function cachingDecorator(func) {

    let cache = new Map();

    return function (x) {

      if (cache.has(x)) {
        return cache.get(x);
      }

      let result = func(x);
      cache.set(x, result);
      return result;
    }
  }
}

// Method caching
console.log("\n*** Method caching ***");
{
  let worker = {
    someMethod: function () {
      return 1;
    },

    slow: function (x) {
      console.log(`Called with ${x}`);
      return x * this.someMethod();
    }
  };

  console.log(worker.slow(1));

  worker.slow = cachingDecorator(worker.slow);
  console.log(worker.slow(2));
  console.log(worker.slow(2));

  function cachingDecorator(func) {

    let cache = new Map();

    return function (x) {
      if (cache.has(x)) {
        return cache.get(x);
      }

      let result = func.call(this, x);
      cache.set(x, result);
      return result;
    }
  }
}

// Multi-argument
console.log("\n*** Multi-argument ***");
{
  let worker = {
    slow(min, max) {
      console.log(`Called with ${min}, ${max}`);
      return min + max;
    }
  };

  worker.slow = cachingDecorator(worker.slow, hash);

  console.log(worker.slow(3, 5));
  console.log(`Again: ${worker.slow(3, 5)}`);

  function cachingDecorator(func, hash) {
    let cache = new Map();

    return function () {
      let key = hash(arguments);
      if (cache.has(key)) {
        return cache.get(key);
      }

      let result = func(...arguments);
      cache.set(key, result);
      return result;
    }
  }

  function hash(args) {
    return [].join.call(args);
  }
}

// func.apply : call forwarding
console.log("\n*** func.apply : call forwarding ***");
{
  let wrapper = function () {
    return original.apply(this, arguments);
  }
}

// Tasks
// Task 1: Spy decorator
console.log("\n*** Task 1: Spy decorator ***");
{
  function work(a, b) {
    console.log(a + b);
  }

  work = spy(work);

  work(1, 2); // 3
  work(4, 5); // 9

  for (let args of work.calls) {
    console.log(`call: ${args.join()}`); // "call: 1,2", "call: 4,5"
  }

  function spy(func) {
    wrapper.calls = [];

    function wrapper(...args) {
      wrapper.calls.push(args);
      return func.apply(this, args);
    }
    return wrapper;
  }
}

// Task 2: Delaying decorator
console.log("\n*** Task 2: Delaying decorator ***");
{
  function f(x) {
    console.log(x);
  }

  let f1000 = delay(f, 1000);
  let f1500 = delay(f, 1500);

  f1000("test - practice1"); // shows "test" after 1000ms
  f1500("test - practice1.5"); // shows "test" after 1500ms

  function delay(f, ms) {

    return function () {
      setTimeout(() => f.apply(this, arguments), ms);
    };
  }
}

// Task 3: Debounce decorator
console.log("\n*** Task 3: Debounce decorator ***");
{
  let f = debounce(console.log, 1000);

  f("aaa");
  setTimeout(() => f("bbb"), 200);
  setTimeout(() => f("ccc"), 500);
  // debounced function waits 1000ms after the last call and then runs: console.log("ccc")

  function debounce(func, ms) {
    let timerId;

    return function () {
      clearTimeout(timerId);
      timerId = setTimeout(() => func.apply(this, arguments), ms);
      
    };
  }
}

// Task 4: Throttle decorator
console.log("\n*** Task 4: Throttle decorator ***");
{
  function f(a) {
    console.log(a);
  }

  // f1000 passes calls to f at maximul once per 1000 ms
  let f1000 = throttle(f, 1000);

  f1000(111); // shows 1
  f1000(222); // (throttling, 1000ms not out yet)
  f1000(333); // (throttling, 1000ms not out yet)

  // when 1000ms time out...
  // ...outputs 3, intermediate value 2 was ignored

  function throttle(func, ms) {
    let savedContext;
    let savedArgs;
    let isThrottle = false;

    function wrapper() {
      if (isThrottle) {
        savedContext = this;
        savedArgs = arguments;
        return;
      }

      isThrottle = true;

      func.apply(this, arguments);

      setTimeout( () =>  {
        isThrottle = false;
        if (savedArgs) {
          wrapper.apply(savedContext, savedArgs);
          savedContext = savedArgs = null;
        }
      }, ms);

    }

    return wrapper;
  }
}

// #endregion

// #region Timers
console.log("\n#### Timers ####");
// #endregion
