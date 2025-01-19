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

Cypress.Commands.add('magentoLogin', (email, password)=> {
    //cy.visit('')
    //cy.contains('Sign In').click()
    cy.get('#email').type(email)
    cy.get('#pass').type(password)
    cy.get('#send2').click()
})

Cypress.Commands.add('verifyErrorMessage', (error_msg)=>{
    cy.get('.message-error > div').should('have.text', (error_msg))
})

Cypress.Commands.add('verifyErrorEmail', (error_email)=>{
    cy.get('#email-error').should('contain.text', (error_email))
})

Cypress.Commands.add('verifyErrorPassword', (error_pass)=>{
    cy.get('#pass-error').should('contain.text', (error_pass))
})
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