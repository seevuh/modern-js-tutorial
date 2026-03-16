"use strict";

// #region 5.1 Methods of primitives

// a primitive as an object
{
    let str = "Hello";

    console.log( str.toUpperCase() ); // HELLO

    let n = 1.23456;

    console.log( n.toFixed(2) ); // 1.23
}

// constructors String/Number/Boolean are for internal use only
{
    console.log( typeof 0 ); // number
    console.log( typeof new Number(0) ); // object

    //objects are always truthy in if
    let zero = new Number(0);
    if(zero) { // zero is true, because it's an object
        console.log("zero is truthy!?!");
    }

    // using the same functions String/Number/Boolean without
    // new is totally fine and useful thing
    let number = Number("123"); // convert a string to number
    console.log(number);

    let num = new Number(0);

    console.log(typeof 0, typeof num, `${num}`, +num, num );
}

// null/undefined have no methods
{
    // console.log(null.test);
}

// Tasks
{
    let str = "Hello";

    // str.test = 5;

    // console.log(str.test);
}
// #endregion

// #region 5.2 Numbers
console.log("\n#### 5.2 Numbers ####");
// More ways to write a number
{
    let billion = 1000000000;

    let billion_u = 1_000_000_000;

    let billion_e = 1e9;
    let seven3b = 7.3e9;

    let mcs = 0.000001;

    let mcs_e = 1e-6;

    let ms_e = 1e-3;
    let mc123_e = 1.23e-6;
    let twelve34_e = 1234e-2;
}

// Hex, binary and octal numbers
{
    // hex
    console.log( 0xff ); // 255
    console.log( 0xFF ); // 255

    // binary & octal
    let a = 0b1111_1111; // binary form of 255
    let b = 0o377; // octal form of 255
    console.log(a == b, a, b); // true, the same number 255 at both sides
}

// toString(base)
{
    let num = 255;
    console.log( num.toString(16) ); //ff
    console.log( num.toString(2) ); // 11111111
    console.log( 123456..toString(36) ); // 2n9c
}

// Rounding

{
    // multiply and divide
    let num_md = 1.23456;
    console.log( Math.round(num_md * 100) / 100 ); // 1.23456 -> 123.456 -> 123 -> 1.23

    // toFixed(n)
    let num_f = 12.34;
    console.log( num_f.toFixed(1) ); // "12.3"

    let num_f2 = 12.36;
    console.log( num_f2.toFixed(1) ); // "12.4"

    //add zeros
    let num_z = 12.34;
    console.log( num_z.toFixed(5) ); // "12.34000", added zeroes to make exactly 5 digits
    console.log( +num_z.toFixed(5) ); // convert to number
}

// Imprecise calculations
{
    console.log( 1e500 ); // Infinity

    console.log(0.1 + 0.2 == 0.3 ); // false

    console.log( 0.1 + 0.2 ); // 0.3000000000000004

    console.log( 0.1.toString(2) ); // 0.00011001100...
    console.log( 0.2.toString(2) ); // 0.001100110011...
    console.log( (0.1 + 0.2).toString(2) ); // 0.0100110011001100...

    console.log( 0.1.toFixed(20) ); // 0.100000000000000555

    let sum = 0.1 + 0.2;
    console.log( sum.toFixed(2) ); // "0.30"
    console.log( +sum.toFixed(2) ); // 0.3

    console.log( (0.1 * 10 + 0.2 * 10) / 10 ); // 0.3
    console.log( (0.28 * 100 + 0.14 * 100) / 100 ); // 0.420000000000001

    //the funny thing
    // self-increasing number
    console.log( 999_999_999_999_999_9 );
}

// Tests: isFinite and isNaN
{
    console.log( isNaN(NaN) ); // true
    console.log( isNaN("str") ); // true

    console.log( NaN === NaN, NaN == NaN );

    console.log( isFinite("15") ); // true
    console.log( isFinite("str") ); // false
    console.log( isFinite(Infinity) ); // false

    // let num = +prompt("Enter a number", '');
    let num = +"90";

    console.log( isFinite(num) );
}

