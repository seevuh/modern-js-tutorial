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


