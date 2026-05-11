// "use strict";

// Think of 'this' as asking "Who is doing this action?"
function introduce() {
  console.log(`Hello, I'm ${this.name}`);
}
// The answer depends on who calls the function


// Rule 1: Explict Binding - Taking Control
console.log("*** Rule1: Explicit Binding - Taking Control ***");
{
  // Using call()
  {
    const person1 = {
      name: "Alice",
      age: 30
    };

    const person2 = {
      name: "Bob",
      age: 25
    };

    function greet(greeting, punctuation) {
      console.log(`${greeting}, I'm ${this.name} and I'm ${this.age} years old${punctuation}`);
    }
    // Using call() to explicitly set 'this' to person1
    greet.call(person1, "Hello", "!");

    // Using call() to explicitly set 'this' to person2
    greet.call(person2, "Hi", ".");
  }

  // Using apply()
  {
    const student = {
      name: "Sarah",
      grades: [85, 92, 78, 96]
    };

    function calculateAverage(subject, semester) {
      const average = this.grades.reduce((sum, grade) => sum + grade, 0) / this.grades.length;
      console.log(`${this.name}'s average in ${subject} for ${semester} is ${average.toFixed(1)}`);
      return average;
    }

    // Using apply() with arguments as an array
    calculateAverage.apply(student, ["Mathematics", "Fall 2024"]);

    // Equivalent using call()
    calculateAverage.call(student, "Mathematics", "Fall 2024");
  }

  // Using bind()
  {
    const car = {
      brand: "Tesla",
      model: "Model 3",
      year: 2023
    };

    function displayInfo() {
      console.log(`This is a ${this.year} ${this.brand} ${this.model}`);
    }

    // Create a bound function
    const showCarInfo = displayInfo.bind(car);

    // Now showCarInfo will always use 'car' as 'this'
    showCarInfo();

    // Even if we try to call it differently, 'this' remains bound to 'car'
    const anotherCar = { brand: "BMW", model: "X3", year: 2022 };
    showCarInfo.call(anotherCar);

    // displayInfo function still works with call because it's untouched
    displayInfo.call(anotherCar);
  }
  // Partial Application with bind()
  {
    function multiply(a, b, c) {
      console.log(`${this.name} calculated: ${a} x ${b} x ${c} = ${a * b * c}`);
      return a * b * c;
    }

    const calculator = { name: "SuperCalc" };

    // Bind 'this' and the first argument
    const multiplyByTwo = multiply.bind(calculator, 2);

    multiplyByTwo(3, 4);
    multiplyByTwo(5, 6);
  }
}


// Rule 2: Implicit Binding - The Natural Way
console.log("\n *** Rule 2: Implicit Binding - The Natural Way ***");
{
  const restaurant = {
    name: "Mario's Pizza",
    localtion: "New York",
    chef: "Mario",

    welcomeGuest: function () {
      console.log(`Welcome to ${this.name} in ${this.location}!`);
    },

    cookPizza: function (toppings) {
      console.log(`${this.chef} at ${this.name} is cooking pizza with ${toppings}`);
    }
  };

  // Implicit binding - 'this' refers to the restaurant object
  restaurant.welcomeGuest();
  restaurant.cookPizza("pepperoni and mushrooms");


  // Nested Objects
  const company = {
    name: "TechCorp",
    departments: {
      name: "Engineering",
      head: "Jane Smith",
      introduce: function () {
        console.log(`This is the ${this.name} department, led by ${this.head}`);
      }
    }
  };

  // 'this' refers to the departments object, not the company object
  company.departments.introduce();



  // lost context
  const timer = {
    seconds: 0,
    timerId: 0,

    tick: function () {
      this.seconds++;
      console.log(`Timer: ${this.seconds} seconds`);
    },

    start: function () {
      this.timerId = setInterval(this.tick, 1000);
    },

    startCorrect: function () {
      this.timerId = setInterval(this.tick.bind(this), 1000);

      // this.timerId = setInterval(() => this.tick(), 100);
    },

    stop: function () {
      setTimeout(() => clearTimeout(this.timerId), 1000)
    }
  };

  // timer.start();
  timer.startCorrect();
  timer.stop();
}


