describe('Login Test', () => {
    beforeEach(() => {
      //cy.visit('https://magento.softwaretestingboard.com/')
      cy.visit('')
      cy.contains('Sign In').click()
    })
    
    // Positive Case
    it('Successful Login', () => {      
      cy.fixture('logUsers').then((user) => {
        const userData = user [0]
        cy.magentoLogin(userData.email, userData.password)
      });   
      cy.contains('Welcome').should('be.visible')
    })

    // Negative Case
    it('Unregistered Account', () => {
      cy.fixture('logUsers').then((user) => {
        const userData = user [1]
        cy.magentoLogin(userData.email, userData.password)
      });   
      cy.verifyErrorMessage('The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.')
      })
    
    it('Wrong Email', () => {
      cy.fixture('logUsers').then((user) => {
        const userData = user [2]
        cy.magentoLogin(userData.email, userData.password)
      });   
      cy.verifyErrorMessage('The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.')
      })

    it('Wrong Password', () => {
      cy.fixture('logUsers').then((user) => {
        const userData = user [3]
        cy.magentoLogin(userData.email, userData.password)
      });   
      cy.verifyErrorMessage('The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.')
      })

    it('Invalid Email', () => {
      cy.fixture('logUsers').then((user) => {
        const userData = user [4]
        cy.magentoLogin(userData.email, userData.password)
      });   
      cy.verifyErrorEmail('Please enter a valid email address')
      })

    it('Empty Email', () => {      
      cy.get('#pass').type('Password123')
      cy.get('#send2').click()
      cy.verifyErrorEmail('This is a required field')
      })
    
    it('Empty Password', () => {
      cy.get('#email').type('novatest@gmail.com')
      cy.get('#send2').click()
      cy.verifyErrorPassword('This is a required field')
      })

    it('Empty Field', () => {
      cy.get('#send2').click()
      cy.verifyErrorEmail('This is a required field')
      cy.verifyErrorPassword('This is a required field')      
      })
  })
  
  