describe('login to application under test', () => {

  it('should login as a standard user', () => {
    cy.fixture('elements').then((locator) => {
      cy.Login(locator.standard)
    })
  })


  it('should login as a locked out user', () => {
    cy.fixture('elements').then((locator) => {
      cy.Login(locator.locked)
    })
  })


  it('should login as a problem user', () => {
    cy.fixture('elements').then((locator) => {
      cy.Login(locator.problem)
    })
  })


  it('should login as a performance glitch user', () => {
    cy.fixture('elements').then((locator) => {
      cy.Login(locator.glitch)
    })
  })


  it('should login as a error user', () => {
    cy.fixture('elements').then((locator) => {
      cy.Login(locator.error)
    })
  })


  it('should login as a visual user', () => {
    cy.fixture('elements').then((locator) => {
      cy.Login(locator.visual)
    })
  })

  it.skip('should verify successful login', () => {
    cy.fixture('elements').then((locator) => {
      cy.Login(locator.standard)
    })
    cy.verifySuccessfulLogin()
    
  })

  it.only('should not login user entering incorrect details', () => {
    cy.fixture('elements').then((locator) => {
      cy.Login('jjjj')
      cy.verifyUnsuccessfulLogin()
    })
  })

  /*
  it.only('should give an error to user for no details provided', () => {
    cy.fixture('elements').then((locator) => {
      cy.Login()
      cy.verifyUnsuccessfulLogin()
    })
  })
  */
 



})