// Number.isNaN and Number.isFinite
{
    // Number.isNaN
    console.log("\n*** Number.isNaN ***");
    console.log( Number.isNaN(NaN) ); // true
    console.log( Number.isNaN("str" / 2) ); // true, here math operator converts it to NaN

    console.log( Number.isNaN("str") ); // false
    console.log( isNaN("str") ); // true

    // Number.isFinite
    console.log("\n*** Number.isFinite ***");
    console.log( Number.isFinite(123) ); // true
    console.log( Number.isFinite(Infinity) ); // false
    console.log( Number.isFinite(2 / 0) ); // false

    console.log( Number.isFinite("123") ); // false
    console.log( isFinite("123") ); // true, converts
}

// Comparison with Object.is
{
    console.log("\n*** Comparison with Object.is ***");
    console.log( Object.is(NaN, NaN) === true );
    console.log( Object.is(0, -0) === false );
}

// parseInt and parseFloat
{
    console.log("\n*** parseInt and parseFloat ***");
    console.log( +"100px" ); // NaN

    console.log( parseInt('100px') ); // 100
    console.log( parseFloat('12.5em') ); // 12.5

    console.log( parseInt('12.3') ); // 12
    console.log( parseFloat('12.3.4') ); // 12.3

    console.log( parseInt('a123') ); // NaN
}
// The second argument of parseInt(str, radix)
{
    console.log("\n*** second argument of parseInt ***");
    console.log( parseInt('0xff', 16) ); // 255
    console.log( parseInt('ff', 16) ); // 255

    console.log( parseInt('2n9c', 36) ); // 123456
}

// Other math functions
{
    console.log("\n*** Other math functions ***");

    // Math.random
    console.log("\n Math.random");
    console.log( Math.random() );
    console.log( Math.random() );
    console.log( Math.random() );

    // Math.max(a, b, c...) and Math.min(a, b, c...)
    console.log("\n Math.max and Math.min");
    console.log( Math.max(3, 5, -10, 0, 1) ); // 5
    console.log( Math.min(1,2) ); // 1

    // Math.pow(n, power)
    console.log("\n Math.pow");
    console.log( Math.pow(2, 10) ); // 2 in power 10 = 1024
}

// Tasks
const Chapter_5_2_Tasks = {
    // Sum numbers from the visitor
    sumNumbers: () => {
        // let a = +prompt("Enter a", "");
        // let b = +prompt("Enter b", "");

        // console.log(a + b);
    },

    // Why 6.35.toFixed(1) == 6.3?
    toFixed6_35: () => {
        // Internally the decimal fraction 6.35 is an endless binary. 
        // As always in such cases, it is stored with a precision loss
        console.log( 6.35.toFixed(20) ); // 6.3499999999999964473
        // The precision loss can cause both increase and decrease of a number
        // In this particular case the number becomes a tiny bit less,
        // That's why it rounded down

        // And what's for 1.35?
        console.log( 1.35.toFixed(20) ); // 1.350000000000000008882
        // Here the precison loss made the number a little bit greater, so it rounded up

        // How can we fix the problem with 6.35 if we want it to be rounded the right way?
        // We should bring it closer to an integer prior to rounding:
        console.log( (6.35 * 10).toFixed(20) );

        // Note that 63.5 has no precision loss at all
        // That's because the decimal part 0.5 is actually 1/2
        // Fractions divided by powers of 2 are exactly represented in the binary system
        // Now we can round it:
        console.log( Math.round(6.35 * 10) / 10 ); // 6.35 -> 63.5 -> 64(rounded) -> 6.4

        // Using mathjs library (imported)
        console.log( math.round(6.35, 1) );
    },

    // Repeat until the input is a number
    readNumber: () => {
        let num;

        do {
            num = prompt("Enter a number please?", "0");
        } while ( !isFinite(num) );

        if(num === null || num ===  '') return null;

        return +num;
    },

    // A random number from min to max

    random(min, max) {
        return min + Math.random() * (max - min);
    },

    // A random integer from min to max
    randomInteger: (min, max) => {
        // return Math.round(min + Math.random() * (max - min));
        // return Math.round( min - 0.5 + Math.random() * (max - min + 1) );

        return Math.floor( min + Math.random() * (max + 1 - min) );
    },

}

