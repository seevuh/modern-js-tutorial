"use strict";

describe("isEmpty", function() {

    it("should return true for an empty object {}", function() {
        assert.equal(isEmpty({}), true);
    });

    it("should return false for an object with properties {a: 1}", function() {
        assert.equal(isEmpty({a: 1}), false);
    });
});