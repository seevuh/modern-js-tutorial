

describe("readNumber", function() {
    
    it("should return null for empty string", function() {
        const originalPrompt = window.prompt;
        window.prompt = function() {
            return '';
        };
        assert.equal(Chapter_5_2_Tasks.readNumber(), null);
        window.prompt = originalPrompt;

    });

    it("should return null when user presses 'CANCEL' ", function () {
        const originalPrompt = window.prompt;
        window.prompt = function() {
            return null;
        };
        assert.equal(Chapter_5_2_Tasks.readNumber(), null);
        window.prompt = originalPrompt;
    });

    it("should return number when it's finite number, e.g. 43 == 43 ", function () {
        const originalPrompt = window.prompt;
        window.prompt = function() {
            return 43;
        };
        assert.equal(Chapter_5_2_Tasks.readNumber(), 43);
        window.prompt = originalPrompt;
    });
});

describe("randomNumber", function() {
    it("should equal get a random number between 1 and 5", function() {
        expect( Chapter_5_2_Tasks.random(1,5) ).to.be.within(1, 5);
    });

});