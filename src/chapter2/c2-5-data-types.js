"use strict"

// #region Examples

console.log("#### Examples ####");

// put any type in a varialbe
{
  let message = "hello";
  message = 123456;
}

// number
{
  let n = 123;
  n = 12.345;

  // Infinity
  console.log(1 / 0); // Infinity
  console.log(Infinity); // Infinity

  // NaN
  console.log("not a number" / 2); // NaN, such divisions is erroneous

  // NaN is sticky
  console.log(NaN + 1); // NaN
  console.log(3 * NaN); // NaN
  console.log("not a number" / 2 - 1); // NaN
}

// bigint
{
  // below two numbers (right above the safe range) are the same:
  console.log(9007199254740991 + 1); // 9007199254740992
  console.log(9007199254740991 + 2); // 9007199254740992

  // bigint
  const bigInt = 123456789012345678901234567890n;
}

// string
{
  // quotes
  let str = "Hello";
  let str2 = 'Single quotes are ok too';
  let phrase = `can embed another ${str}`;

  // backticks
  let name = "John";
  console.log(`Hello, ${name}!`); // Hello, John!
  console.log(`the result is ${1 + 2}`); // the result is 3
}

// boolean (logical type)
{
  let nameFieldChecked = true; // yes, name field is checked
  let ageFieldChecked = false; // no, age field is not checked

  // boolean values also come as a result of comparisons
  let isGreater = 4 > 1;
  console.log(isGreater); // true ( the comparison result is "yes")
}

// the "null" value
{
  let age = null;
}

// the "undefined" value
{
  let age;
  console.log(age); // shows "undefined"

  // explicitly assign undefined
  let age1 = 100;

  age1 = undefined;
  console.log(age1);
}

// tye typeof operator
{
  typeof undefined; // undefined

  typeof 0; // "number"

  typeof 10n; // "bigint"

  typeof true; // "boolean"

  typeof "foo"; // "string"

  typeof Symbol("id"); // "symbol"

  typeof Math; // "object"

  typeof null; // "object" (*)

  typeof alert; // "function" (**)
}
// #endregion


// #region Tasks
console.log("\n#### Tasks ####");
{
  let name = "Ilya";

  console.log('hello ${1}'); // hello 1
  console.log(`hello ${"name"}`); // hello name
  console.log(`hello ${name}`); // hello Ilya
}
// #endregion