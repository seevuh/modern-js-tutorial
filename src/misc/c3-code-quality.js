"use strict";

function pow(x, n) {
  let result = 1;

  if (n < 0 || n % 1 != 0) {
    return NaN;
  }

  for (let i = 0; i < n; i++) {
    result *= x;
  }

  return result;
}