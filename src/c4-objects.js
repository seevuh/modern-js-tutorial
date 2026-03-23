"use strict";

// #region 4.1 Objects

function isEmpty(obj) {
  for (let key in obj) {
    // if the loop has started, there is a property
    return false;
  }
  return true;
};

function sumSalaries(salaries) {
  let sum = 0;

  for (let key in salaries) {
    // console.log(+salaries[key]);
    if (typeof salaries[key] === "number") {
      sum += salaries[key];
    }
    // if we want to convert non-numeric values to 0, we can use the unary plus operator:
    // sum += +salaries[key] || 0;
  }

  return sum;
}

// Function to multiply numeric properties by 2
function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] === "number") {
      obj[key] *= 2;
    }
  }
}
// #endregion

// #region 4.2 Object references and copying

// Cloning the object
{
  let user = {
    name: "John",
    age: 30,
  }

  let clone = {};

  for (let key in user) {
    clone[key] = user[key];
  }

  clone.name = "Pete";

  console.log(user.name); // John
  console.log(clone.name); // Pete
}

// Using Object.assign to clone an object
{
  let user = { name: "John" };

  let permissions1 = { canView: true };
  let permissions2 = { canEdit: true };

  // copies all properties from permissions1 and permissions2 into user
  Object.assign(user, permissions1, permissions2);

  // now user = { name: "John", canView: true, canEdit: true }
  console.log(user.name); // John
  console.log(user.canView); // true
  console.log(user.canEdit); // true


  // if the copied property name already exists, it will be overwritten
  let user2 = { name: "John" };

  Object.assign(user2, { name: "Pete" });

  console.log(user2.name); // Pete

  // we can also use Object.assign to perform a simple object cloning
  let user3 = {
    name: "John",
    age: 30,
  };

  let clone = Object.assign({}, user3);

  console.log(clone.name);
}

// Nested cloning
{
  let user = {
    name: "John",
    sizes: {
      height: 182,
      width: 50,
    },
  };

  let clone = Object.assign({}, user);

  console.log(user.sizes === clone.sizes); // true, the reference is copied

  // user and clone share the same sizes
  user.sizes.width = 60;
  console.log(clone.sizes.width); // 60


  let clone2 = structuredClone(user);

  console.log(user.sizes === clone2.sizes); // false, the reference is not copied

  // user and clone2 do not share the same sizes
  user.sizes.width = 70;
  console.log(clone2.sizes.width); // 60

  // structuredClone method supports circular references
  let user2 = {};
  user2.me = user2; // circular reference

  let clone3 = structuredClone(user2);
  console.log(clone3.me === clone3); // true, circular reference is preserved

  // function properties aren't supported by structuredClone
  // let test = structuredClone({
  //     f: function sayHi() {
  //         console.log("Hello");
  //     },
  // });

  // console.log(test.sayHi); // undefined

  // structuredClone only clones data, not functions
  // error, could not be cloned

}

// #endregion

// #region 4.3 Garbage collection

// Two references to the same object
{
  let user = { name: "John" };
  let admin = user;

  console.log(user === admin); // true
  console.log(user); // { name: "John" }
  console.log(admin); // { name: "John" }
}

// Interlinked objects
{
  function marry(man, woman) {
    man.wife = woman;
    woman.husband = man;

    return {
      father: man,
      mother: woman
    }
  }

  let family = marry({ name: "John" }, { name: "Ann" });

  delete family.father; // remove the reference
  delete family.mother; // remove the reference
  // now family only has reference to Ann


  // Unreachable island
  family = null; // remove the reference to the family object

}

// #endregion

// #region 4.4 Object methods, "this"

// Method examples
{
  let user = {
    name: "John",
    age: 30,
  };

  user.sayHi = function () {
    console.log("Hello, object method!");
  }

  user.sayHi(); // Hello!
}

{
  let user = {
    name: "John",
    age: 30,
  };

  function sayHi() {
    console.log("Hello, external function!");
  }

  user.sayHi = sayHi;
  user.sayHi(); // Hello!
}

{
  let user = {
    sayHi: function () {
      console.log("Hello, object literal!");
    }
  };

  let admin = {
    sayHi() {
      console.log("Hello, method shorthand in object literal!");
    }
  };

  user.sayHi(); // Hello!
  admin.sayHi(); // Hello!

}

// "this" in methods
{
  let user = {
    name: "John",
    age: 30,
    sayHi() {
      console.log(this.name);
    }
  };

  user.sayHi(); // John
}

{
  function sayHi() {
    console.log(this.name);
  }

  let user = { name: "John" };
  let admin = { name: "Admin" };

  user.f = sayHi;
  admin.f = sayHi;

  user.f(); // John
  admin.f(); // Admin
  admin["f"](); // Admin
}

{
  function sayHi() {
    console.log(this.name);
  }

  let user = { name: "John", sayHi };
  let admin = { name: "Admin", sayHi };

  user.sayHi(); // John
  admin.sayHi(); // Admin

  admin["sayHi"](); // Admin
}

