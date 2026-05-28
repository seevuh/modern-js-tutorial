"use strict";

// #region Examples
console.log("#### Examples ####");
{
  // string conversion
  console.log("\n*** string conversion ***");

  let value = true;
  console.log(typeof value); // 

  value = String(value); // now value is a string "true"
  console.log(typeof value); // string


  // numeric conversion
  console.log("\n*** numeric conversion ***");

  console.log("6" / "2"); // 3, strings are converted to numbers

  // explicity conversion
  let str = "123";
  console.log(typeof str); // string

  let num = Number(str); // becomes a number 123
  console.log(typeof num); // number

  //NaN
  let age = Number("an arbitrary string instead of a number");
  console.log(age); // NaN, conversion failed

  // conversion rules - examples
  console.log(Number("   123   ")); // 123
  console.log(Number("123z"));      // NaN (error reading a number at "z") 
  console.log(Number(true));        // 1
  console.log(Number(false));       // 0


  // boolean conversion
  console.log("\n*** boolean conversion ***");

  console.log(Boolean(1)); // true
  console.log(Boolean(0)); // false

  console.log(Boolean("hello")); // true
  console.log(Boolean("")); // false

  // ! string with zero "0" and spaces " " is true
  console.log(Boolean("0")); // true
  console.log(Boolean(" ")); // true, spaces also true (any non-empty string is true)
}

// #endregion