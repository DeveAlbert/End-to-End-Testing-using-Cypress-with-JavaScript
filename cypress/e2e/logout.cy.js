describe('logout of application under test', () => {

    it('should logout as a standard user', () => {
        cy.fixture('elements').then((locator) => {
            cy.Logout(locator.standard)
        })
    })


    it('should logout as a locked out user', () => {
        cy.fixture('elements').then((locator) => {
            cy.Logout(locator.locked)
        })
    })


    it('should logout a problem user', () => {
        cy.fixture('elements').then((locator) => {
            cy.Logout(locator.problem)
        })
    })


    it('should logout a performance glitch user', () => {
        cy.fixture('elements').then((locator) => {
            cy.Logout(locator.glitch)
        })
    })


    it('should logout an error user', () => {
        cy.fixture('elements').then((locator) => {
            cy.Logout(locator.error)
        })
    })


    it('should logout a visual user', () => {
        cy.fixture('elements').then((locator) => {
            cy.Logout(locator.visual)
        })
    })

})