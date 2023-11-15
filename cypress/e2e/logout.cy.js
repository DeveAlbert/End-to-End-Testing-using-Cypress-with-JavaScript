describe('logout of application under test', () => {

    it('should logout a standard user', () => {
        cy.fixture('elements').then((locator) => {
            cy.Login(locator.standard)
            cy.Logout(locator.standard)
        })
    })


    it('should logout a locked out user', () => {
        cy.fixture('elements').then((locator) => {
            cy.Login(locator.locked)
            cy.Logout(locator.locked)
        })
    })


    it('should logout a problem user', () => {
        cy.fixture('elements').then((locator) => {
            cy.Login(locator.problem)
            cy.Logout(locator.problem)
        })
    })


    it('should logout a performance glitch user', () => {
        cy.fixture('elements').then((locator) => {
            cy.Login(locator.glitch)
            cy.Logout(locator.glitch)
        })
    })


    it('should logout an error user', () => {
        cy.fixture('elements').then((locator) => {
            cy.Login(locator.error)
            cy.Logout(locator.error)
        })
    })


    it('should logout a visual user', () => {
        cy.fixture('elements').then((locator) => {
            cy.Login(locator.visual)
            cy.Logout(locator.visual)
        })
    })

})