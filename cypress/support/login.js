Cypress.Commands.add('LoginWithValidDetails', (username) => {
    cy.fixture('elements').then((locator) => {
        cy.get(locator.usernameField).should('be.visible').fill(username)
        cy.get(locator.passwordField).should('be.visible').fill(locator.validPassword)
        cy.get(locator.loginButton).should('be.visible').click()
        cy.url().should('include', "/inventory.html")
    })
})


Cypress.Commands.add('LoginWithInvalidDetails', (username, password) => {
    cy.fixture('elements').then((locator) => {
        cy.get(locator.usernameField).should('be.visible').fill(username)
        cy.get(locator.passwordField).should('be.visible').fill(password)
        cy.get(locator.loginButton).should('be.visible').click()
        cy.url().should('not.include', 'https://www.saucedemo.com/inventory.html')
    })
})


