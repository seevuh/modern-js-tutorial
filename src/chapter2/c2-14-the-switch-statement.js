"use strict";

// #region Examples
console.log('#### Examples ####');
{
  // The "switch" statement
  console.log('\n*** The "switch" statement ***');
  {
    let a = 2 + 2;

    switch (a) {
      case 3:
        console.log('Too small');
        break;
      case 4:
        console.log('Exactly!');
        break;
      case 5:
        console.log('Too big');
        break;
      default:
        console.log("I don't know such values");
    }
  }

  // no break statement
  console.log('\n*** no break statement ***');
  {
    let a = 2 + 2;

    switch (a) {
      case 3:
        console.log('Too small');
      case 4:
        console.log('Exactly!');
      case 5:
        console.log('Too big');
      default:
        console.log("I don't know such values");
    }
  }

  // any expression can be a switch/case argument
  console.log('\n*** any expression can be a switch/case argument ***');
  {
    let a = "1";
    let b = 0;

    switch (+a) {
      case b + 1:
        console.log("this runs, because +a is 1, exactly equals b+1");
        break;

      default:
        console.log("this doesn't run");
    }
  }


  // grouping of "case"
  console.log('\n*** grouping of "case" ***');
  {
    let a = 3;

    switch (a) {
      case 4:
        console.log('Right!');
        break;

      case 3: // (*) grouped two cases
      case 5:
        console.log('Wrong!');
        console.log("Why don't you take a math class?");
        break;

      default:
        console.log("The result is strange. Really.");
    }
  }


  // Type matters
  console.log("\n*** Type matters ***");
  {
    let arg = '3'; // prompt ("Enter a value?");

    switch (arg) {
      case '0':
      case '1':
        console.log('One or zero');
        break;

      case '2':
        console.log('Two');
        break;

      case 3:
        console.log('Never executes!');
        break;
      default:
        console.log(`An unknown value: ${typeof arg} ${arg}`);
    }
  }
}
// #endregion

// #region Tasks
console.log('\n#### Tasks ####');
{
  // Task 1: Rewrite the "switch" into an "if"
  console.log('\n*** Task 1: Rewrite the "switch" into an "if" ***');
  {
    let browser = 'Firefox';

    switch (browser) {
      case 'Edge':
        console.log("You've got the Edge!");
        break;

      case 'Chrome':
      case 'Firefox':
      case 'Safari':
      case 'Opera':
        console.log('Okay we support these browsers too');
        break;

      default:
        console.log("We hope that this page looks ok!");
    }

    if (browser === 'Edge') {
      console.log("You've got the Edge!");
    } else if (browser === 'Chrome'
      || browser === 'Firefox'
      || browser === 'Safari'
      || browser === 'Opera') {
      console.log('Okay we support these browsers too');
    } else {
      console.log('We hope that this page looks ok!');
    }
  }

  // Task 2: Rewrite "if" into "switch"
  console.log('\n*** Task 2: Rewrite "if" into "switch" ***');
  {
    let a = +'2'; // +prompt('a?', '');

    if (a == 0) {
      console.log(0);
    }

    if (a == 1) {
      console.log(1);
    }

    if (a == 2 || a == 3) {
      console.log('2,3');
    }


    switch (a) {
      case 0:
        console.log(0);
        break;

      case 1:
        console.log(1);
        break;

      case 2:
      case 3:
        console.log('2,3');
        break;
    }
  }

}
// #endregion