"use strict";

// #region #### 5.6 Iterables ####
{
  console.log(`#### 5.6 Iterables ####\n\n`);

  // Symbol.iterator
  console.log(`*** Symbol.iterator ***`);

  let range = {
    from: 1,
    to: 5
  };

  range[Symbol.iterator] = function () {
    return {
      current: this.from,
      last: this.to,

      next() {
        if (this.current <= this.last) {
          return { done: false, value: this.current++ };
        } else {
          return { done: true };
        }
      },
    };
  };

  for (let num of range) {
    console.log(num);
  }

  // merging iterator with range object
  let range2 = {
    from: 1,
    to: 5,

    [Symbol.iterator]: function () {
      this.current = this.from;
      return this;
    },

    next() {
      if (this.current <= this.to) {
        return { done: false, value: this.current++ };
      } else {
        return { done: true };
      }
    }
  }

  // String is iterable
  console.log('\n*** String is iterable ***');
  for (let char of "test") {
    console.log(char);
  }

  let str = '😂𝒳';
  for (let char of str) {
    console.log(char);
  }

  // Calling an iterator explicitly
  console.log('\n*** Calling an iterator explicitly ***');
  str = "Hello";

  let iterator = str[Symbol.iterator]();

  while (true) {
    let result = iterator.next();
    if (result.done) break;
    console.log(result.value);
  }

  // Iterables and array-likes
  console.log('\n*** Iterables and array-likes ***');
  let arrayLike = { // has indexes and length => array-like
    0: "Hello",
    1: "World",
    length: 2,

    // [Symbol.iterator]: function () {
    //     return {
    //         index: 0,
    //         self: this,
    //         next: function () {
    //             if (this.index < this.self.length) {
    //                 return { done: false, value: this.self[this.index++] };
    //             } else {
    //                 return { done: true };
    //             }
    //         }
    //     }
    // },
  };

  // Error (no Symbol.iterator) or arrayLike is not iterable
  // if [Symbol.iterator] is not implemented
  // for (let item of arrayLike) {}

  // Array.from
  console.log('\n*** Array.from ***');

  let arr = Array.from(arrayLike);
  console.log(arr.pop());

  arr = Array.from(range);
  console.log(arr);

  arr = Array.from(range, num => num * num);
  console.log(arr);

  str = '😂𝒳';
  // splits str into array of characters
  let chars = Array.from(str);
  console.log(chars);

  // same as above, but above is shorter
  chars = [];
  for (let char of str) {
    chars.push(char);
  }
  console.log(chars);

  // surrogate-aware slice
  function slice(str, start, end) {
    return Array.from(str).slice(start, end).join('');
  }

  str = '😂𝒳𩷶';
  console.log(slice(str, 1, 3));
  // the native method does not support surrogate pairs
  console.log(str.slice(1, 3)); // garbage
}
// #endregion

