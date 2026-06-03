"use strict";

// #region Examples
console.log('#### Tasks ####');
{
  // function declaration
  console.log('\n*** function declaration ***');
  {
    function showMessage() {
      console.log('Hello everyone!');
    }

    showMessage();
    showMessage();
  }

  // local variables
  console.log('\n*** local variables ***');
  {
    function showMessage() {
      let message = "Hello, I'm JavaScript!"; // local variable

      console.log(message);
    }

    showMessage();
    // console.log(message); // <-- Error!
  }

  // Outer variables
  console.log('\n*** Outer variables ***');
  {
    let userName = 'John';

    function showMessage() {
      let message = 'Hello, ' + userName;
      console.log(message);
    }

    showMessage(); // Hello, John
  }

  // modify outer variable
  console.log('\n*** modify outer variable ***');
  {
    let userName = 'John';

    function showMessage() {
      userName = "Bob"; // changed the outer variable

      let message = 'Hello, ' + userName;
      console.log(message);
    }

    console.log(userName); // John, before the function call

    showMessage();

    console.log(userName); // Bob, the value was modified by the function
  }

  // shadowing: same-named local variable
  console.log('\n*** shadowing: same-named local variable ***');
  {
    let userName = 'John';

    function showMessage() {
      let userName = "Bob"; // declare a local variable

      let message = 'Hello, ' + userName; // Bob
      console.log(message);
    }

    // the function will create and use its own userName
    showMessage();

    console.log(userName); // John, unchanged, the function did not access the outer variable
  }


  // Parameters
  console.log('\n*** Parameters ***');
  {
    function showMessage(from, text) {
      console.log(from + ': ' + text);
    }

    showMessage('Ann', 'Hello!'); // Ann: Hello!
    showMessage('Ann', "What's up?");
  }

  // parameter values are copied
  console.log('\n*** parameter values are copied ***');
  {
    function showMessage(from, text) {
      from = '*' + from + '*'; // make "from" look nicer
      console.log(from + ': ' + text);
    }

    let from = 'Ann';

    showMessage(from, "Hello"); // *Ann*: Hello

    // the value of "from" is the same, the function modified a local copy
    console.log(from); // Ann
  }


  // Default values
  console.log('\n*** Default values ***');
  {
    function showMessage(from, text = "no text given") {
      console.log(from + ': ' + text);
    }

    showMessage("Ann"); // Ann: no text given

    // default value also jumps in if the parameter exists, but strictly equals undefined
    showMessage("Ann", undefined); // Ann: no text given
  }

  // complex expression
  {
    function showMessage(from, text = anotherFunction()) {
      // anotherFunction() only executed if no text given
      // its result becomes the value of text
    }
  }


  // Old JavaScript code
  console.log('\n*** Old JavaScript code ***');
  {
    function showMessage(from, text) {
      if (text === undefined) {
        text = 'no text given';
      }

      console.log(from + ": " + text);
    }

    showMessage("Ann");

    function showMessage2(from, text) {
      text = text || 'no text given';
      console.log(from + ': ' + text);
    }

    showMessage2("Ann OR");
  }

  // Alternative default parameters
  console.log('\n*** alternative default parameters ***');
  {
    function showCount(count) {
      // if count is undefined or null, show "unknown"
      console.log(count ?? "unknown");
    }

    showCount(0); // 0
    showCount(null); // unknown
    showCount(undefined); // unknown
    showCount(); // unknown
  }


  // Returning a value
  console.log('\n*** Returning a value ***');
  {
    // single return
    function sum(a, b) {
      return a + b;
    }

    let result = sum(1, 2);
    console.log(result);

    // many returns
    function checkAge(age) {
      if (age >= 18) {
        return true;
      } else {
        return confirm("Do you have permission from your parents?");
      }
    }

    let age = 18;

    if (checkAge(age)) {
      console.log('Access granted');
    } else {
      console.log('Access denied');
    }

    // return without a value
    function showMovie(age) {
      if (!checkAge(age)) {
        return;
      }

      console.log("Showing you the movie");
    }

    showMovie(age);

    // empty return or without it returns undefined
    function doNothing() { /* empty */ };

    console.log(doNothing() === undefined); // true

    function doNothing2() {
      return;
    }

    console.log(doNothing2() === undefined); // true
  }


  // Naming a function
  {
    /* 
    showMessage(..)
    getAge(..)
    calcSum(..)
    createForm(..)
    checkPermission(..)
    */
  }


  // Function == Comments
  console.log('\n*** Function == Comments ***');
  {
    function showPrimeNumbers(n) {
      nextPrime: for (let i = 2; i < n; i++) {
        for (let j = 2; j < i; j++) {
          if (i % j == 0) continue nextPrime;
        }

        console.log(i); // a prime
      }
    }

    function showPrimes(n) {
      for (let i = 2; i < n; i++) {
        if (!isPrime(i)) continue;

        console.log(i);
      }
    }

    function isPrime(n) {
      for (let i = 2; i < n; i++) {
        if (n % i == 0) return false;
      }

      return true;
    }

    showPrimeNumbers(10);
    showPrimes(21);
  }
}
// #endregion

// #region Tasks
console.log('\n#### Tasks ####');
{
  // Task 1: Is "else" required?
  console.log('\n*** Task 1: Is "else" required? ***');
  {
    function checkAge(age) {
      if (age > 18) {
        return true;
      } else {
        // ...
        return confirm('Did parents allow you?');
      }
    }

    function checkAge2(age) {
      if (age > 18) {
        return true;
      }

      // ...
      return confirm('Did parentts allow you?');
    }

    // both are same - else is not required
  }

  // Task 2: Rewrite the function using '?' or '||'
  console.log("\n*** Task 2: Rewrite the function using '?' or '||' ***");
  {
    function checkAge(age) {
      if (age > 18) {
        return true;
      } else {
        return confirm('Did parents allow you?');
      }
    }

    function checkAge2(age) {
      return (age > 18) ? true : confirm('Did parents allow you?');
    }

    function checkAge3(age) {
      return (age > 18) || confirm('Did parents allow you?');
    }

    console.log(checkAge(20));
    checkAge2(20);
    checkAge3(20);
  }

  // Task 3: Function min(a,b)
  console.log('\n*** Task 3: Function min(a, b) ***');
  {
    console.log(min(2, 5) == 2);
    console.log(min(3, -1) == -1);
    console.log(min(1, 1) == 1);

    function min(a, b) {
      return a < b ? a : b;
    }
  }

  // Task 4: Function pow(x,n)
  console.log('\n*** Task 4: Function pow(x,n) ***');
  {
    console.log(pow(3, 2) == 9);
    console.log(pow(3, 3) == 27);
    console.log(pow(1, 100) == 1);

    function pow0(x, n) {
      return x ** n;
    }

    function pow(x, n) {
      let result = 1;
      for (let i = 0; i < n; i++) {
        result *= x;
      }
      return result;
    }
  }
}
// #endregion