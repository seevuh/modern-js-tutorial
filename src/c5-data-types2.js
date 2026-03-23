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

    range[Symbol.iterator] = function() {
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

        [Symbol.iterator]: function() {
            this.current = this.from;
            return this;
        },

        next () {
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
        console.log( char );
    }

    let str = '😂𝒳';
    for (let char of str) {
        console.log( char );
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
    console.log( slice(str, 1, 3) );
    // the native method does not support surrogate pairs
    console.log( str.slice(1, 3) ); // garbage
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
    console.log( map.get(1) ); // 'num1'
    console.log( map.get('1') ); // 'str1'

    console.log( map.size ); // 3

    console.log('\n*** Map can also use object as keys ***');
    let john1 = { name: "John" };

    // for every user, let's store their visits count
    let visitsCountMap = new Map();

    // john is the key for the map
    visitsCountMap.set(john1, 123);

    console.log( visitsCountMap.get(john1) ); // 123

    // Object
    console.log('\n*** visitsCountObj ***');
    let john2 = { name: "John" };
    let ben2 = { name: "Ben" };

    let visitsCountObj = {};

    visitsCountObj[ben2] = 234;
    visitsCountObj[john2] = 123;

    console.log( visitsCountObj["[object Object]"] );

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
        console.log( vegetable);  // cucumber, tomatoes, onion
    }

    // iterate over values (amounts)
    for (let amount of recipeMap.values()) {
        console.log(amount); // 500, 350, 50
    }

    // iterate over [key, value] entries
    for (let entry of recipeMap) {
        console.log( entry ); // cucumber, 500
    }

    // runs the function for each (key, value) pair
    recipeMap.forEach( (value, key, map) => {
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

    console.log( map.get('1') ); // str1

    let obj = {
        name: "John",
        age: 30
    };
    let map2 = new Map( Object.entries(obj) );
    console.log( map2.get('name') );


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


    let obj2 = Object.fromEntries( map3.entries() ); // make a plain object (*)

    console.log( obj2.orange );

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
    console.log( set.size ); // 3

    for (let user of set) {
        console.log( user.name ); 
    }

    // Iteration over Set
    console.log('\n*** Iteration over Set ***');

    let set2 = new Set(["oranges", "apples", "bananas"]);

    for (let value of set2 ) console.log(value);

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
        
        console.log( unique(values) );

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
        console.log( aclean(arr) );
        console.log( acleanObj(arr) );

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

        let array = [ john ];

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
        let obj = {/*let's say we have an object */};

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
        let obj = {/* some object */};

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
        console.log( visitedSet.has(john) ); // true

        // check if Mary visited?
        console.log( visitedSet.has(mary) ); // false

        john = null

        // visitedSet will be cleaned automatically
    }

    // Tasks
    {
        // 1
        let messages = [
            {text: "Hello", from: "John"},
            {text: "How goes?", from: "John"},
            {text: "See you soon", from: "Alice"}
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

    console.log( doublePrices.meat );

    // Tasks
    {
        console.log('\n*** Tasks ***');

        // 1
        let salaries = {
            "John": 100,
            "Pete": 300,
            "Mary": 250
        };

        console.log( sumSalaries(salaries) ); // 650

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

        console.log( count(user) ); // 2

        function count(obj) {
            return Object.keys(obj).length;
        }
    }
}
// #endregion