// #region #### 5.7 Map and Set ####
{
  // Map
  console.log('\n*** Map ***');
  let map = new Map();

  map.set('1', 'str1'); // a string key
  map.set(1, 'num1'); // a numeric key
  map.set(true, 'bool1'); // a boolean key

  // remember the regular Object? it would convert keys to string
  // Map keeps the type, so these two are different:
  console.log(map.get(1)); // 'num1'
  console.log(map.get('1')); // 'str1'

  console.log(map.size); // 3

  console.log('\n*** Map can also use object as keys ***');
  let john1 = { name: "John" };

  // for every user, let's store their visits count
  let visitsCountMap = new Map();

  // john is the key for the map
  visitsCountMap.set(john1, 123);

  console.log(visitsCountMap.get(john1)); // 123

  // Object
  console.log('\n*** visitsCountObj ***');
  let john2 = { name: "John" };
  let ben2 = { name: "Ben" };

  let visitsCountObj = {};

  visitsCountObj[ben2] = 234;
  visitsCountObj[john2] = 123;

  console.log(visitsCountObj["[object Object]"]);

  // chaining
  map.clear();
  map.set('1', 'str1')
    .set(1, 'num1')
    .set(true, 'bool1');


  // Iteration over Map
  console.log('\n*** Iteration over Map ***');

  let recipeMap = new Map();
  recipeMap.set('cucumber', 500)
    .set('tomatoes', 350)
    .set('onion', 50);

  let a = recipeMap.set('carrot', 100);
  let b = recipeMap.get('carrot');
  let c = recipeMap.has('carrot');
  let d = recipeMap.delete('carrot');
  let e = recipeMap.size;
  // let f = recipeMap.clear();
  console.log(a, b, c, d, e);

  // iterate over keys (vegetables)
  for (let vegetable of recipeMap.keys()) {
    console.log(vegetable);  // cucumber, tomatoes, onion
  }

  // iterate over values (amounts)
  for (let amount of recipeMap.values()) {
    console.log(amount); // 500, 350, 50
  }

  // iterate over [key, value] entries
  for (let entry of recipeMap) {
    console.log(entry); // cucumber, 500
  }

  // runs the function for each (key, value) pair
  recipeMap.forEach((value, key, map) => {
    console.log(`${key}: ${value}`); // cucumber: 500 etc
  })

  // Object.entries: Map from Object
  console.log('\n*** Object.entries: Map from Object ***');
  // array of [key, value] pairs
  let map1 = new Map([
    ['1', 'str1'],
    [1, 'num1'],
    [true, 'bool1']
  ]);

  console.log(map.get('1')); // str1

  let obj = {
    name: "John",
    age: 30
  };
  let map2 = new Map(Object.entries(obj));
  console.log(map2.get('name'));


  // Object.fromEntries: Object from Map
  console.log('\n*** Object.fromEntries: Object from map ***');
  let prices = Object.fromEntries([
    ['banana', 1],
    ['orange', 2],
    ['meat', 4]
  ]);

  // now prices = { banana: 1, orange: 2, meat: 4 }
  console.log(prices.orange); // 2

  let map3 = new Map();
  map3.set('banana', 1);
  map3.set('orange', 2);
  map3.set('meat', 4);


  let obj2 = Object.fromEntries(map3.entries()); // make a plain object (*)

  console.log(obj2.orange);

  let obj3 = Object.fromEntries(map3);
  console.log(obj3);


  // Set
  console.log('\n*** Set ***');

  let set = new Set();

  let john = { name: "John" };
  let pete = { name: "Pete" };
  let mary = { name: "Mary" };

  // visits, some users come multiple times
  set.add(john);
  set.add(pete);
  set.add(mary);
  set.add(john);
  set.add(mary);

  // set keeps only unique values
  console.log(set.size); // 3

  for (let user of set) {
    console.log(user.name);
  }

  // Iteration over Set
  console.log('\n*** Iteration over Set ***');

  let set2 = new Set(["oranges", "apples", "bananas"]);

  for (let value of set2) console.log(value);

  set2.forEach((value, valueAgain, set) => {
    console.log(value, set);
  });

  // Tasks
  console.log('\n*** Tasks ***');
  {
    // 1
    function unique(arr) {
      return Array.from(new Set(arr));
    }

    let values = ["Hare", "Krishna", "Hare", "Krishna",
      "Krishna", "Krishna", "Hare", "Hare", ":-O"];

    console.log(unique(values));

    // 2
    function aclean(arr) {
      let map = new Map();
      for (let word of arr) {
        map.set(word.toLowerCase().split('').sort().join(''), word);
      }
      return Array.from(map.values());
    }

    function acleanObj(arr) {
      let obj = {};
      for (let word of arr) {
        let sorted = word.toLowerCase()
          .split('')
          .sort()
          .join('');
        obj[sorted] = sorted;
      }
      return Object.values(obj);
    }

    let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
    console.log(aclean(arr));
    console.log(acleanObj(arr));

    // 3
    let map = new Map();
    map.set("name", "John");

    let keys = Array.from(map.keys());

    keys.push("more");

    console.log(keys);
  }
}
// #endregion