// calling without an object: this == undefined
{
  function sayHi() {
    console.log(this);
  }

  sayHi(); // undefined

}

// Arrow functions do not have their own "this"
{
  let user = {
    firstName: "Ilya",
    sayHi() {
      let arrow = () => console.log(this.firstName);
      arrow();
    }
  };

  user.sayHi(); // Ilya
}

// Tasks
{
  function makeUser() {
    return {
      name: "John",
      ref: this,
    };
  }

  let user = makeUser();

  // console.log(user.ref.name); // What is the result?

  // an error

  // That's because rules that set 'this' do not look at object definition
  // Only the moment of call matters

  // Here the value of 'this' inside makeUser() is undefined, because it is called as a function,
  // not as a method with "dot" syntax

  // The value of 'this' is one for the whole function, code blocks and object literals do not affect it

  // So ref: this actually takes current 'this' of the function

  // We can rewrite the function and return the same 'this' with undefined value

  function makeUser2() {
    return this; // this time there's no object literal
  }

  // console.log(makeUser2().name); // Error: Cannot read property 'name' of undefined

  // As you can see the result of console.log( makeUser2().name ) is the same
  // as the result of console.log( user.ref.name ) from the previous example

  // Here's the opposite case:
  function makeUser3() {
    return {
      name: "John",
      ref() {
        return this;
      },
    };
  }

  let user3 = makeUser3();

  console.log(user3.ref().name); // John

  // Now it works, because user.ref() is a method
  // And the value of 'this' is set to the object before dot .
}

// Create a calculator
{
  let calculator = {
    read() {
      this.a = +prompt("a?", 0);
      this.b = +prompt("b?", 0);
    },
    sum() {
      return this.a + this.b;
    },
    mul() {
      return this.a * this.b;
    },
  };

  // calculator.read();
  // console.log(calculator.sum());
  // console.log(calculator.mul());
}

// Chaining
{
  let ladder = {
    step: 0,
    up() {
      this.step++;
      return this;
    },
    down() {
      this.step--;
      return this;
    },
    showStep: function () {
      console.log(this.step);
      return this;
    }
  };

  ladder
    .up()
    .up()
    .down()
    .showStep() // 1
    .down()
    .showStep(); // 0
}

// #endregion

// #region 4.5 Constructor, operator "new"

// Constructor function
{
  function User(name) {
    // this = {}; (implicitly)
    this.name = name;
    this.isAdmin = false;
    // return this; (implicitly)
  }

  let user = new User("Jack");

  console.log(user.name);
  console.log(user.isAdmin);
}

// new function() { ... }
{
  // create a function and immediately call it with new
  let user = new function () {
    this.name = "John";
    this.isAdmin = false;

    // .. ohter code
  };

}

// Constructor mode test: new.target
{
  function User() {
    console.log(new.target);
  }

  // without "new":
  User(); // undefined

  // with "new":
  new User(); // function User { ... }
}
{
  function User(name) {
    if (!new.target) {
      return new User(name);
    }

    this.name = name;
  }

  let john = User("John");
  console.log(john.name);
}

// Return from constructors
{
  function BigUser() {
    this.name = "John";

    return { name: "Godzilla" };
  }

  console.log(new BigUser().name);

  function SmallUser() {
    this.name = "John";

    return;
  }

  console.log(new SmallUser().name);
}

//Omitting parentheses
{
  function User() {
    this.name = "Testing omitting parentheses";
  }

  let user1 = new User;

  let user2 = new User();
  console.log(user1.name, user2.name);
}

// Methods in constructors
{
  function User(name) {
    this.name = name;

    this.sayHi = function () {
      console.log(`My name is: ${this.name}`);
    };
  }

  let john = new User("John");

  john.sayHi();
  console.log(john);
}

// Tasks

// Two funcions - one object
{
  let obj = {};

  function A() { return obj; }
  function B() { return obj; }

  console.log(new A() == new B());
}

// Create new Calculator
{
  function Calculator() {
    this.read = function () {
      this.a = +prompt("Enter the value of a", 0);
      this.b = +prompt("Enter the value of b", 0);
    };

    this.sum = function () {
      return this.a + this.b
    };

    this.mul = function () {
      return this.a * this.b;
    };
  }

  let calculator = new Calculator();
  // calculator.read();
  console.log(`Sum = ${calculator.sum()}`);
  console.log(`Mul = ${calculator.mul()}`);
}

// Create new Accumulator
{
  function Accumulator(startingValue) {
    this.value = startingValue;
    this.read = function () {
      this.value += +prompt("Enter value", 0);
    }
  }

  let accumulator = new Accumulator(1);

  // accumulator.read();
  // accumulator.read();

  console.log(accumulator.value);
}

// #endregion

// #region 4.6 Optional chaining '?.'

{
  let user = {}; // a user without "address" property

  // alert(user.address.street); // Error!
}