// Rule 3: New Binding - Constructor Functions
console.log("\n *** Rule 3: New Binding - Constructor Functions ***");
{
  function Person(name, age, profession) {
    // 'this' refers to the new object being created
    this.name = name;
    this.age = age;
    this.profession = profession;

    this.introduce = function () {
      console.log(`Hi, I'm ${this.name}, a ${this.age}-year-old ${this.profession}`);
    };
  }

  // Creating new instances
  const alice = new Person("Alice", 28, "developer");
  const bob = new Person("Bob", 35, "designer");

  alice.introduce();
  bob.introduce();

  console.log(alice.name);
  console.log(bob.name);


  // What's happens with 'new'?
  function Car(make, model) {
    console.log(this);
    this.make = make;
    this.model = model;

    // JavaScript automatically returns 'this' (the new object)
  }

  const myCar = new Car("Toyota", "Camry");
  console.log(myCar);


  // Constructor Function Best Practices: realistic example
  function BankAccount(accountNumber, initialBalance) {
    this.accountNumber = accountNumber;
    this.balance = initialBalance;
    this.transactions = [];

    this.deposit = function (amount) {
      this.balance += amount;
      this.transactions.push(`Deposit: +$${amount}`);
      console.log(`Deposited $${amount}. New balance: $${this.balance}`);
    };

    this.withdraw = function (amount) {
      if (amount <= this.balance) {
        this.balance -= amount;
        this.transactions.push(`Withdrawl: -$${amount}`);
        console.log(`Withdrew $${amount}. New balance: $${this.balance}`);
      } else {
        console.log(`Insufficient funds. Current balance: $${this.balance}`);
      }
    };
  }

  const account = new BankAccount("123456789", 1000);
  account.deposit(500);
  account.withdraw(200);
}

// Rule 4: Default Binding - The Fallback
console.log("\n*** Rule 4: Default Binding - The Fallback ***");
{
  // Non-strict mode
  function sayHello() {
    console.log(`Hello from ${this}`);
  }
  sayHello();

  // Strict mode
  function sayHelloStrict() {
    "use strict";
    console.log(`Hello from ${this}`);
  }
  sayHelloStrict();

  // Global Variables and 'this'
  var globalName = "Global User";

  function showGlobalName() {
    console.log(this.globalName);
  }
  showGlobalName();

  // In strict mode, this would be undefined
  function showGlobalNameStrict() {
    "use strict";
    console.log(this.globalName);
  }
  // showGlobalNameStrict();
}


// Arrow Functions - The Game Changer
{
  const team = {
    name: "Developement Team",
    members: ["Alice", "Bob", "Charlie"],

    // Regular function - 'this' refers to team object
    showTeamRegular: function () {
      console.log(`Team: ${this.name}`);

      // Problem: 'this' is lost in callback
      this.members.forEach(function(member) {
        console.log(`${member} is in ${this.name}`); // 'this' is undefined or global
      });
    },

    // Arrow function solution
    showTeamArrow: function () {
      console.log(`Team: ${this.name}`);

      // Arrow function inherits 'this' from parent scope
      this.members.forEach((member) => {
        console.log(`${member} is in ${this.name}`); // 'this' correctly refers to team
      });
    }
  };

  team.showTeamRegular();
  team.showTeamArrow();
}
// Arrow functions in Different Contexts
{
  // Global context
  const globalArrow = () => {
    console.log(this);
  };

  // Object method
  const obj = {
    name: "Object",

    regularMethod: function() {
      console.log(`Regular: ${this.name}`); // 'this' refers to obj

      const innerArrow = () => {
        // Inherits 'this' from regularMethod
        console.log(`Arrow inside regular: ${this.name}`);
      };

      innerArrow();
    },

    arrowMethod: () => {
      // 'this' refers to global, not obj
      console.log(`Arrow method: ${this.name}`);
    }
  };

  obj.regularMethod();
  obj.arrowMethod();
}

// Class Context and 'this
{
  class Vehicle {
    constructor(make, model, year) {
      this.make = make;
      this.model = model;
      this.year = year;
      this.mileage = 0;
    }

    drive(miles) {
      this.mileage += miles;
      console.log(`${this.make} ${this.model} has driven ${miles} miles. Total: ${this.mileage}`);
    }

    getInfo() {
      return `${this.year} ${this.make} ${this.model}`;
    }

    // Arrow function as class property (bound to instance)
    getInfoArrow = () => {
      return `${this.year} ${this.make} ${this.model}`;
    }
  }

  const car = new Vehicle("Honda", "Civic", 2024);
  car.drive(100);
  console.log(car.getInfo());

  // Method context loss and solution
  const getCarInfo = car.getInfo; // Loss context
  // getCarInfo();

  const getBoundInfo = car.getInfoArrow; // Arrow function preserves context
  console.log(getBoundInfo());
}

// Timers
console.log("\n*** Timers ***");
