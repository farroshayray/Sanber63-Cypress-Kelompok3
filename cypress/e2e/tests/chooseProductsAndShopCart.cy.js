describe('choose product and update shop cart', () => {
    beforeEach(() => {
        cy.visit('')
    })

    it('Open Website and Login', () => {
        cy.get('.logo > img').should('exist');
        cy.get('body > div.page-wrapper > header > div.panel.wrapper > div > ul > li.authorization-link > a').click();
        cy.get('.base').should('exist');
        cy.get('#email').type('three3e3e@gmail.com');
        cy.get('input[name="login[password]"]').type('Sanbercode63()');
        cy.get('button[type="submit"][class="action login primary"]').click();
        cy.contains('Home Page').should('exist');
    })
})