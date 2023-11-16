Cypress.Commands.add('Logout', (username) => {
    cy.fixture('elements').then((locator) => {
        cy.get(locator.usernameField).should('be.visible').fill(username)
        cy.get(locator.passwordField).should('be.visible').fill(locator.validPassword)
        cy.get(locator.loginButton).should('be.visible').click()
        cy.url().should('include', "/inventory.html")
        cy.get(locator.menuButton).should('be.visible').click()
        cy.get(locator.logoutButton).should('be.visible').click()
        cy.url().should('eq', 'https://www.saucedemo.com/')
    })
})