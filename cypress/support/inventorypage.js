Cypress.Commands.add('AddProductToCart', (product) => {
    let productName = product.toLowerCase().split(" ").join("-")
    cy.get(`[data-test=add-to-cart-${productName}]`).click()
})


Cypress.Commands.add('RemoveProductFromCart', (product) => {
    let productName = product.toLowerCase().split(" ").join("-")
    cy.get(`[data-test=remove-${productName}]`).click()
})


Cypress.Commands.add('NavigateToCart', () => {
    cy.fixture('elements').then((locator) => {
        cy.get(locator.shoppingCartLink).should('be.visible').click()
    })
})

