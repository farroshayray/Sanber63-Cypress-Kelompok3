// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('VisitAndLogin', () => {
    cy.visit('');
    cy.get('.logo > img').should('exist'); // verify logo exist
    cy.get('.panel > .header > .authorization-link > a').click(); // text Sign In
    cy.get('.base').should('exist'); // verify text Customer Login
    cy.get('#email').type('three3e3e@gmail.com');
    cy.get('input[name="login[password]"]').type('Sanbercode63()');
    cy.get('button[type="submit"][class="action login primary"]').click(); // blue button Sign In 
    cy.contains('Home Page').should('exist'); // verify text home page 
})
Cypress.Commands.add('DeleteCartAfterTestCase', () => {
    cy.get('.product-item-details > .actions > .secondary > .action').click();
    cy.get('.action-primary').click();
    cy.get('strong[class="subtitle empty"]')
        .should('have.text', 'You have no items in your shopping cart.'); // verify item deleted
})

Cypress.Commands.add('DeleteItemInShoppingCartMenu', () => {
    cy.get('.action-delete').click(); // click trashbin icon
    cy.get('div[class="cart-empty"]').should('contain', 'You have no items in your shopping cart.')
})