console.log(Chapter_5_2_Tasks.random(2, 6));
console.log(Chapter_5_2_Tasks.randomInteger(2, 8));
// #endregion

// #region 5.3 Strings
{
    // Quotes
    let single = 'single-quoted';
    let double = "double-quoted";

    let backticks = `backticks`;

    let guestList = `Guests:
    * John
    * Pete
    * Mary
    `;


    // Template literals
    const person = "Mike";
    const age = 28;

    function myTag(strings, personExp, ageExp) {

        const str0 = strings[0];
        const str1 = strings[1];
        const str2 = strings[2];

        const ageStr = ageExp < 100 ? "youngster" : "centenarian";

        return `${str0}${personExp}${str1}${ageStr}${str2}`;
    }

    const output = myTag`That ${person} is a ${age}.`;
    console.log(output);


    // Special characters
    // \n - New line, \r - Windows \r\n new break
    // \', \", \` - Quotes
    // \\ - Backslash
    // \t - Tab


    // Unicode, String internals

    // \xXX, \uXXXX - 4 hex digits (\u00A9)
    // \u{X...XXXXXX} 1 to 6 bytes
    
    let s1 = 'S\u0307\u0323'; // Ṩ, S + dot above + dot below
    let s2 = 'S\u0323\u0307'; // Ṩ, S + dot below + dot above

    console.log( `s1: ${s1}, s2: ${s2}` );

    console.log( s1 == s2 ); // false though the characters look identical (?!)
    console.log( s1.normalize() == s2.normalize() ); // true
    console.log( s1.localeCompare(s2) ); // 0, means same string


    // String length
    console.log( `My\n`.length ); // 3


    // Accessing characters
    {
        let str = `Hello`;

        console.log( str[0], str.at(0) ); // H H
        console.log( str[str.length-1], str.at(-1) ); // o o

        for (let char of str) {
            console.log(char);
        }
    }

    // Strings are immutable
    {
        let str = 'Hi';
        // str[0] = 'h';
        console.log(str, str[0]);
    }

    // Changing the case
    {
        console.log( 'Interface'.toUpperCase() ); // INTERFACE
        console.log( 'Interface'.toLowerCase() ); // interface

        console.log( 'Interface'[0].toLowerCase() ); // 'i'
    }

    // Searching for a substring
    {
        let str = 'Widget with id';

        console.log( str.indexOf('Widget') ); // 0
        console.log( str.indexOf('widget') ); // -1

        console.log( str.indexOf("id") ); // 1

        console.log( str.indexOf('id', 2) ); // 12

        // all occurrences
        str = 'As sly as a fox, as strong as an ox';

        let target = 'as';

        let pos = 0;
        while (true) {
            let foundPos = str.indexOf(target, pos);
            if (foundPos == -1) break;

            console.log( `Found at ${foundPos}` );
            pos = foundPos + 1;
        }

        // shorter
        pos = -1;
        while ((pos = str.indexOf(target, pos+1)) != -1) {
            console.log(pos);
        }

        str = "Widget with id";

        if (str.indexOf("Widget") != -1) {
            console.log("We found it");
        }
    }


    // includes, startsWith, endsWith
    {
        console.log( "Widget with id".includes("Widget") ); // true
        console.log( "Hello".includes("Bye") ); // false

        console.log( "Widget".includes("id") ); // true
        console.log( "Widget".includes("id", 3) ); // false

        console.log( "Widget".startsWith("Wid") ); // true
        console.log( "Widget".endsWith("get") ); // true
    }

    // Getting a substring
    {
        // str.slice(start [, end])
        let str = "stringify";
        console.log( str.slice(0, 5) ); // 'strin'
        console.log( str.slice(0, 1) ); // 's'

        console.log( str.slice(2) ); // 'ringify'

        console.log( str.slice(-4, -1) ); // 'gif'

        // str. substring(start [, end])
        console.log( str.substring(2, 6) ); // "ring"
        console.log( str.substring(6, 2) ); // "ring"
        // negative arguments are not supported, they are treated as 0

        // str.substr(start [, length])
        console.log( str.substr(2, 4) );

        console.log( str.substr(-4, 2) );
    }

    // Comparing strings
    {
        console.log( 'a' > 'Z' ); // true

        console.log( 'Österreich' > 'Zealand' ); // true

        // str.codePointAt(pos)
        console.log( "Z".codePointAt(0) ); // 90
        console.log( "z".codePointAt(0) ); // 122
        console.log( "z".codePointAt(0).toString(16) ); // 7a

        // String.fromCodePoint(code)
        console.log( String.fromCodePoint(88, 89, 90) ); // XYZ
        console.log( String.fromCodePoint(0x5a) ); // Z

        let str = '';
        
        for (let i = 65; i <= 220; i++) {
            str += String.fromCodePoint(i);
        }
        console.log(str);

        // Correct comparisons
        console.log( 'Österreich'.localeCompare('Zealand') ); // -1
    }


    // Tasks

    const c53_Tasks = {
        ucFirst(str) {
            if (!str) return str;

            return str[0].toUpperCase() + str.slice(1);
        },

        checkSpam: (str) => {
            let lowerStr = str.toLowerCase();

            return lowerStr.includes('viagra') || lowerStr.includes('xxx');
        },

        truncate: (str, maxlength) => {
            return (str.length > maxlength) ?
            str.slice(0, maxlength-1) + "\u2026" : str;
        },

        extractCurrencyValue: (str) => {
            return +str.slice(1);

        },

    };

    console.log( c53_Tasks.ucFirst("") );
    console.log( c53_Tasks.checkSpam('buy ViAgRA now') );
    console.log( c53_Tasks.checkSpam('free xxxx') );
    console.log( c53_Tasks.checkSpam("innocent rabbit") );

    console.log( c53_Tasks.truncate("Hi everyone!", 20) );
    console.log( c53_Tasks.truncate("What I'd like to tell on this topic is: ", 20) );

    console.log( c53_Tasks.extractCurrencyValue('$120') ); // 120
}

