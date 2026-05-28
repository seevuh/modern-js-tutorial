"use strict";

// #region Examples

console.log("### Examples ###");

// variable declaration and assignment
{
  let message;
  message = "Hello";
}

// multiline variant of variables declaration
{
  let user = 'John';
  let age = 25;
  let message = 'Hello';
}

// reassign variable
{
  let message;

  message = 'Hello!';

  message = 'World!';
}

// copy variable data from one into the other
{
  let hello = 'Hello world!';

  let message;

  message = hello;
}

// variable naming
{
  let userName; // camelCase
  let test123; // first character must not be a digit, only letters or symbols
  let $ = 1; // $ is allowed
  let _ = 2; // _ is also allowed

  let apple; // CASE MATTERS
  let APPLE; // two different varialbes

  let имя = '...'; // non-latin letters are allowed,
  let 我 = '...'; // but not recommended

  // can't user reserved names like let, class, return, function
}

// Constants
{
  const myBirthday = '18.04.1982'; // constants cannot be reassigned
}

// Uppercase constants
// For constants known before execution
{
  const COLOR_RED = "#F00";
  const COLOR_GREEN = "#0F0";
  const COLOR_BLUE = "#00F";
  const COLOR_ORANGE = "#FF7F00";

  // ...when we need to pick a color
  let color = COLOR_ORANGE;
  console.log(color); // #FF7F00
}

// constants calculated in run-time
{
  // const pageLoadTime =  /* time taken by a webpage to load */
}

// #endregion

// #region Tasks

console.log("\n### Tasks ###");
{
  // Task 1: Working with variables
  let admin;
  let name;
  name = "John";
  admin = name;
  console.log(admin);

  // Task2 : Giving the right name
  let ourPlanetName = "Earth";
  let currentUserName;

  const BIRTHDAY = '18.04.1982';
  // const age = someCode(BIRTHDAY);
}
// #endregion