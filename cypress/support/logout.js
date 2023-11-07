Cypress.Commands.add('Logout', () => {
    cy.fixture('elements').then((locator) => {
        cy.get(locator.menuButton).should('be.visible').click()
        cy.get(locator.logoutButton).should('be.visible').click()
    })
})