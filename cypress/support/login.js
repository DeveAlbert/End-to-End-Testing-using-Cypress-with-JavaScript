Cypress.Commands.add('Login', (username) => {
    cy.fixture('elements').then((locator) => {
        cy.get(locator.usernameField).should('be.visible').fill(username)
        cy.get(locator.passwordField).should('be.visible').fill(locator.password)
        cy.get(locator.loginButton).should('be.visible').click();
    })
})

/*

Cypress.Commands.add('UnsuccessfulLoginForEmptyDetails', (username) => {
    cy.fixture('elements').then((locator) => {
        
    })
})
*/

Cypress.Commands.add('verifySuccessfulLogin', () => {
    cy.location("pathname").should("eq", "/inventory.html")
})

Cypress.Commands.add('verifyUnsuccessfulLogin', () => {
    cy.fixture('elements').then((locator) => {
        cy.location("pathname").should("not.eq", "/inventory.html")
    })


})


