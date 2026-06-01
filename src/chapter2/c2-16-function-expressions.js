"use strict";

// #region Examples
console.log('#### Examples ####');

console.log('\n*** Function expressions ***');
{
  // Function Declaration
  function sayHi() {
    console.log("Hello");
  }

  // Function Expression
  let sayHiExp = function () {
    console.log("Hello");
  }

  // Function is a value
  let func = sayHi;

  func();
  sayHi();

  // Can also use Function Expression
  let funcExp = sayHiExp;
  funcExp();
  sayHiExp();
}

// Callback functions
console.log('\n*** Callback functions ***');
{
  function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }

  function showOk() {
    console.log("You agreed.");
  }

  function showCancel() {
    console.log("You canceled the execution.");
  }

  // usage: functions showOk, showCancel are passed as arguments to ask
  // ask("Do you agree?", showOk, showCancel);

  // ask(
  //   "Do you agree?",
  //   function () { console.log("You agreed."); },
  //   function () { console.log("You canceled the execution."); }
  // );
}

// Function Declarations is visible within the code block it's declared
// Using Function Expressions
console.log('\n*** Function Declarations block scope, using Function Expressions ***');
{
  let age = +"18";

  let welcome0;

  if (age < 18) {
    welcome0 = function () {
      console.log("Hello!");
    };
  } else {
    welcome0 = function () {
      console.log("Greetings!");
    };
  }

  // shorter version
  let welcome = (age < 18) ?
    function () { console.log("Hello!"); } :
    function () { console.log("Greetings!"); };

  welcome();
}
// #endregion