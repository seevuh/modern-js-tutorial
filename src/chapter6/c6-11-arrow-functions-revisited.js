"use strict";

// #region Examples

// Arrow functions have no "this"
console.log('*** Arrow functions have no "this"');
{
  let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],

    showList: function () {
      this.students.forEach(
        student => console.log(`${this.title}: ${student}`)
      );
    }
  };

  group.showList();
}

// Regular function
console.log("\n*** Regular function ***");
{
  let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],

    showList: function () {
      let context = this;
      this.students.forEach( function (student) {
        console.log(`${context.title}: ${student}`);
      });
    }
  };

  group.showList();
}

// Arrows have no "arguments"
console.log('\n*** Arrows have no "arguments"');
{
  function defer(f, ms) {
    return function () {
      setTimeout(() => f.apply(this, arguments), ms);
    }
  }

  function sayHi(who) {
    console.log(`Hello, ${who}`);
  }

  let sayHiDeferred = defer(sayHi, 2000);
  sayHiDeferred("John");
}

// Regular function
{
  function defer(f, ms) {
    return function (...args) {
      let context = this;
      setTimeout( function () {
        f.apply(context, args)
      }, ms);
    };
  }

  function sayHi(who) {
    console.log(`Hello, ${who}`);
  }

  let sayHiDeferred = defer(sayHi, 2000);
  sayHiDeferred("John");
}

// #endregion