// #region #### 5.8 WeakMap and WeakSet ####
{
  // garbage collection
  {
    let john = { name: "John" };

    // the object can be accessed, john is the reference to it

    // overwrite the reference
    john = null;
    // the object will be removed from memory
  }
  {
    let john = { name: "John" };

    let array = [john];

    john = null; // overwrite the reference

    // the object previously referenced by john is stored inside the array
    // therefore it won't be garbage-collected
    // we can get it as array[0]
  }

  // Map: garbage collection
  {
    let john = { name: "John" };

    let map = new Map();
    map.set(john, "...");

    john = null; // overwrites the reference

    // john is stored inside the map,
    // we can get it by using map.keys()
  }

  // WeakMap
  // only objects as keys, not primitive values
  {
    let weakMap = new WeakMap();

    let obj = {};

    weakMap.set(obj, "ok"); // works fine (object key)

    // can't use a string as the key
    // weakMap.set("test", "Whoops"); // Error, because "test" is not an object
  }
  // WeakMap: garbage collection
  {
    let john = { name: "John" };

    let weakMap = new WeakMap();
    weakMap.set(john, "...");

    john = null; // overwrite the reference

    // john is removed from memory!
  }

  // Examples
  // Use case: additional data
  //Map
  {
    // 📁 visitsCount.js
    let visitsCountMap = new Map(); // map: user => visits count

    // increase the visits count
    function countUser(user) {
      let count = visitsCountMap.get(user) || 0;
      visitsCountMap.set(user, count + 1);
    }

    // 📁 main.js
    let john = { name: "John" };

    countUser(john); // count his visits

    // later john leaves us
    john = null;
  }
  //WeakMap
  {
    // 📁 visitsCount.js
    let visitsCountMap = new WeakMap(); // weakmap: user => visits count

    // increase the visits count
    function countUser(user) {
      let count = visitsCountMap.get(user) || 0;
      visitsCountMap.set(user, count + 1);
    }
  }

  // Use case: caching
  // Map
  {
    // 📁 cache.js
    let cache = new Map();

    // calculate and remember the result
    function process(obj) {
      if (!cache.has(obj)) {
        let result = /* calculations of the result for */ obj;

        cache.set(obj, result);
        return result;
      }

      return cache.get(obj);
    }

    // Now we use process() in another file:

    // 📁 main.js
    let obj = {/*let's say we have an object */ };

    let result1 = process(obj); // calculated

    // ...later, from another place of the code...
    let result2 = process(obj); // remembered result taken from cache

    // ...later, when the object is not needed anymore:
    obj = null;

    console.log(cache.size); // 1 (Ouch! The object is still in cache, taking memory!)
  }

  // WeakMap
  {
    // 📁 cache.js
    let cache = new WeakMap();

    // calculate and remember the result
    function process(obj) {
      if (!cache.has(obj)) {
        let result = /* calculate the result for */ obj;

        cache.set(obj, result);
        return result;
      }

      return cache.get(obj);
    }

    // 📁 main.js
    let obj = {/* some object */ };

    let result1 = process(obj);
    let result2 = process(obj);

    // ...later, when the object is not needed anymore:
    obj = null;

    // Can't get cache.size, as it's a WeakMap,
    // but it's 0 or soon be 0
    // When obj gets garbage collected, cached data will be removed as well
  }


  // WeakSet
  {
    let visitedSet = new WeakSet();

    let john = { name: "John" };
    let pete = { name: "Pete" };
    let mary = { name: "Mary" };

    visitedSet.add(john); // John visited us
    visitedSet.add(pete); // Then Pete
    visitedSet.add(john); // John again

    // visitedSet has 2 users now

    // check if John visited?
    console.log(visitedSet.has(john)); // true

    // check if Mary visited?
    console.log(visitedSet.has(mary)); // false

    john = null

    // visitedSet will be cleaned automatically
  }

  // Tasks
  {
    // 1
    let messages = [
      { text: "Hello", from: "John" },
      { text: "How goes?", from: "John" },
      { text: "See you soon", from: "Alice" }
    ];

    let readMessages = new WeakSet();

    readMessages.add(messages[0]);
    readMessages.add(messages[1]);

    readMessages.add(messages[0]);

    console.log("Read message 0: " + readMessages.has(messages[0]));

    messages.shift();
    // now readMessages has 1 element (technically memory may be cleaned later)

    let isRead = Symbol("isRead");
    messages[0][isRead] = true;

    console.log(messages);

    // 2
    let messagesReadAt = new WeakMap();
    messagesReadAt.set(messages[0], new Date(2026, 2, 21));

    console.log(messagesReadAt);
  }
}
// #endregion

