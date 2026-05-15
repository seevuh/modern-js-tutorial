"use strict";

// #region Examples
console.log("\n#### Examples ####");
{
  // Rest parameters ...
  console.log("\n*** Rest parameters ... ***");
  {
    function sumAll(...args) {
      let sum = 0;

      for (let arg of args) sum += arg;

      return sum;
    }
    console.log(sumAll(1));
    console.log(sumAll(1, 2, 3));

    // 2nd example
    function showName(firstName, lastName, ...titles) {
      console.log(firstName + ' ' + lastName);
      console.log(titles[0]);
      console.log(titles[1]);
      console.log(titles.length);
    }
    showName("Julius", "Caesar", "Consul", "Imperator");
  }

  // The "argument" variable
  console.log('\n*** The "arguments" variable');
  {
    function showName() {
      console.log(arguments.length);
      console.log(arguments[0]);
      console.log(arguments[1]);
    }
    showName("Julius", "Caesar");
    showName("Ilya");
  }

  // Arrow functions do not have "arguments"
  // Takes them from outer "normal" function
  console.log('\n*** Arrow functions do not have "arguments" ***');
  {
    function f() {
      let showArg = () => console.log(arguments[0]);
      showArg();
    }
    f(1);
  }

  // Spread Syntax
  console.log("\n*** Spread Syntax ***");
  {
    let arr = [3, 5, 1];
    console.log(Math.max(arr)); // NaN
    console.log(Math.max(...arr)); // 5

    // combine the spread syntax with normal values
    let arr1 = [1, -2, 3, 4];
    let arr2 = [8, 3, -8, 1];
    console.log(Math.max(1, ...arr1, 2, ...arr2, 25));

    // merge arrays using spread syntax
    let arr3 = [8, 9, 15];
    let merged = [0, ...arr, 2, ...arr3];
    console.log(merged);

    // The spread syntax works with any iterables
    let str = "Hello";
    console.log([...str]);

    // The spread syntax works only with iterables
    // Array.from operates on both array-like and iterables
    console.log(Array.from(str));
  }

  // Copy an array/object
  console.log("\n*** Copy an array/object ***");
  {
    let arr = [1, 2, 3];

    let arrCopy = [...arr]; // spread the array into a list of parameters
    // then put the result into a new array

    // do the arrays have the same contents?
    console.log(JSON.stringify(arr) === JSON.stringify(arrCopy)); // true

    // are the arrays equal?
    console.log(arr === arrCopy); // false (not same reference)

    // modifying our initial array does not modify the copy:
    arr.push(4);
    console.log(arr);
    console.log(arrCopy);


    // Object Copy
    console.log("\n*** Object Copy ***");
    let obj = { a: 1, b: 2, c: 3 };

    // much shorter than let objCopy = Object.assign({}, obj); 
    let objCopy = { ...obj };

    // do the objects have the same contents?
    console.log(JSON.stringify(obj) === JSON.stringify(objCopy)); // true

    // are the objects equal?
    console.log(obj === objCopy); // false (not same reference)

    obj.d = 4;
    console.log(JSON.stringify(obj));
    console.log(JSON.stringify(objCopy));
  }

}
// #endregion