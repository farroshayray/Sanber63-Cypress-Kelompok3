describe('choose product and update shop cart', () => {
    beforeEach(() => {
        // Visit and Login
        cy.VisitAndLogin();
    })

    // Positive Cases
    it('Pick Item from Best Seller, Choose Size-Color-Quantity, Check Shop Cart', () => {
        cy.get('a[title="Argus All-Weather Tank"]').should('exist').scrollIntoView({
            offset: { top: -300 },
            duration: 3000,
            easing: 'linear'
        }).click(); // scroll and click
        cy.get('.stock > span').should('exist'); // verify text IN STOCK
        cy.get('#option-label-size-143-item-169').click(); // Size L
        cy.get('#option-label-color-93-item-52').click(); // Gray
        cy.get('#qty').clear().type('2'); // input Quantity
        cy.get('#product-addtocart-button').click(); // Add to cart blue button
        cy.get('.counter-number').scrollIntoView({ // scroll to number beside cart icon
            duration: 1000,
            easing: 'linear'
        });
        cy.wait(1300); // wait until scrolling is over
        cy.get('.showcart').click(); // click shop cart icon
        cy.get('#mini-cart > .item > :nth-child(1) > .product-item-details > .product-item-name > a')
            .should('have.text', 'Argus All-Weather Tank'); // check item name in cart
        cy.get('input[data-item-qty="2"]')
            .should('have.attr', 'data-item-qty', '2'); // check qty in shop cart
        cy.wait(3500);
        cy.DeleteCartAfterTestCase(); // Clean cart from item in dropdown cart
    });

    it('Pick Item from Navigation Bar, Choose Size-Color-Quantity, Check Shop Cart', () => {
        cy.get('#ui-id-5 > .ui-menu-icon').trigger('mouseover'); // Men
        cy.get('#ui-id-17').trigger('mouseover'); // Tops
        cy.get('#ui-id-21').trigger('mouseover').click(); // Tees
        cy.get('#page-title-heading > span').should('exist'); // Verify Tees text
        cy.get('img[alt="Ryker LumaTech™ Tee (Crew-neck)"]').should('exist').scrollIntoView({
            offset: { top: -300 },
            duration: 3000,
            easing: 'linear'
        }).click(); // scroll and click item image
        cy.get('.base').should('have.text', 'Ryker LumaTech™ Tee (Crew-neck)') // verify item name
        cy.get('#option-label-size-143-item-170').click(); // Size XL
        cy.get('#option-label-color-93-item-58').click(); // Color red
        cy.get('#qty').clear().type('5'); // input Quantity
        cy.get('#product-addtocart-button').click() // add to cart blue button
        cy.get('.showcart').scrollIntoView({ // scroll to cart icon
            duration: 1000,
            easing: 'linear'
        });
        cy.wait(1300); // wait until scrolling is over
        cy.get('.showcart').click(); // click shop cart icon
        cy.get('#mini-cart > .item > :nth-child(1) > .product-item-details > .product-item-name > a')
            .should('have.text', 'Ryker LumaTech™ Tee (Crew-neck)') // check item name in cart
        cy.get('input[data-item-qty="5"]')
            .should('have.attr', 'data-item-qty', '5'); // check qty in shop cart
        cy.wait(3500);
        cy.DeleteCartAfterTestCase(); // Clean cart from item in dropdown cart
    })

    it('Change Quantity (>= 1) in Shopping Cart Menu', () => {
        cy.get('#ui-id-5 > .ui-menu-icon').trigger('mouseover'); // Men
        cy.get('#ui-id-17').trigger('mouseover'); // Tops
        cy.get('#ui-id-21').trigger('mouseover').click(); // Tees
        cy.get('#page-title-heading > span').should('exist'); // Verify Tees text
        cy.get('img[alt="Ryker LumaTech™ Tee (Crew-neck)"]').should('exist').scrollIntoView({
            offset: { top: -300 },
            duration: 3000,
            easing: 'linear'
        }).click(); // scroll and click item image
        cy.get('.base').should('have.text', 'Ryker LumaTech™ Tee (Crew-neck)') // verify item name
        cy.get('#option-label-size-143-item-170').click(); // Size XL
        cy.get('#option-label-color-93-item-58').click(); // Color red
        cy.get('#qty').clear().type('5'); // input Quantity
        cy.get('#product-addtocart-button').click() // add to cart blue button
        cy.get('.showcart').scrollIntoView({ // scroll to cart icon
            duration: 1000,
            easing: 'linear'
        });
        cy.wait(1300); // wait until scrolling is over
        cy.get('.showcart').click(); // click shop cart icon
        cy.get('#mini-cart > .item > :nth-child(1) > .product-item-details > .product-item-name > a')
            .should('have.text', 'Ryker LumaTech™ Tee (Crew-neck)') // check item name in cart
        cy.get('input[data-item-qty="5"]')
            .should('have.attr', 'data-item-qty', '5'); // check qty in shop cart
        cy.wait(3500);
        cy.get('span[data-bind="i18n: \'View and Edit Cart\'"]').click(); // click view and edit cart
        cy.get('span[class="base"]').should('have.text', 'Shopping Cart'); // verify in shopping cart menu
        cy.get('input[title="Qty"]').clear().type('9'); // change quantity
        cy.get('.update').click();
        cy.get('input[title="Qty"]').should('have.attr', 'value', '9'); // verify new quantity
        cy.DeleteItemInShoppingCartMenu(); 
    })

    // Negative Cases
    it('Dont pick size, Pick Color, Quantity >= 1, Add to cart', () => {
        cy.get('#ui-id-5 > .ui-menu-icon').trigger('mouseover'); // Men
        cy.get('#ui-id-18').trigger('mouseover'); // Bottom
        cy.get('#ui-id-23').trigger('mouseover').click(); // Pants
        cy.get('#page-title-heading > span').should('exist'); // Verify Pants exist
        cy.get('img[alt="Kratos Gym Pant"]').should('exist').scrollIntoView({
            offset: { top: -300 },
            duration: 3000,
            easing: 'linear'
        }).click(); // scroll and click item image
        cy.get('.base').should('have.text', 'Kratos Gym Pant') // verify item name
        cy.get('#option-label-color-93-item-49').click(); // color black
        cy.get('#qty').clear().type('4'); // input Quantity
        cy.get('#product-addtocart-button').click(); // add to cart blue button
        cy.get('#super_attribute\\[143\\]-error')
            .should('have.text', 'This is a required field.'); // Verify error text
    })

    it('Pick size, Dont Pick Color, Quantity >= 1, Add to cart', () => {
        cy.get('#ui-id-5 > .ui-menu-icon').trigger('mouseover'); // Men
        cy.get('#ui-id-18').trigger('mouseover'); // Bottom
        cy.get('#ui-id-23').trigger('mouseover').click(); // Pants
        cy.get('#page-title-heading > span').should('exist'); // Verify Pants exist
        cy.get('img[alt="Kratos Gym Pant"]').should('exist').scrollIntoView({
            offset: { top: -300 },
            duration: 3000,
            easing: 'linear'
        }).click(); // scroll and click item image
        cy.get('.base').should('have.text', 'Kratos Gym Pant') // verify item name
        cy.get('#option-label-size-143-item-176').click(); // size 33
        cy.get('#qty').clear().type('4'); // input Quantity
        cy.get('#product-addtocart-button').click(); // add to cart blue button
        cy.get('#super_attribute\\[93\\]-error')
            .should('have.text', 'This is a required field.'); // Verify error text
    })

    it('Pick size, Pick Color, Quantity < 1, Add to cart', () => {
        cy.get('#ui-id-5 > .ui-menu-icon').trigger('mouseover'); // Men
        cy.get('#ui-id-18').trigger('mouseover'); // Bottom
        cy.get('#ui-id-23').trigger('mouseover').click(); // Pants
        cy.get('#page-title-heading > span').should('exist'); // Verify Pants exist
        cy.get('img[alt="Kratos Gym Pant"]').should('exist').scrollIntoView({
            offset: { top: -300 },
            duration: 3000,
            easing: 'linear'
        }).click(); // scroll and click item image
        cy.get('.base').should('have.text', 'Kratos Gym Pant') // verify item name
        cy.get('#option-label-size-143-item-176').click(); // size 33
        cy.get('#option-label-color-93-item-53').click(); // color green
        cy.get('#qty').clear().type('-10'); // input Quantity
        cy.get('#product-addtocart-button').click(); // add to cart blue button
        cy.get('#qty-error')
            .should('have.text', 'Please enter a quantity greater than 0.'); // Verify error text
    })

    it('Dont Pick Size, Dont Pick Color, Quantity < 1, Add to cart', () => {
        cy.get('#ui-id-5 > .ui-menu-icon').trigger('mouseover'); // Men
        cy.get('#ui-id-18').trigger('mouseover'); // Bottom
        cy.get('#ui-id-23').trigger('mouseover').click(); // Pants
        cy.get('#page-title-heading > span').should('exist'); // Verify Pants exist
        cy.get('img[alt="Kratos Gym Pant"]').should('exist').scrollIntoView({
            offset: { top: -300 },
            duration: 3000,
            easing: 'linear'
        }).click(); // scroll and click item image
        cy.get('.base').should('have.text', 'Kratos Gym Pant') // verify item name
        cy.get('#qty').clear().type('-4'); // input Quantity
        cy.get('#product-addtocart-button').click(); // add to cart blue button
        cy.get('#super_attribute\\[143\\]-error')
        .should('have.text', 'This is a required field.'); // Verify error text
        cy.get('#super_attribute\\[93\\]-error')
            .should('have.text', 'This is a required field.'); // Verify error text
        cy.get('#qty-error')
            .should('have.text', 'Please enter a quantity greater than 0.'); // Verify error text
    })

    it('Quantity Not a Number, Add to cart', () => {
        cy.get('#ui-id-5 > .ui-menu-icon').trigger('mouseover'); // Men
        cy.get('#ui-id-18').trigger('mouseover'); // Bottom
        cy.get('#ui-id-23').trigger('mouseover').click(); // Pants
        cy.get('#page-title-heading > span').should('exist'); // Verify Pants exist
        cy.get('img[alt="Kratos Gym Pant"]').should('exist').scrollIntoView({
            offset: { top: -300 },
            duration: 3000,
            easing: 'linear'
        }).click(); // scroll and click item image
        cy.get('.base').should('have.text', 'Kratos Gym Pant') // verify item name
        cy.get('#option-label-size-143-item-176').click(); // size 33
        cy.get('#option-label-color-93-item-53').click(); // color green
        cy.get('#qty').clear().type('-e%$ss'); // input Quantity
        cy.get('#product-addtocart-button').click(); // add to cart blue button
        cy.get('#qty-error')
            .should('have.text', 'Please enter a valid number in this field.'); // Verify error text
    })

    it('Quantity > 10000, Add to cart', () => {
        cy.get('#ui-id-5 > .ui-menu-icon').trigger('mouseover'); // Men
        cy.get('#ui-id-18').trigger('mouseover'); // Bottom
        cy.get('#ui-id-23').trigger('mouseover').click(); // Pants
        cy.get('#page-title-heading > span').should('exist'); // Verify Pants exist
        cy.get('img[alt="Kratos Gym Pant"]').should('exist').scrollIntoView({
            offset: { top: -300 },
            duration: 3000,
            easing: 'linear'
        }).click(); // scroll and click item image
        cy.get('.base').should('have.text', 'Kratos Gym Pant') // verify item name
        cy.get('#option-label-size-143-item-176').click(); // size 33
        cy.get('#option-label-color-93-item-53').click(); // color green
        cy.get('#qty').clear().type('100000'); // input Quantity
        cy.get('#product-addtocart-button').click(); // add to cart blue button
        cy.get('#qty-error')
            .should('have.text', 'The maximum you may purchase is 10000.'); // Verify error text
    })

    it('Change Quantity (< 1) in Shopping Cart Menu', () => {
        cy.get('#ui-id-5 > .ui-menu-icon').trigger('mouseover'); // Men
        cy.get('#ui-id-17').trigger('mouseover'); // Tops
        cy.get('#ui-id-21').trigger('mouseover').click(); // Tees
        cy.get('#page-title-heading > span').should('exist'); // Verify Tees text
        cy.get('img[alt="Ryker LumaTech™ Tee (Crew-neck)"]').should('exist').scrollIntoView({
            offset: { top: -300 },
            duration: 3000,
            easing: 'linear'
        }).click(); // scroll and click item image
        cy.get('.base').should('have.text', 'Ryker LumaTech™ Tee (Crew-neck)') // verify item name
        cy.get('#option-label-size-143-item-170').click(); // Size XL
        cy.get('#option-label-color-93-item-58').click(); // Color red
        cy.get('#qty').clear().type('5'); // input Quantity
        cy.get('#product-addtocart-button').click() // add to cart blue button
        cy.get('.showcart').scrollIntoView({ // scroll to cart icon
            duration: 1000,
            easing: 'linear'
        });
        cy.wait(1300); // wait until scrolling is over
        cy.get('.showcart').click(); // click shop cart icon
        cy.get('#mini-cart > .item > :nth-child(1) > .product-item-details > .product-item-name > a')
            .should('have.text', 'Ryker LumaTech™ Tee (Crew-neck)') // check item name in cart
        cy.get('input[data-item-qty="5"]')
            .should('have.attr', 'data-item-qty', '5'); // check qty in shop cart
        cy.wait(3500);
        cy.get('span[data-bind="i18n: \'View and Edit Cart\'"]').click(); // click view and edit cart
        cy.get('span[class="base"]').should('have.text', 'Shopping Cart'); // verify in shopping cart menu
        cy.get('input[title="Qty"]').clear().type('-7'); // change quantity
        cy.get('.update').click();
        cy.get('div[class="mage-error"]')
            .should('have.text', 'Please enter a number greater than 0 in this field.'); // verify error text
        cy.wait(5000);
        cy.DeleteItemInShoppingCartMenu();
    })

    it('Change Quantity (Not a Number) in Shopping Cart Menu', () => {
        cy.get('#ui-id-5 > .ui-menu-icon').trigger('mouseover'); // Men
        cy.get('#ui-id-17').trigger('mouseover'); // Tops
        cy.get('#ui-id-21').trigger('mouseover').click(); // Tees
        cy.get('#page-title-heading > span').should('exist'); // Verify Tees text
        cy.get('img[alt="Ryker LumaTech™ Tee (Crew-neck)"]').should('exist').scrollIntoView({
            offset: { top: -300 },
            duration: 3000,
            easing: 'linear'
        }).click(); // scroll and click item image
        cy.get('.base').should('have.text', 'Ryker LumaTech™ Tee (Crew-neck)') // verify item name
        cy.get('#option-label-size-143-item-170').click(); // Size XL
        cy.get('#option-label-color-93-item-58').click(); // Color red
        cy.get('#qty').clear().type('5'); // input Quantity
        cy.get('#product-addtocart-button').click() // add to cart blue button
        cy.get('.showcart').scrollIntoView({ // scroll to cart icon
            duration: 1000,
            easing: 'linear'
        });
        cy.wait(1300); // wait until scrolling is over
        cy.get('.showcart').click(); // click shop cart icon
        cy.get('#mini-cart > .item > :nth-child(1) > .product-item-details > .product-item-name > a')
            .should('have.text', 'Ryker LumaTech™ Tee (Crew-neck)') // check item name in cart
        cy.get('input[data-item-qty="5"]')
            .should('have.attr', 'data-item-qty', '5'); // check qty in shop cart
        cy.wait(3500);
        cy.get('span[data-bind="i18n: \'View and Edit Cart\'"]').click(); // click view and edit cart
        cy.get('span[class="base"]').should('have.text', 'Shopping Cart'); // verify in shopping cart menu
        cy.get('input[title="Qty"]').clear().type('-e1'); // change quantity
        cy.get('.update').click();
        cy.get('div[class="mage-error"]')
            .should('have.text', 'This is a required field.'); // verify error text
        cy.wait(5000);
        cy.DeleteItemInShoppingCartMenu();
    })
})