"use strict";

// #region Examples
console.log("#### Examples ####");
{

  // The "while" loop
  console.log('\n*** The "while" loop ***');
  {
    let i = 0;
    while (i < 3) {
      console.log(i);
      i++;
    }

    //shorter
    while (i) {
      console.log(i);
      i--;
    }
  }


  // The "do...while" loop
  console.log('\n*** The "do...while" loop ***');
  {
    let i = 0;
    do {
      console.log(i);
      i++;
    } while (i < 3);
  }


  // The "for" loop
  console.log('\n*** The "for" loop ***');
  {
    for (let i = 0; i < 3; i++) {
      console.log(i);
    }

    // define variable outside of the loop
    let i = 0;
    for (i = 0; i < 3; i++) {
      console.log(i);
    }
    console.log(i);

    // skipping parts
    console.log("*** skipping parts ***");

    // omit begin
    i = 0;
    for (; i < 3; i++) {
      console.log(i);
    }

    // omit step
    i = 0;
    for (; i < 3;) {
      console.log(i++);
    }
  }


  // Breaking the loop
  console.log("\n*** Breaking the loop *** ");
  {
    let sum = 0;

    while (true) {
      let value = +"0";

      if (!value) break;

      sum += value;
    }

    console.log('Sum: ' + sum);
  }


  // Continue to the next iteration
  console.log('\n*** Continue to the next iteration ***');
  {
    // odd numbers
    for (let i = 0; i < 10; i++) {

      // if true, skip the remaining part of the body
      if (i % 2 == 0) continue;

      console.log(i);
    }
  }


  // Labels for break/continue
  console.log('\n*** Labels for break/continue ***');
  {
    outer: for (let i = 0; i < 3; i++) {

      for (let j = 0; j < 3; j++) {

        let input = '';

        if (!input) break outer;

        console.log('not hit');
      }
    }
    console.log('Done!');
  }
}
// #endregion


// #region Tasks
console.log("\n#### Tasks ####");
{
  // Task 1: Last loop value
  console.log('\n*** Task 1: Last loop value ***');
  {
    let i = 3;
    while (i) {
      console.log(i--);
    }
    console.log(i); // 0
  }

  // Task 2: Which values does the while loop show?
  console.log('\n*** Task 2: Which values does the while loop show? ***');
  {
    // the prefix form ++i
    let i = 0;
    while (++i < 5) console.log(i);
    // 1, 2, 3, 4

    // the postfix form i++
    i = 0;
    while (i++ < 5) console.log(i);
    // 1, 2, 3, 4, 5
  }

  // Task 3: Which values get shown by the "for" loop?
  console.log('\n*** Task 3: Which values get shown by the "for" loop? ***');
  {
    // the postfix form
    for (let i = 0; i < 5; i++) console.log(i);
    // 0, 1, 2, 3, 4

    // the prefix form
    for (let i = 0; i < 5; ++i) console.log(i);
    // 0, 1, 2, 3, 4
  }

  // Task 4: Output even numbers in the loop
  console.log('\n*** Task 4: Output even numbers in the loop ***');
  {
    for (let i = 2; i <= 10; i++) {
      if (i % 2 == 0) console.log(i);
    }
  }

  // Task 5: Replace "for" with "while"
  console.log('\n*** Task 5: Replace "for" with "while" ***');
  {
    for (let i = 0; i < 3; i++) {
      console.log(`number ${i}!`);
    }

    let i = 0;
    while (i < 3) {
      console.log(`number ${i++}!`);
    }
  }

  // Task 6: Repeat until the input is correct
  console.log('\n*** Task 6: Repeat until the input is correct ***');
  {
    let number;
    do {
      // number = +prompt("Enter number greater than 100", '');
      number = '101';

    } while (number <= 100 && num);
    console.log(number);
  }

  // Task 7: Output prime numbers
  console.log('\n*** Task 7: Output prime numbers ***');
  {
    let n = 10;
    nextPrime:
    for (let i = 2; i <= n; i++) {
      for (let j = 2; j < i; j++) {
        if (i % j == 0) continue nextPrime; // not a prime, go next i
      }

      console.log(i); // a prime
    }
  }

}
// #endregion