{
  let user = {};

  console.log(user.address ? user.address.street : undefined);

}

{
  let user = {};

  console.log(user.address && user.address.street && user.address.street.name);
}

// optional chaining
{
  let user = {};

  console.log(user?.address?.street);
}

//Short-circuiting
{
  let user = null;
  let x = 0;

  user?.sayHi(x++);
  console.log(x);
}

//Other variants: ?.(), ?.[]
{
  let userAdmin = {
    admin() {
      console.log("I am admin");
    }
  };

  let userGuest = {};

  userAdmin.admin?.(); // I am admin

  userGuest.admin?.(); // nothing happens (no such method)


  let key = "firstName";

  let user1 = {
    firstName: "John"
  };

  let user2 = null;

  console.log(user1?.[key]); // John
  console.log(user2?.[key]); // undefined

  let user = null;
  delete user?.name; // delete user.name if user exists
}

// we can use ?. for safe reading and deleting, but not writing
{
  let user = null;

  // user?.name = "John";
}
// #endregion

// #region 4.7 Symbol type

{
  let id0 = Symbol();

  let id = Symbol("id");

  let id1 = Symbol("id");
  let id2 = Symbol("id");

  console.log(id1 == id2); //false

  // alert(id); //Type Error: Cannot convert to a Symbol value to a string

  console.log(id); // this works, just outputs Symbol(id)

  // alert(id.toString()); // Symbol(id), now it works
  // alert(id.description); //id
}

// "Hidden" properties
{
  let user = {
    name: "John"
  };

  let id = Symbol("id");

  user[id] = 1;

  console.log(user[id]); // we can access the data using the symbol as the key
}

// Symbols in an object literal
{
  let id = Symbol("id");

  let user = {
    name: "John",
    [id]: 123 // not "id": 123
  };
}

// Symbols are skipped by for...in
{
  let id = Symbol("id");
  let user = {
    name: "John",
    age: 30,
    [id]: 123
  };

  for (let key in user) console.log(key); // name, age (no symbols)
  console.log(`Direct: ${user[id]}`); // Direct: 123
}

// Object.assing
{
  let id = Symbol("id");
  let user = {
    [id]: 123
  };

  let clone = Object.assign({}, user);

  console.log(clone[id]); //123
}

// Global symbols
{
  // Symbol.for
  let id = Symbol.for("id");

  let idAgain = Symbol.for("id");

  console.log(id === idAgain); // true

  // Symbol.keyFor
  let sym = Symbol.for("name");
  let sym2 = Symbol.for("id");

  console.log(Symbol.keyFor(sym)); // name
  console.log(Symbol.keyFor(sym2)); // id

  // undefined if symbol not in global registry
  let globalSymbol = Symbol.for("name");
  let localSymbol = Symbol("name");

  console.log(Symbol.keyFor(globalSymbol)); // name, global symbol
  console.log(Symbol.keyFor(localSymbol)); // undefined, not global

  console.log(localSymbol.description); //name
}

// #endregion

// #region 4.8 Object to primitive conversion

// string
{
  // // output
  // alert(obj);

  // // using object as a property key
  // anotherObj[obj] = 123;
}

// number
{
  // // explicit conversion
  // let num = Number(obj);

  // // maths (except binary plus)
  // let n = +obj; // unary plus
  // let delta = data1 - date2;

  // // less/greater comparison
  // let greater = user1 > user2;
}

// default
{
  // // binary plus uses the "default" hint
  // let total = obj1 + obj2;

  // // obj == number uses the "default" hint
  // if (user == 1) { ... };
}

// Symbol.toPrimitive
{
  let user = {
    name: "John",
    money: 1000,

    [Symbol.toPrimitive](hint) {
      console.log(`hint: ${hint}`);
      return hint == "string" ? '{name: "${this.name}"}' : this.money;
    }
  };

  // conversons demo:
  // alert(user); // hint: string -> {name: "John"}
  console.log(`${user}`); // hint: string -> {name: "John"}
  console.log(+user); // hint: number -> 1000
  console.log(user + 500); // hint: default -> 1500
}

// toString/valueOf
{
  let user = { name: "John" };

  console.log(`${user}`); // [object Object]
  console.log(user.valueOf() === user); // true
}
{
  let user = {
    name: "John",
    money: 1000,

    // for hint="string"
    toString() {
      return `{name: "${this.name}"}`;
    },

    // for hint="number" or "default"
    valueOf() {
      return this.money;
    }
  };

  console.log(`${user}`); // toString -> {name: "John"}
  console.log(+user); // valueOf -> 1000
  console.log(user + 500); // valueOf -> 1500
}

// toString - catch-all
{
  let user = {
    name: "John",

    toString() {
      return this.name;
    }
  };

  console.log(`${user}`); // toString -> John
  console.log(user + 500); // toString -> John500
}

// further conversions
{
  let obj = {
    toString() {
      return "2";
    }
  };

  console.log(obj * 2); // 4
  console.log(obj + 2); // 22
}

// #endregion
