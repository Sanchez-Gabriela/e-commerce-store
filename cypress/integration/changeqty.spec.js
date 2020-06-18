// <reference types="cypress" />

context('change products quantity', () => {
  it('add one more product', () => {
    cy.visit('http://localhost:3000/products');
    cy.visit('http://localhost:3000/products/1');
    cy.get('input').type('1');
    cy.contains('Add to Cart').click();
    cy.visit('http://localhost:3000/cart');
    cy.get('.testButton').click();
    cy.get('.productQuantity').contains('2');
    cy.get('[data-cy="productPrice"]').contains('4.398');
  });
});
