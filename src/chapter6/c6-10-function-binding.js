"use strict";

// #region Examples
console.log("#### Examples ####");

// Losing "this"
// Solution 1: a wrapper
console.log(`\n*** Losing "this" - Solution 1: a wrapper ***`);
{
  let user = {
    firstName: "John",
    sayHi: function () {
      console.log(`1: Hello, ${this.firstName}!`);
    }
  };

  setTimeout(function () {
    user.sayHi();
  }, 100);

  // shorter version: arrow functions
  setTimeout(() => user.sayHi(), 200);
}
// slight vulnerability with solution 1: a wrapper
{
  let user = {
    firstName: "John",
    sayHi: function () {
      console.log(`1: Hello, ${this.firstName}!`);
    }
  };

  setTimeout(() => user.sayHi(), 300);

  // ...the value of user changes within 1 second
  user = {
    sayHi: function () {
      console.log("1: Another user in setTimeout!");
    }
  };
}


// Solution 2: bind
console.log(`\n*** Losing "this" - Solution 2: bind`);
{
  let user = {
    firstName: "John",
    sayHi: function () {
      console.log(`2: Hello, ${this.firstName}!`);
    },
    say: function (phrase) {
      console.log(`2: ${phrase}, ${this.firstName}!`);
    }
  };

  function func() {
    console.log(`2: ${this.firstName}`);
  }

  function funcPhrase(phrase) {
    console.log('2: ' + phrase + ', ' + this.firstName);
  }

  let funcUser = func.bind(user);
  funcUser();

  // with arguments
  let funcPhraseUser = funcPhrase.bind(user);
  funcPhraseUser("Hello");


  // object method
  let sayHi = user.sayHi.bind(user);

  // can run it without an object
  sayHi();

  setTimeout(sayHi, 1000);

  // object method bind with arguments
  let say = user.say.bind(user);

  say("Helloo");
  say("Bye");

  // even if the value of user changes within 1 second
  // sayHi uses the pre-bound value which is reference to the old user object
  user = {
    sayHi: function () {
      console.log("Another user in setTimeout!");
    }
  };
}

// Convenience method: bindAll
{
  let user = {
    sayHi: function () { console.log("Hello"); },
    sayBye: function () { console.log("Bye") }
  };

  for (let key in user) {
    if (typeof user[key] == 'function') {
      user[key] = user[key].bind(user);
    }
  }
}


// Partial functions
console.log("\n*** Partial function ***");
{
  function mul(a, b) {
    return a * b;
  }

  let double = mul.bind(null, 2);

  console.log(double(3));
  console.log(double(4));
  console.log(double(5));

  let triple = mul.bind(null, 3);

  console.log(triple(3));
  console.log(triple(4));
  console.log(triple(5));
}

// Going parital without context
console.log("\n*** Going partial without context ***");
{
  function partial(func, ...argsBound) {
    // using ...arguments instead of ...argsBound caused error
    // because arguments system variable
    return function (...args) {
      // original
      // return func.call(this, ...argsBound, ...args);
      return func.apply(this, argsBound, args);
    }
  }

  // Usage:
  let user = {
    firstName: "John",
    say: function (time, phrase) {
      console.log(`[${time}] ${this.firstName}: ${phrase}!`);
    }
  };

  // add a partial method with fixed time
  user.sayNow = partial(user.say, new Date().getHours() + ':' + new Date().getMinutes());

  // !Note: sayNow is a new function/method in user object
  console.log(user);

  user.sayNow("Hello");
}

// #endregion


// #region Tasks
console.log("\n### Tasks ###");
{
  // Task 1: Bound function as a method
  console.log("\n*** Task 1: Bound function as a method ***");
  {
    function f() {
      console.log(this);
    }

    let user = {
      g: f.bind(null)
    };

    user.g();
  }

  // Task 2: Second bind
  console.log("\n*** Task 2: Second bind ***");
  {
    function f() {
      console.log(this.name);
    }

    f = f.bind({ name: "John" }).bind({ name: "Ann" });

    f(); // John
    // A function cannot be re-bound
  }

  // Task 3: Function property after bind
  console.log("\n*** Task 3: Function property after bind ***");
  {
    function sayHi() {
      console.log(this.name);
    }
    sayHi.test = 5;

    let bound = sayHi.bind({
      name: "John"
    });

    console.log(bound.test); // undefined
    // the result of `bind` is another object. It does not have the `test` property
  }

  // Task 4: Fix a function that loses "this"
  console.log('\n*** Task 4: Fix a function that loses "this"');
  {
    function askPassword(ok, fail) {
      let password = prompt("Password?", '');
      if (password == "rockstar") ok();
      else fail();
    }

    let user = {
      name: 'John',

      loginOk: function () {
        console.log(`${this.name} logged in`);
      },

      loginFail: function () {
        console.log(`${this.name} failed to log in `);
      },
    };

    // askPassword(user.loginOk.bind(user), user.loginFail.bind(user));

    askPassword(() => user.loginOk(), () => user.loginFail());
    // Usually this also works ans looks good
    // It's a bit less reliable though in more complex situations where
    // 'user' varialbe might change after 'askPassword' is called,
    // but before the visitor answers and calls () => user.loginOk()
  }

  // Task 5: Partial application for login
  console.log("\n *** Task 5: Partial application for login ***");
  {
    function askPassword(ok, fail) {
      let password = prompt("Password?", '');
      if (password == "rockstar") ok();
      else fail();
    }

    let user = {
      name: 'John',

      login(result) {
        console.log(`${this.name} ${result ? 'logged in' : 'failed to log in'}`);
      }
    };

    // askPassword(user.login.bind(user, true), user.login.bind(user, false));
    askPassword(() => user.login(true), () => user.login(false));
  }

}

// #endregion

// #region Scheduler Results
console.log("\n### Scheduler Results ####");
// #endregion