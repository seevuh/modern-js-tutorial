"use strict";

// #region Examples
console.log("#### Examples ####");
{
  // "unary", "binary", "operand"
  console.log('\n*** "unary", "binary", "operand" ***');
  let x = 1;
  x = -x;
  console.log(x); // -1, unary negation was applied

  // binary
  let y = 1, z = 3;
  console.log(y - z); // 2, binary minus subtracts values


  // maths
  console.log("\n*** maths: remainder, exponentiation ***");
  // remainder %
  console.log(5 % 2); // 1, the remainder of 5 divided by 2
  console.log(8 % 3); // 2, the remainder of 8 divided by 3
  console.log(8 % 4); // 0, the remainder of 8 divided by 4

  // exponentiation **
  console.log(2 ** 2); // 4
  console.log(2 ** 3); // 8
  console.log(2 ** 4); // 16
  // non-integer numbers
  console.log(4 ** (1 / 2)); // 2 (power of 1/2 is the same as a square root)
  console.log(8 ** (1 / 3)); // 2 (power of 1/3 is the same as a cubic root)


  // string concatenation with binary +
  console.log("\n*** string concatenation with binary +");
  let s = "my" + "string";
  console.log(s); // mystring

  console.log('1' + 2); // "12"
  console.log(2 + '1'); // "21"
  console.log(2 + 2 + '1'); // "41"
  console.log('1' + 2 + 2); // "122"

  // Other arithmetic operators work only with numbers
  console.log("\n*** other arithmetic operators work only with numbers ***");
  console.log(6 - '2'); // 4
  console.log('6' / '2');


  // numeric conversion, unary +
  console.log("\n*** numeric conversion, unary + ***");
  // No effects on numbers
  let a = 1;
  console.log(+a); // 1

  let b = -2;
  console.log(+b); // -2

  // converts non-numbers
  console.log(+true); // 1
  console.log(+""); // 0

  let apples = "2";
  let oranges = "3";

  console.log(apples + oranges); // "23"
  console.log(+apples + +oranges); // 5
  console.log(Number(apples) + Number(oranges)); // 5


  // assignment
  console.log("\n*** assignement ***");
  let c = 2 * 2 + 1;
  console.log(c); // 5

  // assignment = returns a value
  let d = 1;
  let e = 2;

  let f = 3 - (d = e + 1);

  console.log(d); // 3
  console.log(f); // 0

  // chaining assignments
  let g, h, i;
  g = h = i = 2 + 2;
  console.log(g, h, i);


  // modify-in-place
  console.log("\n*** modify-in-place ***");
  let n = 2;
  n = n + 5;
  n = n * 2;

  let m = 2;
  m += 5; // now n = 7
  m *= 2; // now n = 14

  console.log(n); // 14

  // same precedence as a normal assignment
  let o = 2;
  o *= 3 + 5; // right part evaluated first, same as o *= 8
  console.log(o); // 16

  // increment/decrement
  console.log("\n*** increment/decrement ***");
  let counter = 2;
  counter++;
  console.log(counter); // 3

  counter = 2;
  counter--;
  console.log(counter); // 1

  // prefix form
  counter = 1;
  let a1 = ++counter;
  console.log(a1);

  counter = 1;
  let a2 = counter++;
  console.log(a2);

  // no difference in which form to use if result is not used
  counter = 0;
  counter++;
  ++counter;
  console.log(counter); // 2, the lines above did the same

  // immediately use the result
  counter = 0;
  console.log(++counter); // 1

  // use previous value
  counter = 0;
  console.log(counter++); // 0

  // increment/decrement among other operators
  counter = 1;
  console.log(2 * ++counter); // 4

  counter = 1;
  console.log(2 * counter++); // 2

  // one line - one action
  counter = 1;
  console.log(2 * counter);
  counter++;

  // comma
  console.log("\n*** comma *** ");
  let p = (1 + 2, 3 + 4);
  console.log(p); // 7

  // comma examples
  for (let a = 1, b = 3, c = a * b; a < 10; a++) {
    console.log(c, a);
  }
}
// #endregion



// #region Tasks
console.log("\n#### Tasks ####");
{
  // Task 1: postfix & prefix forms
  let a = 1, b = 1;
  let c = ++a; // 2
  let d = b++; // 1

  console.log(a, b, c, d); // 2, 2, 2, 1


  // Task 2: assignment result
  let y = 2;

  let x = 1 + (y *= 2);
  console.log(y, x); // 4, 5

  // Task 3: Type conversions
  console.log("" + 1 + 0); // "10"
  console.log("" - 1 + 0); // -1
  console.log(true + false); // 1
  console.log(6 / "3"); // 2
  console.log("2" * "3"); // 6
  console.log(4 + 5 + "px"); // "9px"
  console.log("$" + 4 + 5); // "$45"
  console.log("4" - 2); // 2
  console.log("4px" - 2); // NaN
  console.log("  -9 " + 5); // "   -9   5"
  console.log("  -9 " - 5); // -14
  console.log(null + 1); // 1
  console.log(undefined + 1); // NaN
  console.log(" \t \n" - 2); // -2

  // Task 4: Fix the addition
  let a1 = "1";
  let a2 = "2";
  console.log(+a1 + +a2); // 3
}
// #endregion