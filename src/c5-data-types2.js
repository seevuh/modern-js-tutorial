"use strict";

// #### 5.6 Iterables ####
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