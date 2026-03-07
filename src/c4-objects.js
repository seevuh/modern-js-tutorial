"use strict";

// #region 4.1 Objects

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
    for (let key in obj) {
        if (typeof obj[key] === "number") {
            obj[key] *= 2;
        }
    }
}
// #endregion

// #region 4.2 Object references and copying

// Cloning the object
{
    let user = {
        name: "John",
        age: 30,
    }

    let clone = {};

    for (let key in user) {
        clone[key] = user[key];
    }

    clone.name = "Pete";

    console.log(user.name); // John
    console.log(clone.name); // Pete
}

// Using Object.assign to clone an object
{
    let user = { name: "John" };

    let permissions1 = { canView: true };
    let permissions2 = { canEdit: true };

    // copies all properties from permissions1 and permissions2 into user
    Object.assign(user, permissions1, permissions2);

    // now user = { name: "John", canView: true, canEdit: true }
    console.log(user.name); // John
    console.log(user.canView); // true
    console.log(user.canEdit); // true


    // if the copied property name already exists, it will be overwritten
    let user2 = { name: "John" };

    Object.assign(user2, { name: "Pete" });

    console.log(user2.name); // Pete

    // we can also use Object.assign to perform a simple object cloning
    let user3 = {
        name: "John",
        age: 30,
    };

    let clone = Object.assign({}, user3);
    
    console.log(clone.name);
}



// #endregion