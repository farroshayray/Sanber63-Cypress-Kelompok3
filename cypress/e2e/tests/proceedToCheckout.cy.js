/// <reference types="cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
    if (err.message.includes('AddFotoramaVideoEvents')) {
        return false;
    }

    return true;
});

function generateRandomEmail() {
    const timestamp = new Date().getTime();
    return `test${timestamp}@example.com`;
}

describe('Proceed To Checkout Test', () => {
    let randomEmail;
    before(() => {
        Cypress.config('defaultCommandTimeout', 10000);
        Cypress.config('requestTimeout', 15000);
        Cypress.config('pageLoadTimeout', 20000);
        randomEmail = generateRandomEmail();

        cy.visit('/');
        cy.get('.panel > .header > :nth-child(3) > a').click();
        cy.fixture('user_farros').then((user) => {
            cy.get('#firstname').type(user.firstName);
            cy.get('#lastname').type(user.lastName);
        })
        cy.get('#email_address').type(randomEmail);
        cy.fixture('user_farros').then((user) => {
            cy.get('#password').type(user.password);
            cy.get('#password-confirmation').type(user.password);
        })
        cy.get('#form-validate > .actions-toolbar > div.primary > .action').click();
        cy.get(':nth-child(2) > .customer-welcome > .customer-name > .action').click();
        cy.wait(5000);
        cy.get(':nth-child(2) > .customer-welcome > .customer-menu > .header > .authorization-link > a').click();

    });
    beforeEach(() => {
        cy.visit('/customer/account/login/');
        cy.url().should('include', '/customer/account/login');
        cy.fixture('user_farros').then((user) => {
            cy.login(randomEmail, user.password);
        });
        cy.contains('Home Page').should('be.visible');
    });


    it('should display Home Page', () => {
        cy.get('.logo > img').click();
        cy.contains('Home Page').should('be.visible');
        cy.contains('Welcome').should('be.visible');
    });

    it('should display the product name when a search is performed.', () => {
        cy.get('#search').type('roc');
        cy.contains('Rocco Gym tank').should('be.visible');
    })

    it('should display product detail when the product card is clicked', () => {
        cy.get('#ui-id-5').trigger('mouseover').then(() => {
            cy.get('#ui-id-17').click();
        })
        cy.contains('Cassius Sparring Tank').should('be.visible');

        cy.get(':nth-child(1) > .product-item-info').click();
        cy.url().should('include', '/cassius-sparring-tank');
    })
    
    it('should display no items in shopping cart when deleted', () => {
        cy.get('#ui-id-5').trigger('mouseover').then(() => {
            cy.get('#ui-id-17').trigger('mouseover').then(() => {
                cy.get('#ui-id-19').click();
            })
        })
        cy.contains('Montana Wind Jacket').should('be.visible');

        cy.get(':nth-child(2) > .product-item-info').click();
        cy.url().should('include', '/montana-wind-jacket');

        cy.get('#option-label-size-143-item-170').click();
        cy.get('#option-label-color-93-item-58').click();
        cy.get('#qty').clear().type('2');
        cy.get('#product-addtocart-button').click();

        cy.contains('You added Montana Wind Jacket').should('be.visible');

        cy.get('.showcart').click();

        cy.get('.minicart-items-wrapper').should('be.visible');
        cy.contains('Proceed to Checkout').should('be.visible');

        cy.wait(3000);
        cy.get('.product-item-details > .actions > .secondary > .action').click();
        cy.get('.action-primary').click();
        

        cy.contains('You have no items in your shopping cart.').should('be.visible');
        cy.contains('Proceed to Checkout').should('not.exist');
    })

    it('should proceed to checkout', () => {
        cy.get('#ui-id-4').trigger('mouseover').then(() => {
            cy.get('#ui-id-9').trigger('mouseover').then(() => {
                cy.get('#ui-id-13').click();
            })
        })
        cy.contains('Layla Tee').should('be.visible');

        cy.get(':nth-child(10) > .product-item-info').click();
        cy.url().should('include', '/layla-tee');

        cy.get('#option-label-size-143-item-168').click();
        cy.get('#option-label-color-93-item-58').click();
        cy.get('#qty').clear().type('4');
        cy.get('#product-addtocart-button').click();

        cy.contains('You added Layla Tee').should('be.visible');

        cy.get('.showcart').click();

        cy.get('.minicart-items-wrapper').should('be.visible');

        cy.get('input[data-item-qty="4"]').clear().type('2');
        cy.get('[title="Update"]').click();
        cy.get('#top-cart-btn-checkout').click();

        cy.contains('Order Summary').should('be.visible');

        cy.get('[name="shippingAddress.firstname"]').then(($input) => {        
            const repeatBackspace = '{backspace}'.repeat(50);
            cy.wrap($input)
                .type(repeatBackspace)
        });
        cy.fixture('user_farros').then((user) => {
            cy.get('[name="shippingAddress.firstname"]').type(user.firstName);
        });
        cy.get('[name="shippingAddress.lastname"]').then(($input) => {        
            const repeatBackspace = '{backspace}'.repeat(50);
            cy.wrap($input)
                .type(repeatBackspace)
        });
        cy.fixture('user_farros').then((user) => {
            cy.get('[name="shippingAddress.lastname"]').type(user.lastName);
        });
        cy.get('[name="shippingAddress.company"]').then(($input) => {        
            const repeatBackspace = '{backspace}'.repeat(50);
            cy.wrap($input)
                .type(repeatBackspace)
                .type('Berkah Maju Corp')
        });
        cy.fixture('user_farros').then((user) => {
            cy.get('[name="street[0]"]').type(user.street0);
            cy.get('[name="street[1]"]').type(user.street1);
            cy.get('[name="street[2]"]').type(user.street2);
            cy.get('[name="city"]').type(user.city);
        });
        cy.get('[name="region_id"]').trigger('click').then(() => {
            cy.contains('Wyoming').should('be.visible');
            cy.get('option[data-title="Wyoming"]').should('have.text', 'Wyoming');
            cy.get('select[name="region_id"]').select('Wyoming');
        });
        cy.fixture('user_farros').then((user) => {
            cy.get('[name="postcode"]').type(user.postCode);
        });
        cy.get('[name="country_id"]').trigger('click').then(() => {
            cy.contains('Indonesia').should('be.visible');
            cy.get('option[data-title="Indonesia"]').should('have.text', 'Indonesia');
            cy.get('select[name="country_id"]').select('Indonesia');
        });
        cy.fixture('user_farros').then((user) => {
            cy.get('[name="telephone"]').type(user.phoneNumber);
        });

        cy.wait(5000);
        cy.fixture('user_farros').then((user) => {
            cy.get('[name="region"]').type(user.province);
        });
        cy.wait(5000);
        cy.get('.button').click();

        cy.fixture('user_farros').then((user) => {
            cy.contains(user.street0).should('be.visible');
            cy.contains(user.street1).should('be.visible');
            cy.contains(user.street2).should('be.visible');
            cy.contains(user.city).should('be.visible');
            cy.contains(user.province).should('be.visible');
            cy.contains(user.postCode).should('be.visible');

        })

        cy.get('.payment-method-content > :nth-child(4) > div.primary > .action').click();

        cy.contains('Thank you for your purchase!').should('be.visible');
    })

    after(() => {
        cy.get(':nth-child(2) > .customer-welcome > .customer-name > .action').click();
        cy.wait(3000);
        cy.get(':nth-child(2) > .customer-welcome > .customer-menu > .header > .authorization-link > a').click();
        cy.wait(3000);
        cy.contains('You are signed out').should('be.visible');
    })

})