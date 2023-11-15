describe('login to application under test', () => {

  it('should login as a standard user', () => {
    cy.fixture('elements').then((locator) => {
      cy.LoginWithValidDetails(locator.standard)
    })
  })

  it('should not login as a locked out user', () => {
    cy.fixture('elements').then((locator) => {
      cy.LoginWithInvalidDetails(locator.locked, 'secret_sauce')
    })
  })

  it('should login as a problem user', () => {
    cy.fixture('elements').then((locator) => {
      cy.LoginWithValidDetails(locator.problem)
    })
  })

  it('should login as a performance glitch user', () => {
    cy.fixture('elements').then((locator) => {
      cy.LoginWithValidDetails(locator.glitch)
    })
  })

  it('should login as an error user', () => {
    cy.fixture('elements').then((locator) => {
      cy.LoginWithValidDetails(locator.error)
    })
  })

  it('should login as a visual user', () => {
    cy.fixture('elements').then((locator) => {
      cy.LoginWithValidDetails(locator.visual)
    })
  })

  it('should not login with valid username and invalid password', () => {
    cy.fixture('elements').then((locator) => {
      cy.LoginWithInvalidDetails(locator.standard, 'secrets_sauce')
    })
  })

  it('should not login with invalid username and valid password', () => {
    cy.fixture('elements').then((locator) => {
      cy.LoginWithInvalidDetails('invalidusername', 'secret_sauce')
    })
  })

  it('should not login with invalid username and invalid password', () => {
    cy.fixture('elements').then((locator) => {
      cy.LoginWithInvalidDetails('invalidusername', 'secrets_sauce')
    })
  })

})