// #region #### 5.9 Object.keys, values, entries ####
{
  console.log('#### 5.9 Object.keys, values, entries ####');

  // Testing
  console.log('\n*** Testing ***');
  let a = {
    name: "John",
    age: 35
  };

  let b = ["John", "Pete", "Mary"];
  let c = new Map([
    ["name", "John"],
    ["age", 35]
  ]);

  console.log(b.keys().next(), b.values().next(), b.entries().next());
  console.log(c.keys(), c.values(), c.entries());
  console.log(Object.keys(a), Object.values(a), Object.entries(a));
  console.log(Reflect.ownKeys(a), Object.getOwnPropertySymbols(a));

  let d = new Set(b);
  // won't work, Object.fromEntries needs a key/value pair array
  // console.log(Object.fromEntries(d));

  // Loop over property values:
  console.log('\n*** loop over property values ***');
  let user = {
    name: "John",
    age: 30
  };

  for (let value of Object.values(user)) {
    console.log(value);
  }

  // Transforming objects
  console.log('\n*** Transforming objects ***');

  let prices = {
    banana: 1,
    orange: 2,
    meat: 4,
  };

  let doublePrices = Object.fromEntries(
    Object.entries(prices).map(entry => [entry[0], entry[1] * 2])
  );

  console.log(doublePrices.meat);

  // Tasks
  {
    console.log('\n*** Tasks ***');

    // 1
    let salaries = {
      "John": 100,
      "Pete": 300,
      "Mary": 250
    };

    console.log(sumSalaries(salaries)); // 650

    function sumSalaries(salaries) {

      let sum = 0;
      for (let salary of Object.values(salaries)) {
        sum += salary;
      }

      return sum;
    }

    // 2
    let user = {
      name: 'John',
      age: 30
    };

    console.log(count(user)); // 2

    function count(obj) {
      return Object.keys(obj).length;
    }
  }
}
// #endregion

