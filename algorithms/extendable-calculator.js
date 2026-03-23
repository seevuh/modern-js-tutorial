"use stric";

function Calculator() {
  this.methods = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
  };

  this.calculate = (str) => {

    let arr = str.split(' ');

    let a = +arr[0];
    let op = arr[1];
    let b = +arr[2];

    if (isNaN(a) || isNaN(b) || !this.methods[op]) {
      return NaN;
    }

    return this.methods[op](a, b);
  };

  this.addMethod = (op, func) => {
    this.methods[op] = func;
  };
}

let calc = new Calculator;

console.log(calc.calculate("3 + 7"));
calc.addMethod("*", (a, b) => a * b);
calc.addMethod("/", (a, b) => a / b);
calc.addMethod("**", (a, b) => a ** b);

console.log(calc.calculate("2 ** 3"));