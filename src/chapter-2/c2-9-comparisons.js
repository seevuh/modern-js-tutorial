"use strict";

// #region Examples
console.log("#### Examples ####");
{
  // Boolean is the result
  console.log("\n*** Boolean is the result ***");
  console.log(2 > 1);  // true (correct)
  console.log(2 == 1); // false (wrong)
  console.log(2 != 1); // true (correct)

  // comparison result can be assigned to a variable
  let result = 5 > 4; // assign the result of the comparison
  console.log(result); // true


  // String comparison
  console.log("\n*** String comparison ***");
  console.log('Z' > 'A'); // true
  console.log('Glow' > 'Glee'); // true
  console.log('Bee' > 'Be'); // true


  // Comparison of different types
  console.log("\n*** Comparison of different types ***");
  console.log('2' > 1); // true, string '2' becomes a number 2
  console.log('01' == 1); // true, string '01' becomes a number 1

  // boolean values, true becomes 1 and false becomes 0
  console.log("*** boolean values ***");
  console.log(true == 1); // true
  console.log(false == 0); // true


  // A funny consequence
  console.log("\n*** A funny consequence ***");
  let a = 0;
  console.log(Boolean(a)); // false

  let b = "0";
  console.log(Boolean(b)); // true

  console.log(a == b); // true!


  // Strict equality
  console.log("\n*** Strict equality ***");
  // normal equality
  console.log(0 == false); // true
  console.log('' == false); // true
  // strict equality
  console.log(0 == false); // false, because the types are different


  // Comparison with null and undefined
  console.log("\n*** Comparison with null and undefined ***");
  console.log(null === undefined); // false
  console.log(null == undefined); // true

  // Strange result: null vs 0
  console.log("\n*** Strange results: null vs 0 ***");
  console.log(null > 0); // false
  console.log(null == 0); // false
  console.log(null >= 0); // true

  // An incomparable undefined
  console.log("\n*** An incomparable undefined ***");
  console.log(undefined > 0);  // false
  console.log(undefined < 0);  // false
  console.log(undefined == 0); // false
}
// #endregion

// #region Tasks
console.log("\n#### Tasks ####");
console.log("\n*** Comparisons ***");
console.log(5 > 4); // true
console.log("apples" > "pineapple"); // false
console.log("2" > "12"); // true (string comparison)
console.log(undefined == null); // true
console.log(undefined === null); // false
console.log(null == "\n0\n"); // false (null only == null & undefined)
console.log(null === +"\n0\n"); // false (stricty equality, different type)
// #endregion