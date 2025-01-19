describe('Login', () => {
    beforeEach(() => {
        cy.visit('/')
    })
  
    it('Berhasil login', () => {
        cy.fixture('data.json').then((data) => {
            const datauser = data;
            cy.loginreza(datauser.username, datauser.password)
        cy.contains('Change').click()
        });
    })

  })