// #region #### 5.10 Destructuring assignment ####
{
  console.log('\n#### Destructuring assignment');

  // Testing
  console.log('\n*** Testing ***');
  {
    let options = {
      title: "Menu"
    };

    let { width, height, title } = options;

    console.log(width, height, title);
  }
  {
    let options = {
      size: {
        width: 100,
        height: 200
      },
      items: ["Cake", "Donut"],
      extra: true
    };

    let {
      size: { width, height }, items: [item1, item2], title = "Menu"
    } = options;

    console.log(width, height, item1, title);
  }

  // Array destructuring
  {
    console.log('\n*** Array destructuring ***');

    let arr = ["John", "Smith"];

    let [firstName, surname] = arr;
    // let firstName = arr[0];
    // let surname = arr[1];
    console.log(firstName, surname);
  }
  {
    let [firstName, surname] = "John Smith".split(' ');
    console.log(firstName, surname);
  }

  // Ignore elements using commas
  {
    console.log('\n*** Ignore elements using commas');

    let [firstName, , title] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
    console.log(title);
  }

  // Works with any iterable on the right-side
  {
    console.log('\n*** Works with any iterable on the right-side');

    let [a, b, c] = "abc";
    let [one, two, three] = new Set([1, 2, 3]);

    console.log(a, b, c, one, two, three);
  }

  // Assign to anything on the left-side
  {
    console.log('\n*** Assign to anything on the left-side ***');

    let user = {};
    [user.name, user.surname] = "John Smith".split(' ');

    console.log(user.name, user.surname);
  }

  // Looping with .entries()
  {
    console.log('\n*** Looping with .entries() ***');

    let user = {
      name: "John",
      age: 30
    };

    // loop over the keys-and-values
    for (let [key, value] of Object.entries(user)) {
      console.log(`${key}:${value}`);
    }

    // Similar code for a Map is simpler, as it's iterable
    user = new Map();
    user.set("name", "John");
    user.set("age", 30);

    // Map iterates as [key, value] pairs, very convenient for destructuring
    for (let [key, value] of user) {
      console.log(`${key}:${value}`);
    }
  }

  // Swap varialbes trick
  {
    console.log('\n*** Swap variables trick ***');

    let guest = "Jane";
    let admin = "Pete";

    [guest, admin] = [admin, guest];

    console.log(`${guest} ${admin}`);
  }

  // The rest '...'
  {
    console.log("\n*** The rest '...' ***");

    let [name1, name2] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
    console.log(name1, name2);
  }
  // ...rest
  {
    let [name1, name2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

    console.log(rest[0], rest[1]);
    console.log(rest.length);
  }
  // ...titles
  {
    let [name1, name2, ...titles] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
  }

  // Default values
  {
    console.log('\n*** Default values ***');

    let [firstName, surname] = [];
    console.log(firstName, surname);
  }
  // default values
  {
    let [name = "Guest", surname = "Anonymous"] = ["Julius"];
    console.log(name, surname);
  }
  // default values can be complex expressions or even functions
  {
    let [name = prompt('name?'), surname = prompt('surname?')] = ["Julius", "Caesar"];
    console.log(name, surname);
  }

  // Object destructuring
  {
    console.log('\n### Object destructuring ###');

    let options = {
      title: "Menu",
      width: 100,
      height: 200
    };

    let { title, width, height } = options;
    console.log(title, width, height);
  }
  // The order does not matter
  {
    let { height, width, title } = { title: "Menu", height: 200, width: 100 };
  }
  // complex pattern matching between properties and variables
  {
    let options = {
      title: "Menu",
      width: 100,
      height: 200
    };

    // { sourceProperty: targetVariable}
    let { width: w, height: h, title } = options;
    // what: goes where

    console.log(title, w, h);
  }
  // set default values using "=" for missing properties
  {
    let options = {
      title: "Menu"
    };

    let { width = 100, height = 200, title } = options;
    console.log(title, width, height);
  }
  // Default values can be expressions or even function calls
  {
    let options = {
      title: "Menu",
      width: 100
    };

    let { width = prompt('width?'), title = prompt('title?') } = options;
    console.log(title, width);
  }
  // can combine both the colon and equality
  {
    let options = {
      title: "Menu"
    };

    let { width: w = 100, height: h = 200, title } = options;
    console.log(title, w, h);
  }
  // only extract what we need
  {
    let options = {
      title: "Menu",
      width: 100,
      height: 200
    };

    let { title } = options;
    console.log(title);
  }

  // The rest pattern "..."
  {
    let options = {
      title: "Menu",
      height: 200,
      width: 100
    };

    // title = property named title
    // rest = object with the rest of properties
    let { title, ...rest } = options;

    // now title="Menu", rest={height: 200, width: 100}
    console.log(rest.height, rest.width);
  }

  // Gotcha if there's no let
  {
    console.log("\n*** Gotcha if there's no let ***");
    let title, width, height;

    ({ title, width, height } = { title: "Menu", width: 200, height: 100 });
    console.log(title);
  }

  // Nested destructuring
  {
    console.log('\n*** Nested destructuring ***');

    let options = {
      size: {
        width: 100,
        height: 200
      },
      items: ["Cake", "Donut"],
      extra: true
    };

    let {
      size: {
        width,
        height
      },
      items: [item1, item2],
      title = "Menu"
    } = options;

    console.log(title, width, height, item1, item2);
  }

  // Smart function parameters
  {
    console.log('\n*** Smart function parameters ***');

    function showMenu(title = "Untitled", width = 200, height = 100, items = []) {
      // ...
    }

    showMenu("My Menu", undefined, undefined, ["Item1", "Item2"]);

    // we pass object to function
    let options = {
      title: "MY Menu",
      items: ["Item1", "Item2"]
    };

    function showMenu1({ title = "Untitled", width = 200, height = 100, items = [] }) {
      console.log(`${title} ${width} ${height}`);
      console.log(items);
    }
    showMenu1(options);

    // complex destructuring with nested objects and colon mapping
    function showMenu2({
      title = "Untitled",
      width: w = 100, // width goes to w
      height: h = 200, // height goes to h
      items: [item1, item2] // items first element goes to item1, second to item2
    }) {
      console.log(`${title} ${w} ${h}`);
      console.log(item1, item2);
    }
    showMenu2(options);

    // make {} the default value for the whole object of parameters
    function showMenu3({ title = "Menu", width = 100, height = 200 } = {}) {
      console.log(`${title} ${width} ${height}`);
    }
    showMenu3();
  }

  // Tasks
  {
    console.log('*** Tasks ***');

    // 1
    let user = {
      name: "John",
      years: 30
    };

    let { name, years: age, isAdmin = false } = user;
    console.log(name, age, isAdmin);

    // 2
    let salaries = {
      "John": 100,
      "Pete": 300,
      "Mary": 250
    };

    function topSalary(salaries) {
      let maxSalary = 0
      let maxName = null;

      for (let [name, salary] of Object.entries(salaries)) {
        if (maxSalary < salary) {
          maxSalary = salary;
          maxName = name;
        }
      }
      return maxName;
    }

    console.log(topSalary(salaries));
  }
}
// #endregion

// #region #### 5.11 Date and time ####
{
  console.log('\n#### 5.11 Date and time ####');

  // Testing
  {
    console.log('\n*** Testing ***');

    let date = new Date();
    // date.setUTCHours(15);
    let date2 = new Date(0);
    console.log(date2);
    console.log(date - date2);
    console.log(date.getTime() - date2.getTime());

    console.log(date.getHours(), date.getMinutes(), date.getUTCHours(), date.getUTCMinutes());
    console.log(date.getTime());
    console.log(date.getTimezoneOffset());


    function diffSubtract(date1, date2) {
      return date2 - date1;
    }

    function diffGetTime(date1, date2) {
      return date2.getTime() - date1.getTime();
    }

    function bench(f) {
      let date1 = new Date(0);
      let date2 = new Date();

      let start = Date.now();
      for (let i = 0; i < 100000; i++) f(date1, date2);
      return Date.now() - start;
    }

    let time1 = 0;
    let time2 = 0;

    // added for "heating up" prior to the main loop
    bench(diffSubtract);
    bench(diffGetTime);

    // run bench(diffSubtract) and bench(diffGetTime) each 10 times alternating
    // for (let i = 0; i < 10; i++) {
    //   time1 += bench(diffSubtract);
    //   time2 += bench(diffGetTime);
    // }


    console.log('Time of diffSubtract: ' + time1 + 'ms');
    console.log('Time of diffGetTime: ' + time2 + 'ms');

    let Dec31_1969 = new Date(-24 * 3600 * 1000);
    console.log(Dec31_1969);

    let date3 = new Date(Date.parse('2012-01-26T13:51:50.417-07:00'));
    console.log(date3, new Date());

    let date4 = new Date(Date.parse('Mar 23 2026'));
    console.log(date4);
  }

  // Creation
  {
    console.log('\n*** Creation ***');

    // new Date()
    let now = new Date();
    console.log(now);

    // new Date(milliseconds)
    let Jan01_1970 = new Date(0);
    console.log(Jan01_1970);

    let Jan02_1970 = new Date(24 * 3600 * 1000);
    console.log(Jan02_1970);

    let Dec31_1969 = new Date(-24 * 3600 * 1000);
    console.log(Dec31_1969);

    // new Date(datestring)
    let date = new Date("2017-01-26");
    console.log(date);

    // new Date(year, month, date, hours, minutes, seconds, ms)
    let date2 = new Date(2011, 0, 1, 2, 3, 4, 567);
    console.log(date2);
  }

  // Access date components
  {
    console.log('\n*** Access date components ***');

    let date = new Date();

    let year = date.getFullYear();
    let month = date.getMonth();
    let dayOfMonth = date.getDate();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let ms = date.getMilliseconds();
    let dayOfWeek = date.getDay();
    console.log(year, month, dayOfMonth, hours, minutes, seconds, ms, dayOfWeek);

    console.log('\n*** Access UTC date components ***');

    let yearUTC = date.getUTCFullYear();
    let monthUTC = date.getUTCMonth();
    let dayofMonthUTC = date.getUTCDate();
    let hoursUTC = date.getUTCHours();
    let minutesUTC = date.getUTCMinutes();
    let secondsUTC = date.getUTCSeconds();
    let msUTC = date.getUTCMilliseconds();
    let dayOfWeekUTC = date.getUTCDay();
    console.log(yearUTC, monthUTC, dayofMonthUTC, hoursUTC, minutesUTC, secondsUTC, msUTC, dayOfWeekUTC);

    let timestamp = date.getTime();
    console.log(timestamp);

    let timezoneOffset = date.getTimezoneOffset();
    console.log(timezoneOffset);
  }

  // Setting date components
  {
    console.log('\n*** setting date components ***');

    let date = new Date();
    console.log(date);
    console.log('\n');

    // set date/time components : normal
    date.setFullYear(2016, 0, 21);
    console.log(date);

    date.setMonth(7, 3);
    console.log(date);

    date.setDate(17);
    console.log(date);

    date.setHours(17, 40, 10, 333);
    console.log(date);

    date.setMinutes(20, 5, 111);
    console.log(date);

    date.setSeconds(59, 444);
    console.log(date);

    date.setMilliseconds(5200);
    console.log(date);

    date.setTime(0);
    console.log(date);

    // set date/time components : UTC
    console.log('\n*** setting date componenets : UTC ***');

    date.setUTCFullYear(2017, 9, 3);
    console.log(date);

    date.setUTCMonth(2, 9);
    console.log(date);

    date.setUTCDate(31);
    console.log(date);

    date.setUTCHours(15, 30, 45, 600);
    console.log(date);

    date.setUTCMinutes(45, 60, 750);
    console.log(date);

    date.setUTCSeconds(75, 900);
    console.log(date);

    date.setUTCMilliseconds(1050);
    console.log(date);
  }

  // Autocorrection
  {
    console.log('\n*** Autocorrection ***');

    let date = new Date(2013, 0, 32);
    console.log(date);

    date.setDate(date.getDate() + 2);
    console.log(date);

    date.setSeconds(date.getSeconds() + 70);
    console.log(date);

    date.setFullYear(2016, 0, 2);
    date.setDate(1);
    console.log(date);

    date.setDate(0);
    console.log(date);
  }

  // Date to number, date diff
  {
    console.log('\n*** Date to number, date diff ***');

    let date = new Date();
    console.log(+date);

    let start = new Date(); // start measuring time

    // do the job
    for (let i = 0; i < 100000; i++) {
      let doSomething = i * i * i;
    }

    let end = new Date(); // end measuring time

    console.log(`The loop took ${end - start} ms`);
  }

  // Date.now()
  {
    console.log('\n*** Date.now() ***');

    let timestamp = Date.now();
    console.log(timestamp);

    let start = Date.now(); // milliseconds count from 1 Jan 1970

    // do the job
    for (let i = 0; i < 100000; i++) {
      let doSomething = i * i * i;
    }

    let end = Date.now(); // done

    console.log(`The loop took ${end - start} ms`); // subract numbers, not dates
  }

  // Benchmarking
  {
    console.log('\n*** Benchmarking ***');

    function diffSubtract(date1, date2) {
      return date2 - date1;
    }

    function diffGetTime(date1, date2) {
      return date2.getTime() - date1.getTime();
    }

    function bench(f) {
      let date1 = new Date(0);
      let date2 = new Date();

      let start = Date.now();
      for (let i = 0; i < 100000; i++) f(date1, date2);
      return Date.now() - start;
    }

    console.log('Time of diffSubtract: ' + bench(diffSubtract) + 'ms');
    console.log(`Time of diffSubtract: ${bench(diffGetTime)} ms`);

    let time1 = 0;
    let time2 = 0;

    // bench(diffSubtract);
    // bench(diffGetTime);

    for (let i = 0; i < 10; i++) {
      // time1 += bench(diffSubtract);
      // time2 += bench(diffGetTime);
    }

    console.log(`Total time for diffSubtract: ${time1}`);
    console.log(`Total time for diffGetTime: ${time2}`);
  }

  // Date.parse from a string
  {
    console.log('\n*** Date.parse from a string ***');

    let ms = Date.parse('2012-01-26T13:51:50.417-07:00');
    console.log(ms);

    let date = new Date(Date.parse('2012-01-26T13:51:50.417-07:00'));
    console.log(date);
  }

  // Summary
  {
    console.log('\n*** Summary ***');
    console.log(`Loading started ${performance.now()}ms ago`);
  }

  // Tasks
  {
    console.log('\n*** Tasks ***');

    // 1
    let date = new Date("2012-02-20T03:12");
    date = new Date(2012, 1, 20, 3, 12);
    console.log(date);

    // 2
    function getWeekDay(date) {
      let daysOfWeek = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
      return daysOfWeek[date.getDay()];
    }
    date = new Date(2012, 0, 3);
    console.log(getWeekDay(date));

    // 3
    function getLocalDay(date) {
      let day = date.getDay();

      if (day == 0) { // weekday 0 (sunday) is 7 in european
        return 7;
      }

      return day;
    }

    // 4
    function getDateAgo(date, days) {
      let dateCopy = new Date(date);
      dateCopy.setDate(date.getDate() - days);
      return dateCopy.getDate();
    }

    date = new Date(2015, 0, 2);

    console.log(getDateAgo(date, 1)); // 1, (1 Jan 2015)
    console.log(getDateAgo(date, 2)); // 31, (31 Dec 2014)
    console.log(getDateAgo(date, 365)); // 2, (2 Jan 2014)

    // 5
    function getLastDayOfMonth(year, month) {
      let date = new Date(year, month + 1, 0);
      return date.getDate();
    }

    console.log(getLastDayOfMonth(2012, 1)); // 29

    // 6
    function getSecondsToday() {
      let date = new Date();
      return date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds();
    }

    console.log(getSecondsToday());

    // 7
    function getSecondsToTomorrow() {
      let now = new Date();
      let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);

      let diff = tomorrow.getTime() - now.getTime();

      let seconds = Math.floor(diff / 1000);
      return seconds;

    }

    console.log(getSecondsToTomorrow());

    // 8
    function formatDate(date) {
      let now = Date.now();
      let diff = now - date.getTime();

      if (diff < 1000) {
        return 'right now';
      } else if (diff < (60 * 1000)) {
        let seconds = Math.floor(diff / 1000);
        return `${seconds} sec. ago`;
      } else if (diff < (3600 * 1000)) {
        let minutes = Math.floor(diff / (60 * 1000));
        return `${minutes} min. ago`;
      } else {
        let dateOfMonth = date.getDate().toString().padStart(2, "0");
        let month = (date.getMonth() + 1).toString().padStart(2, "0");
        let year = date.getFullYear().toString().slice(-2);
        let hours = date.getHours().toString().padStart(2, "0");
        let minutes = date.getMinutes().toString().padStart(2, "0");

        return `${dateOfMonth}.${month}.${year} ${hours}:${minutes}`;
      }

    }

    console.log(formatDate(new Date(new Date - 1))); // "right now"
    console.log(formatDate(new Date(new Date - 30 * 1000))); // "30 sec. ago"
    console.log(formatDate(new Date(new Date - 5 * 60 * 1000))); // "5 min. ago"
    console.log(formatDate(new Date(new Date - 86400 * 1000))); // yesterday's date like 31.12.16 20:00

  }

}
// #endregion
