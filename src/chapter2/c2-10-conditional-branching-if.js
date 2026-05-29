"use strict";

// #region Examples
console.log("#### Examples ####");
{
  // The "if" statement
  console.log('\n*** The "if" statement ***');
  let year = "2015"; // prompt result
  if (year == 2015) {
    console.log("That's correct!");
    console.log("You're so smart!");
  }


  // Boolean conversion
  console.log("\n*** Boolean conversion ***");
  if (0) {
    // falsy - never executes
  }

  if (1) {
    // truthy - always executes
  }


  // The "else" clause
  console.log('\n*** The "else" clause ***');
  let year2 = "2015"; // prompt result

  if (year2 == 2015) {
    console.log('You guessed it right!');
  } else {
    console.log('How can you be so wrong?');
  }


  // Several conditions: "else if"
  console.log('\n*** Several conditions: "else if" ***');
  let year3 = "2015";

  if (year3 < 2015) {
    console.log('Too early...');
  } else if (year3 > 2015) {
    console.log('Too late');
  } else {
    console.log('Exactly!');
  }


  // Conditional operator '?'
  console.log("\n*** Conditional operator '?' ***");
  let accessAllowed;
  let age = "20";

  if (age > 18) {
    accessAllowed = true;
  } else {
    accessAllowed = false;
  }

  console.log(accessAllowed);

  let accessAllowed2 = (age > 18) ? true : false;

  let accessAllowed3 = age > 18;


  // Multiple '?'
  console.log("\n*** Multiple '?' ***");
  age = "18";

  let message = (age < 3) ? 'Hi, baby!' :
    (age < 18) ? 'Hello!' :
      (age < 100) ? 'Greetings!' :
        'What an unusual age!';

  console.log(message);

  // using if..else:
  if (age < 3) {
    message = 'Hi, baby!';
  } else if (age < 18) {
    message = 'Hello!';
  } else if (age < 100) {
    message = 'Greetings!';
  } else {
    message = 'What an unusual age!';
  }


  // Non-traditional use of '?'
  console.log("\n*** Non-traditional use of '?' ***");
  let company = "Netscape";

  if (company == 'Netscape') {
    console.log('Right!');
  } else {
    console.log('Wrong.');
  }
}
// #endregion

// #region Tasks
console.log("\n#### Tasks ####");
{
  // Task 1: if (a string with zero)
  console.log("\n*** Task1: if (a string with zero) ***");
  if ("0") {
    console.log('Hello'); // yes
  }

  // Task 2: The name of JavaScript
  console.log("\n*** Task 2: The name of JavaScript ***");
  let jsOfficialName = "ECMAScript";

  if (jsOfficialName == "ECMAScript") {
    console.log("Right!");
  } else {
    console.log("You don't know? ECMAScript!");
  }

  // Task 3: Show the sign
  console.log("\n*** Task 3: Show the sign ***");

  let number = 2;

  if (number > 0) {
    console.log(1);
  } else if (number < 0) {
    console.log(-1);
  } else {
    console.log(0);
  }

  // Task 4: Rewrite 'if' into '?'
  console.log("\n*** Task 4: Rewrite 'if' into '?' ***");
  let result;
  let a = 2, b = 5;
  if (a + b < 4) {
    result = 'Below';
  } else {
    result = 'Over';
  }

  result = (a + b < 4) ? 'Below' : 'Over';

  console.log(result);


  // Task 5: Rewrite 'if..else' into '?'
  console.log("\n*** Task 5: Rewrite 'if...else' into '?' ***");
  let message;
  let login = 'Employee';

  if (login == 'Employee') {
    message = 'Hello';
  } else if (login == 'Director') {
    message = 'Greetings';
  } else if (login == '') {
    message = 'No login';
  } else {
    message = '';
  }

  message = (login == 'Employee') ? 'Hello' :
    (login == 'Director') ? 'Greetings' :
      (login == '') ? 'No login' :
        '';

  console.log(message);
}

// #endregion