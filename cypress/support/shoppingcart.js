//create inventory page and move appropriate commands 
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

Cypress.Commands.add('VerifyShoppingcartPageTitle', () => {
    cy.fixture('elements').then((locator) => {
        cy.get(locator.shoppingCartLink).should('be.visible').click()
        cy.get(locator.shoppingcartPageTitle).invoke('text').then((pageTitle) => {
            const pageTitleElement = pageTitle
            expect(pageTitleElement).to.include('Your Cart')
        })
    })
})
    
Cypress.Commands.add('VerifyExpectedProductsAreAddedToCart', () => {
    cy.fixture('elements').then((locator) => {
        cy.get(locator.sauceLabsBackpackAddedToCart).invoke('text').then((backpackTitle) => {
                const backpackTitleElement = backpackTitle
                expect(backpackTitleElement).to.include('Sauce Labs Backpack')
            })

        cy.get(locator.sauceLabsBikelightAddedToCart).invoke('text').then((bikelightTitle) => {
                const bikelightTitleElement = bikelightTitle
                expect(bikelightTitleElement).to.include('Sauce Labs Bike Light')
            })
        })
})

Cypress.Commands.add('Checkout', () => {
    cy.fixture('elements').then((locator) => {
        cy.get(locator.checkoutButton).should('be.visible').click()
    })
})

Cypress.Commands.add('CheckoutCartPageTitle', () => {
    cy.fixture('elements').then((locator) => {
        cy.get(locator.checkoutPageTitle).invoke('text').then((checkoutPageTitle) => {
            const checkoutPageTitleElement = checkoutPageTitle
            expect(checkoutPageTitleElement).to.include('Checkout: Your Information')
        })
    })
})

Cypress.Commands.add('ContinueShopping', () => {
    cy.fixture('elements').then((locator) => {
        cy.get(locator.continueshoppingButton).should('be.visible').click()
    })
})

Cypress.Commands.add('ContinueShoppingPageTitle', () => {
    cy.fixture('elements').then((locator) => {
        cy.get(locator.inventorypageTitle)
        .invoke('text').then((inventorypageTitle) => {
            const inventorypageTitleElement = inventorypageTitle
            expect(inventorypageTitleElement).to.include('Products')
        })
    })
})



