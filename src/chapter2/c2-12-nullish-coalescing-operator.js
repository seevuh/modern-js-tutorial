"use strict";

// #region Examples
console.log("#### Examples ####");
{
  let user;
  console.log(user ?? "Anonymous");

  user = "John";
  console.log(user ?? "Anonymous");

  let firstName = null;
  let lastName = null;
  let nickName = "Supercoder";

  // show the first defined value:
  console.log(firstName ?? lastName ?? nickName ?? "Anonymous"); // Supercoder

  // shows the first truthy value:
  console.log(firstName || lastName || nickName || "Anonymous"); // Supercoder

  // useful case when we want to consider falsy default vlaues
  let height = 0;
  console.log(height || 100); // 100
  console.log(height ?? 100); // 0


  // precedence
  height = null;
  let width = null;

  // impartant: use parentheses
  let area = (height ?? 100) * (width ?? 50);
  console.log(area); // 5000

  // without parentheses
  area = height ?? 100 * width ?? 50;
  console.log(area);

  // ...works this way (not what we want):
  area = height ?? (100 * width) ?? 50;
  console.log(area);


  // using ?? with && or || - JavaScript forbids
  // let x = 1 && 2 ?? 3; // Syntax error

  let x = (1 && 2) ?? 3; // Works
  console.log(x); // 2
}
// #endregion