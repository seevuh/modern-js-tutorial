"use strict";

// #region Examples
console.log('#### Examples ####');
{
  // arrow functions
  let sum = (a, b) => a + b;
  console.log(sum(1, 2));

  // one argument - no parentheses needed
  let double = n => n * 2;
  console.log(double(3));

  // no arguments - empty parentheses
  let sayHi = () => console.log("Hello!");
  sayHi();

  // arrow functions can be used in palce of function expressions
  let age = +"18";

  let welcome = (age < 18) ?
    () => console.log('Hello!') :
    () => console.log('Greetings!');

  welcome();

  // multiline arrow functions
  let sum2 = (a, b) => {
    let result = a + b;
    return result;
  };

  console.log(sum2(1, 2));
}
// #endregion

// #region Tasks
console.log('\n#### Tasks ####');
{
  // Task 1: Rewrite with arrow functions
  console.log('\n*** Task 1: Rewrite with arrow functions ***');

  function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
  }

  // ask(
  //   "Do you agree?",
  //   function () { console.log("You agreed."); },
  //   function () { console.log("You canceled the execution."); }
  // );

  ask(
    "Do you agree?",
    () => console.log("You agreed"),
    () => console.log("You canceled the execution")
  );

}
// #endregion