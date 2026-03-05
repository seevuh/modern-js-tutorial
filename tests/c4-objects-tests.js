"use strict";

describe("isEmpty", function() {

    it("should return true for an empty object {}", function() {
        assert.equal(isEmpty({}), true);
    });

    it("should return false for an object with properties {a: 1}", function() {
        assert.equal(isEmpty({a: 1}), false);
    });
});

describe("sum of salaries", function() {
    it("should return 0 for an empty object {}", function() {
        assert.equal(sumSalaries({}), 0);
    });
    
    it("Should return the sum of salaries for an object with properties. Here 100 + 300 + 250 = 650", function() {
        let salaries = {
            "John": 100,
            "Pete": 300,
            "Mary": 250
        };
        assert.equal(sumSalaries(salaries), 650);
    });

    it("Should return the sum of salaries with a non-numeric value. Here 100 + 250 = 350", function() {
        let salaries = {
            "John": 100,
            "Pete": "fd",
            "Mary": 250
        };
        assert.equal(sumSalaries(salaries), 350);
    });
});

describe("multiply numeric properties by 2", function() {
    it("should multiply numeric properties by 2 and leave non-numeric properties unchanged", function() {
        let menu = {
            width: 200,
            height: 300,
            title: "My menu"
        };
        multiplyNumeric(menu);

        assert.equal(menu.width, 400);
        assert.equal(menu.height, 600);
        assert.equal(menu.title, "My menu");
    });
});