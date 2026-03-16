"use strict";

describe("Maximal SubArray", function() {

    it("should return 0 for an empty array", function() {
        let arr = [];
        assert.equal(getMaxSubSum(arr), 0);
    });

    it("should return 5 for array [-1, 2, 3, -9]", function() {
        let arr = [-1, 2, 3, -9];
        assert.equal(getMaxSubSum(arr), 5);
    });

    it("should return 6 for array [2, -1, 2, 3, -9]", function() {
        let arr = [2, -1, 2, 3, -9];
        assert.equal(getMaxSubSum(arr), 6);
    });

    it("should return 11 for array [-1, 2, 3, -9, 11]", function() {
        let arr = [-1, 2, 3, -9, 11];
        assert.equal(getMaxSubSum(arr), 11);
    });

    it("should return 3 for array [-2, -1, 1, 2]", function() {
        let arr = [-2, -1, 1, 2];
        assert.equal(getMaxSubSum(arr), 3);
    });

    it("should return 100 for array [100, -9, 2, -3, 5]", function() {
        let arr = [100, -9, 2, -3, 5];
        assert.equal(getMaxSubSum(arr), 100);
    });

    it("should return 6 for array [1, 2, 3]", function() {
        let arr = [1, 2, 3];
        assert.equal(getMaxSubSum(arr), 6);
    });

    it("should return 0 for array [-1, -2, -3]", function() {
        let arr = [-1, -2, -3];
        assert.equal(getMaxSubSum(arr), 0);
    });

});