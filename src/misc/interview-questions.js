"use strict";

// #region Questions
const DiscountType = {
  Standard: "standard",
  Seasonal: "seasonal",
  Weight: "weight"
};

function getDiscountedPrice(cartWeight, totalPrice, discountType) {
  let percentage;
  switch (discountType) {
    case DiscountType.Standard:
      percentage = 6;
      break;
    case DiscountType.Seasonal:
      percentage = 12;
      break;
    case DiscountType.Weight:
      percentage = cartWeight <= 10 ? 6 : 18;
      break;
  }

  const savings = totalPrice * percentage / 100;
  return totalPrice - savings;
}

let discountedPrice = getDiscountedPrice(12, 100, DiscountType.Seasonal); // 82
// console.log(discountedPrice);

// #endregion

// #region Testing
let company = {
  sales: [{ name: 'John', salary: 1000 }, { name: 'Alice', salary: 1600 }],
  development: {
    sites: [{ name: 'Peter', salary: 2000 }, { name: 'Alex', salary: 1800 }],
    internals: [{ name: 'Jack', salary: 1300 }]
  }
};

function sumSalaries(department) {
  if (Array.isArray(department)) {
    return department.reduce((total, person) => total + person.salary, 0);
  } else {
    let sum = 0;
    for (let sub of Object.values(department)) {
      sum += sumSalaries(sub);
    }
    return sum;
  }
}

console.log(sumSalaries(company));


// #endregion