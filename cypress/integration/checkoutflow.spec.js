// <reference types="cypress" />

context('Check flow website', () => {
  it('it takes user from product page to cart to payment', () => {
    cy.visit('http://localhost:3000');
    cy.visit('http://localhost:3000/products/2');
    cy.get('input').type('1');
    cy.contains('Add to Cart').click();
    cy.get('.material-icons').click();
    cy.get('.testButton').click();
    cy.get('.productQuantity').contains('2');
    cy.get('.checkout').click();
    cy.contains('Purchase').click();
  });
});
