"use strict";

// #region Examples
console.log("#### Examples ####");
{
  // alert
  alert("Hello");

  // prompt
  let age = prompt('How old are you?', 100);
  alert(`You are ${age} years old!`);

  // confirm
  let isBoss = confirm("Are you the boss?");
  alert(isBoss);
}
// #endregion

// #region Tasks
console.log("\n#### Tasks ####");
{
  let name = prompt("What is your name?", '');
  alert(name);
}
// #endregion