Cypress.Commands.add('FillAndSubmitCheckoutForm', (firstname, lastname, zipcode) => {
    cy.fixture('elements').then((locator) => {
        cy.get(locator.firstnameField).should('be.visible').fill(firstname)
        cy.get(locator.lastnameField).should('be.visible').fill(lastname)
        cy.get(locator.zipcodeField).should('be.visible').fill(zipcode)
        cy.get(locator.continueButton).should('be.visible').click()
    })
})

Cypress.Commands.add('VerifyThatCheckoutInformationIsSubmitted', () => {
    cy.fixture('elements').then((locator) => {
        cy.get(locator.checkoutOverviewPageTitle).should('be.visible')
        .invoke('text').then((checkoutOverviewPageTitle) => {
            const checkoutOverviewPageTitleElement = checkoutOverviewPageTitle
            expect(checkoutOverviewPageTitleElement).to.include('Checkout: Overview')
        })
    })
})

Cypress.Commands.add('FinishCheckout', () => {
    cy.fixture('elements').then((locator) => {
        cy.get(locator.finishCheckoutButton).should('be.visible').click()
    })
})

Cypress.Commands.add('CancelCheckoutProcess', () => {
    cy.fixture('elements').then((locator) => {
        cy.get(locator.cancelCheckoutButton).should('be.visible').click()
    })
})


Cypress.Commands.add('VerifyThatCheckoutProcessIsCancelled', () => {
    cy.fixture('elements').then((locator) => {
        cy.get(locator.inventorypageTitle)
        .invoke('text').then((inventorypageTitle) => {
            const inventorypageTitleElement = inventorypageTitle
            expect(inventorypageTitleElement).to.include('Products')
        })
    })
})


Cypress.Commands.add('VerifyThatCheckoutProcessIsFinished', () => {
    cy.fixture('elements').then((locator) => {
        cy.get(locator.finishCheckoutPage).should('be.visible')
        .contains('Thank you for your order')
    })
})



