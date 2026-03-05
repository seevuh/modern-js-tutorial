"use strict";

function isEmpty(obj) {
    for (let key in obj) {
        // if the loop has started, there is a property
        return false;
    }
    return true;
};

function sumSalaries(salaries) {
    let sum = 0;

    for (let key in salaries) {
        // console.log(+salaries[key]);
        if (typeof salaries[key] === "number") {
            sum += salaries[key];
        }
        // if we want to convert non-numeric values to 0, we can use the unary plus operator:
        // sum += +salaries[key] || 0;
    }

    return sum;
}

// Function to multiply numeric properties by 2
function multiplyNumeric(obj) {
    // for (let key in obj) {
    //     if (typeof obj[key] === "number") {
    //         obj[key] *= 2;
    //     }
    // }
    obj["width"] *= 2;
    obj[2] *= 2;
}