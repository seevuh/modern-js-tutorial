"use strict";

// #region Chapter Examples

// Two ways of thinking
function pow1(x, n) {
  let result = 1;
  for (let i = 0; i < n; i++) {
    result *= x;
  }
  return result;
}

console.log(pow1(2, 3));

function pow2(x, n) {
  return n == 1 ? x : x * pow2(x, n - 1);
}

console.log(pow2(2, 3));

// Recursive traversals
let company = {
  sales: [{ name: 'John', salary: 1000 }, { name: 'Alice', salary: 1600 }],
  development: {
    sites: [{ name: 'Peter', salary: 2000 }, { name: 'Alex', salary: 1800 }],
    internals: [{ name: 'Jack', salary: 1300 }]
  }
};

// recursion
function sumSalaries(department) {
  if (Array.isArray(department)) {
    return department.reduce((sum, person) => sum + person.salary, 0);
  } else {
    let sum = 0;
    for (let subdep of Object.values(department)) {
      sum += sumSalaries(subdep);
    }
    return sum;
  }
}

console.log(sumSalaries(company));
// #endregion

// #region Tasks

// Task 1: Sum all numbers till the given one
function sumTo1(n) {
  let sum = 0;

  for (let i = n; i > 0; i--) {
    sum += i;
  }
  return sum;
}

function sumTo2(n) {
  return n == 1 ? 1 : n + sumTo(n - 1);
}

function sumTo(n) {
  return n * (n + 1) / 2;
}

// Task 2: Calculate factorial
function factorial(n) {
  return n == 0 ? 1 : n * factorial(n - 1);
  // return n ? n * factorial(n - 1) : 1;
}

// Task 3: Fibonacci numbers
function fib1(n) {
  if (n == 1 || n == 2) return 1;
  return fib1(n - 1) + fib1(n - 2);
}

function fib(n) {
  if (n == 1 || n == 2) return 1;

  let fnMinusOne = 1;
  let fnMinusTwo = 1;
  for (let i = 3; i <= n; i++) {
    // fn = fn-1 + fn-2; (but saving it to fn-1 for next iteration i.e, fn+1)
    [fnMinusOne, fnMinusTwo] = [fnMinusOne + fnMinusTwo, fnMinusOne]
  }
  return fnMinusOne;
}

// Task 4: Output a single-linked list
let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

// Hard coded to length 4: wrong for linked list above 4
function printList1(list) {
  for (let i = 0, next = ''; i < 4; i++, next += '.next') {
    console.log(eval(`list${next}.value`));
  }
}

// I didn't think of while -- EASY & IMPORTANT
function printList(list) {
  let tmp = list;

  while (tmp) {
    console.log(tmp.value);
    tmp = tmp.next;
  }
}

function printList2(list) {
  console.log(list.value);
  if (list.next) printList(list.next);
}

printList(list);

// Task 5: Output a single-linked list in the reverse order

// thought I need actual reverse linked list but just printing..
// so initially wrote to do that but can't do with recursion..
// also since object is by reference, it will modify the original
function reverseList(list) {
  let reverseList = list;
  let remainingList = list.next;
  reverseList.next = null;

  while (remainingList) {
    let node = remainingList;
    remainingList = remainingList.next;
    node.next = reverseList;
    reverseList = node;
  }
  return reverseList;
}

// solution on site
function printReverseList1(list) {
  let arr = [];
  let tmp = list;

  while (tmp) {
    arr.push(tmp.value);
    tmp = tmp.next;
  }

  for (let i = arr.length -1; i >= 0; i--) {
    console.log( arr[i] );
  }
}

printReverseList1(list);

// solution on site
function printReverseList(list) {
  if (list.next) {
    printReverseList(list.next);
  }
  console.log(list.value);
}

printReverseList(list);

// #endregion