Cypress.Commands.add('ViewProductDetailsAddedToCart', (productDesc) => {
    cy.fixture('elements').then((locator) => {
        cy.get(locator.sauceLabsBackpackDetails)
            .invoke('text').then((sauceLabsBackpackDetails) => {
                const sauceLabsBackpackDetailsText = sauceLabsBackpackDetails
                expect(sauceLabsBackpackDetailsText).to.include(productDesc)
            })
    })
})


Cypress.Commands.add('ProceedToCheckout', () => {
    cy.fixture('elements').then((locator) => {
        cy.get(locator.proceedToCheckoutButton).should('be.visible').click()
        cy.url().should('include', 'checkout-step-one.html')
    })
})


Cypress.Commands.add('FillCompleteDataAndSubmitForm', (firstname, lastname, zipcode) => {
    cy.fixture('elements').then((locator) => {
        cy.get(locator.firstnameField).should('be.visible').fill(firstname)
        cy.get(locator.lastnameField).should('be.visible').fill(lastname)
        cy.get(locator.zipcodeField).should('be.visible').fill(zipcode)
        cy.get(locator.continueButton).should('be.visible').click()
        cy.url().should('include', 'checkout-step-two.html')
    })
})

Cypress.Commands.add('FillIncompleteDataAndSubmitForm', (firstname, lastname, zipcode) => {
    cy.fixture('elements').then((locator) => {
        cy.get(locator.firstnameField).should('be.visible').fill(firstname)
        cy.get(locator.lastnameField).should('be.visible').fill(lastname)
        cy.get(locator.zipcodeField).should('be.visible').fill(zipcode)
        cy.get(locator.continueButton).should('be.visible').click()
        cy.url().should('not.include', 'checkout-step-two.html')
    })
})


Cypress.Commands.add('FinishCheckoutProcess', () => {
    cy.fixture('elements').then((locator) => {
        cy.get(locator.finishCheckoutButton).should('be.visible').click()
        cy.url().should('include', 'checkout-complete.html')
        cy.get(locator.finishCheckoutPage).should('be.visible')
            .contains('Thank you for your order')
    })
})


Cypress.Commands.add('CancelCheckoutProcess', () => {
    cy.fixture('elements').then((locator) => {
        cy.get(locator.cancelCheckoutButton).should('be.visible').click()
        cy.url().should('include', "/inventory.html")
        cy.get(locator.inventorypageTitle)
            .invoke('text').then((inventorypageTitle) => {
                const inventorypageTitleElement = inventorypageTitle
                expect(inventorypageTitleElement).to.include('Products')
            })
    })
})