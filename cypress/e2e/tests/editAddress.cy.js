/// <reference types="cypress" />

describe('Edit Addess test', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.fixture('data.json').then((data) => {
            const datauser = data;
            cy.loginreza(datauser.username, datauser.password)
        
        });
        cy.contains('Change').click()
        cy.contains('My Account').click()
        cy.contains('Manage Addresses').click()
    })

    it('test validation field mandatory', () => {
         cy.get('[id="firstname"]').clear()
         cy.get('[id="lastname"]').clear()
         cy.get('[title="Save Address"]').click()

         cy.get('[id="firstname-error"]').should('have.text','This is a required field.')
         cy.get('[id="lastname-error"]').should('have.text','This is a required field.')
         cy.get('[id="telephone-error"]').should('have.text', 'This is a required field.')
         cy.get('[id="street_1-error"]').should('have.text', 'This is a required field.')
         cy.get('[id="city-error"]').should('have.text', 'This is a required field.')
         cy.get('[id="region_id-error"]').should('have.text', 'Please select an option.')
         cy.get('[id="zip-error"]').should('have.text', 'This is a required field.')
    })

  })