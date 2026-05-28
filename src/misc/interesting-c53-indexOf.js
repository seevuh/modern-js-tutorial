"use strict";

// Find all occurrences of the substring
let str = `As sly as a fox, as strong as an ox`;
let target = `as`;

// implementation
let pos = 0;
while (true) {
  pos = str.indexOf(target, pos);
  if (pos == -1) break;
  console.log(pos);
  pos++;
}

// below algorithm caught my eye, I probably won't think to do like this..
// that's why it's I added this file
// same algorithm - shorter
pos = -1;
while ((pos = str.indexOf(target, pos + 1)) != -1) {
  console.log(pos);
}



// Testing

// let army = {
//   minAge: 18,
//   maxAge: 27,
//   canJoin(user) {
//     return user.age >= this.minAge && user.age < this.maxAge;
//   }
// };

// let users = [
//   { age: 16 },
//   { age: 20 },
//   { age: 23 },
//   { age: 30 }
// ];

// let soldiers = users.filter(army.canJoin, army);
// let soldiers2 = users.filter(function (user, index, array) {
//   return army.canJoin(user);
// });
// let soldiers3 = users.filter(user => army.canJoin(user));

// console.log(soldiers);
// console.log(soldiers2);
// console.log(soldiers3);




// ----------

// let arr1 = [1, 2, 3, 4, 5, 6, 7];
// let arr2 = [5, 6, 7, 8];
// let arrCopy = arr1.copyWithin(3, 0, 1);
// console.log(arrCopy, arr1, arr2);

// let arrM = [[1, 2], [3, 4], [5, 6], [7, 8]];
// console.log(arrM.flat(2));
// let flatMapArray = arrM.flatMap(x => x.map(y => y * 2));
// console.log(flatMapArray);
// console.log([1, 2, 3, 4].flatMap(x => x * 2));

// let range = {
//   from: 1,
//   to: 5,

//   [Symbol.iterator]() {
//     return {
//       current: this.from,
//       last: this.to,

//       next() {
//         if (this.current <= this.last) {
//           return { done: false, value: this.current++ };
//         } else {
//           return { done: true };
//         }
//       }
//     };
//   }

// };

// for (let num of range) {
//   console.log(num);
// }

// let str1 = "Hello";

// let iterator = str1[Symbol.iterator]();

// while (true) {
//   let result = iterator.next();
//   if (result.done) break;
//   console.log(result.value);
// }

// let str2 = '𝒳😂';

// console.log(str2.split(''));

// let arr = [1, 2, 3];
// arr.forEach(x => console.log(x));
// new Set([1, 2, 3]).values().forEach((v) => console.log(v));

// console.log(arr.keys().next(), arr.values().next(), arr.entries().next());
// console.log(Object.keys(arr), Object.values(arr), Object.entries(arr));

// let obj = { name: "John", age: 30 };
// console.log(Object.keys(obj));


// let newMap = new Set(arr.keys());
// console.log(newMap);

// console.log(Object.getOwnPropertySymbols(obj));
// console.log(Reflect.ownKeys(obj));

// let [a, b] = ['1'];
// console.log(a, b);

// let options = {
//   size: {
//     width: 100,
//     height: 200
//   },
//   items: ["Cake", "Donut"],
//   extra: true
// };

// let { size: { width, height }, items: [item1, item2], extra } = options;
// console.log(width, height, item1, item2, extra);

// function showOptions({
//   size: { width = 900, height = 500 },
//   items: [item1 = "test", item2 = "test2"],
//   extra = false
// } = { size: {}, items: []}) {
//   console.log(width, height, item1, item2, extra);
// }

// showOptions();

// let aMap = new Map([
//   ["name", "John"],
//   ["age", 30]
// ]);

// let [name, age] = aMap.values();
// console.log(name, age);