// #endregion

// #region 5.4 Arrays
{
    console.log("#### 5.4 Arrays ####");

    // Declaration
    {
        console.log('*** Declaration ***');

        let arr = new Array();
        let arr1 = [];

        let fruits = ["Apple", "Orange", "Plum"];

        console.log( fruits[0], fruits[1], fruits[2] );

        fruits[2] = 'Pear';
        fruits[3] = 'Lemon';
        console.log( fruits.length, `${fruits}` );

        let arrMix = [ 'Apple', { name: 'John' }, true, function() { return 'hello'; } ];
        console.log(arrMix[1].name, arrMix[3]() );
    }

    // Get last elements with "at"
    {
        console.log('*** Get last elements with at ***');

        let fruits = ["Apple", "Orange", "Plum"];

        console.log( fruits[fruits.length-1] ); // Plum

        console.log( fruits.at(-1) ); // Plum
    }

    // Methods pop/push, shift/unshift
    {
        console.log('*** Methods pop/push, shift/unshift ***');

        // pop
        let fruits = ["Apple", "Orange", "Pear"];

        console.log( fruits.pop() ); // remove "Pear" and return it

        console.log( `${fruits}` );

        // push
        fruits.push("Pear");
        console.log( `${fruits}` );

        // shift
        console.log( fruits.shift() ); // remove Apple and return it
        console.log( `${fruits}` );

        // unshift
        fruits.unshift("Apple");
        console.log( `${fruits}` );

        // Methods push and unshift can add multiple elements at once:
        fruits.length = 1;
        console.log( `${fruits}` );

        fruits.push("Orange", "Peach");
        fruits.unshift("Pineapple", "Lemon");

        console.log( `${fruits}` );
    }

    // Internals
    {
        console.log('*** Internals ***');

        let fruits = ["Banana"];

        let arr = fruits;

        console.log( arr == fruits ); // true

        arr.push("Pear"); // modify the array by reference

        console.log( `${fruits}` );

        // objects
        fruits.length = 0;
        fruits[99] = 5;
        fruits.age = 25;
        console.log( fruits, `${fruits}` );
    }

    // Loops
    {
        console.log('*** Loops ***');

        let arr = ["Apple", "Orange", "Pear"];

        for (let i = 0; i < arr.length; i++) {
            console.log( arr[i] );
        }

        // iterates over array elements
        for (let fruit of arr) {
            console.log( fruit );
        }

        // bad idea for..in for arrays
        for (let key in arr) {
            console.log( arr[key] );
        }
    }

    // A word about "length"
    {
        console.log('*** A word about length ***');

        let fruits = [];
        fruits[123] = "Apple";

        console.log( fruits.length );

        let arr = [1, 2, 3, 4, 5];

        arr.length = 2;
        console.log( `${arr}` );

        arr.length = 5;
        console.log( arr[3] );

        // the simplest way to clear the array is: arr.length = 0;
        arr.length = 0;
        console.log( arr, `${arr}` );
    }

    // new Array()
    {
        console.log('*** new Array() ***');

        let arr0 = new Array("Apple", "Pear", "etc");

        let arr = new Array(2);
        console.log( arr[0] ); // undefined
        console.log( arr.length );
    }

    // Multidimensional arrays
    {
        console.log('*** Multidimensional arrays ***');

        let matrix = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9],
        ];

        console.log( matrix[0][1] ); // 2
    }

    // toString
    {
        console.log('*** toString ***');

        let arr = [1, 2, 3];

        console.log( `${arr}` ); // same as alert(arr) or console.log(String(arr)), // 1,2,3
        console.log(String(arr) === '1,2,3');

        console.log( String([] + 1) );
        console.log( String([1] + 1) );
        console.log( String([1, 2]) + 1 );
    }

    // Don't compare arrays with ==
    {
        console.log("*** Don't compare arrays with === ***");

        console.log( [] == [] ); // false
        console.log( [0] == [0] ); // false

        console.log( 0 == [] ); // true
        console.log( '0' == [] ); // false
    }

    const c54_Tasks = {
        arrayOperations: () => {
            let styles = ["Jazz", "Blues"];

            styles.push("Rock-n-Roll");

            let middle = Math.floor(styles.length/2);
            styles[middle] = "Classics";

            console.log( styles.shift() );

            styles.unshift("Rap", "Reggae");
            console.log( String(styles) );
        },

        arrayContext: () => {
            let arr = ["a", "b"];

            arr.push(function() {
                console.log( this );
            });

            arr[2]();
        },

        sumInput() {
            let arr = [];

            while(true) {
                let num = prompt("Enter a new value", 0);
                if(num == null || num == '' || !isFinite(num)) break;
                arr.push(+num);
            }

            let arrSum = 0;
            for (let elem of arr) {
                arrSum += elem;
            }
            return arrSum;
        },

        getMaxSubSum: (arr) => {
            // let subMatrices = [];
            // for (let i = 0; i < arr.length; i++) {
            //     for (let j = i; j < arr.length; j++) {
            //         subMatrices.push( (i == j) ? arr[j] : arr[j] + subMatrices.at(-1) );              
            //     }
            // }
            // return Math.max(...subMatrices, 0);
            // let maxSum = 0;
            // for (let i = 0; i < arr.length; i++) {
            //     let sum = 0;
            //     for (let j = i; j < arr.length; j++) {
            //         sum += arr[j];
            //         maxSum = Math.max(sum, maxSum);
            //     }
            // }
            // return maxSum;

            let max = 0;
            let ps = 0;
            for (let item of arr) {
                ps += item;
                ps = Math.max(ps, 0);
                max = Math.max(ps, max);
            }

            // let max = 0;
            // let sum = 0
            // for (let item of arr) {
            //     sum += item;
            //     max = Math.max(max, sum);
            //     if (sum < 0) sum = 0;
            // }
            return max;
        },
    }

    c54_Tasks.arrayOperations();
    c54_Tasks.arrayContext();
    // console.log( c54_Tasks.sumInput() );
    let a = c54_Tasks.getMaxSubSum( [2, -1, 2, 3, -9] );
    console.log(a);

}
// #endregion

