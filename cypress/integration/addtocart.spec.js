// <reference types="cypress" />

context('Add to cart', () => {
  it('get item in the cart', () => {
    cy.visit('http://localhost:3000/products');
    cy.visit('http://localhost:3000/products/1');
    cy.get('input').type('1');
    cy.contains('Add to Cart').click();
    cy.visit('http://localhost:3000/cart');
    cy.getCookie('Jupiter-X');
  });
});
