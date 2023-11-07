Cypress.Commands.add('AddSauceLabsBikeLightToCart', () => {
    cy.fixture('elements').then((locator) => {
        cy.get(locator.addToCartSauceLabsBikeLight).should('be.visible').click();
    })
})

Cypress.Commands.add('AddSauceLabsBackpackToCart', () => {
    cy.fixture('elements').then((locator) => {
        cy.get(locator.addSauceLabsBackpackToCart).should('be.visible').click();
    })
})


Cypress.Commands.add('NavigateToCart', () => {
    cy.fixture('elements').then((locator) => {
        cy.get(locator.shoppingCartLink).should('be.visible').click()
    })
})
