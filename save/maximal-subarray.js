"use strict";

// The input is an array of numbers, e.g. arr = [1, -2, 3, 4, -9, 6].
// The task is: find the contiguous subarray of arr with the maximal sum of items.
// Write the function getMaxSubSum(arr) that will return that sum.
// If all items are negative, it means that we take none (the subarray is empty), so the sum is zero:

// O(n^2) : Own solution
function getMaxSubSum1(arr) {
    let subSumArray = [];

    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            subSumArray.push((i == j) ? arr[j] : arr[j] + subSumArray.at(-1));
        }
    }

    return Math.max(...subSumArray, 0);
}

// O(n^2)
function getMaxSubSum2(arr) {
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        let sum = 0;
        for (let j = i; j < arr.length; j++) {
            sum += arr[j];
            max = Math.max(max, sum);
        }
    }

    return max;
}

// O(n) : Kadane's algorithm
function getMaxSubSum(arr) {
    let maxSum = 0;
    let partialSum = 0;
    
    for (let elem of arr) {
        partialSum += elem;
        maxSum = Math.max(maxSum, partialSum);
        partialSum = Math.max(partialSum, 0);
    }
    
    return maxSum;
}
