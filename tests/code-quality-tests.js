describe("pow", function() {

/*     before( () => console.log("Testing started") );
    after( () => console.log("Testing finished") );
    beforeEach( () => console.log("Test started") );
    afterEach( () => console.log("Test finished") ); */

    it("2 raised to the power of 3 is 8", function() {
        assert.equal(pow(2, 3), 8);
    });
});