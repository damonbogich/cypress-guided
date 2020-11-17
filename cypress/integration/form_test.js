//every test:
//1. arrange: Get the element we want
//2. act: Mimic user interaction on that element
//3. assert: Test/Verify

describe("This is our first test.", () => {
    it("Should return True", () => {
        expect(true).to.equal(true);
    });
});

describe("Testing our form inputs", () => {
    beforeEach(function() {
        //runs before each test in this block - will have fresh copy of the web page before each test
        cy.visit('http://localhost:3000/')
    })
    it("Input name into the name element", () => {
        //1. arrange: Get the element we want
        //2. act: Mimic user interaction on that element
        cy.get('input[name="name"]')
        .type("Damon Bogich")
        .should('have.value', 'Damon Bogich')
        .type(" Is awesome")
        .should('have.value', 'Damon Bogich Is awesome')
        //3. assert: Test/Verify 
    });
    it("Should check the checkbox", () => {
        cy.get('input[type="checkbox"]').check().should("be.checked")
    });
});