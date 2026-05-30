"use strict";

// #region Examples
console.log("#### Examples ####");
{
  // || (OR)
  console.log("\n*** || (OR)");
  console.log(true || true);   // true
  console.log(false || true);  // true
  console.log(true || false);  // true
  console.log(false || false); // false

  if (1 || 0) {
    console.log('truthy!');
  }

  let hour = 9;

  if (hour < 10 || hour > 18) {
    console.log('The office is closed.');
  }

  hour = 12;
  let isWeekend = true;

  if (hour < 10 || hour > 18 || isWeekend) {
    console.log('The office is closed.'); // it is the weekend
  }


  // OR "||" finds the first truthy value
  console.log('\n*** OR "||" finds the first truthy value');
  console.log(1 || 0); // 1 ( 1 is truthy)
  console.log(null || 1); // 1 (1 is the first truthy value)
  console.log(null || 0 || 1); // 1 (the first truthy value)
  console.log(undefined || null || 0); // 0 (all falsy, returns the last value)

  // getting the first truthy value from a list of variables or expressions
  let firstName = "";
  let lastName = "";
  let nickName = "SuperCoder";

  console.log(firstName || lastName || nickName || "Anonymous"); // SuperCoder

  // short-circuit evaluation
  true || console.log("not printed");
  false || console.log("printed");


  // && (AND)
  console.log("\n*** && (AND) ***");

  console.log(true && true);   // true
  console.log(false && true);  // false
  console.log(true && false);  // false
  console.log(false && false); // false

  hour = 12;
  let minute = 30;

  if (hour == 12 && minute == 30) {
    console.log('The time is 12:30');
  }

  if (1 && 0) { // evaluated as true && false
    console.log("won't work, because the result is falsy");
  }


  // AND "&&" finds the first falsy value
  console.log('AND "&&" finds the first falsy value');

  // if the first operand is truthy,
  // AND returns the second operand:
  console.log(1 && 0); // 0
  console.log(1 && 5); // 5

  // if the first operand is falsy,
  // AND returns it. The second operand is ignored
  console.log(null && 5); // null
  console.log(0 && "no matter what"); // 0

  // pass several values in a row
  console.log(1 && 2 && null && 3); // null

  // when the values are all truthy, the last one is returned
  console.log(1 && 2 && 3); // 3, the last one


  // ! (NOT)
  console.log("\n*** ! (NOT) ***");

  console.log(!true); // false
  console.log(!0); // false

  // double NOT !!
  console.log(!!"non-empty string"); // true
  console.log(!!null); // false

  // verbose way to convert values to boolean types
  console.log(Boolean("non-empty string")); // true
  console.log(Boolean(null)); // false
}

// #endregion


// #region Tasks
console.log("\n#### Tasks ####");
{
  // Task 1: What's the result of OR?
  console.log(null || 2 || undefined); // 2

  // Task 2: What's the result of OR'ed logs
  console.log(console.log(1) || 2 || console.log(3)); // 1, 2 (console.log returns undefined - falsy)
  // so 2 but first console.log(1) is evaluated and 1 is logged

  // Task 3: What is the result of AND?
  console.log(1 && null && 2); // null

  // Task 4: What is the result of AND'ed logs
  console.log(console.log(1) && console.log(2)); 1, undefined

  // Task 5: The result of OR AND OR
  console.log(null || 2 && 3 || 4); // 3

  // Task 6: Check the range between
  let age = 50;

  if (age >= 14 && age <= 90) {
    console.log(age);
  }

  // Task 7: Check the range outside
  if (!(age >= 14 && age <= 90)) {
    console.log(age);
  }

  if (age < 14 || age > 90) {
    console.log(age);
  }

  // Task 8: A question about "if"
  if (-1 || 0) console.log('first'); // "first"
  if (-1 && 0) console.log('second');
  if (null || -1 && 1) console.log('third'); // "third"


  // Task 9: Check the login
  let userName = prompt("Who's there?", "");

  if (userName === "Admin") {

    let password = prompt("Password?", "");

    if (password === "TheMaster") {
      console.log("Welcome!");
    } else if (password === '' || password === null) {
      console.log("Canceled");
    }
    else {
      console.log("Wrong password");
    }

  } else if (userName === '' || userName === null) {
    console.log("Canceled");
  } else {
    console.log("I don't know you");
  }
}

// #endregion