describe('Checkout Page', () => {

    beforeEach(() => {
        cy.fixture('elements').then((locator) => {
            Cypress.on('uncaught:exception', () => {
                return "Error caught by exception";
            })
            cy.LoginWithValidDetails(locator.standard)
        })
    })

    it('should display products in cart', () => {
        cy.AddProductToCart('Sauce Labs Backpack')
        cy.AddProductToCart('Sauce Labs Bike Light')
        cy.NavigateToCart()
    })

    it('should view product details that are added to cart', () => {
        cy.AddProductToCart('Sauce Labs Backpack')
        cy.NavigateToCart()
        cy.ViewProductDetailsAddedToCart()
    })

    it('should click checkout button', () => {
        cy.AddProductToCart('Sauce Labs Backpack')
        cy.NavigateToCart()
        cy.ViewProductDetailsAddedToCart()
        cy.ProceedToCheckout()
    })

    it('should fill complete data and submit form', () => {
        cy.AddProductToCart('Sauce Labs Backpack')
        cy.NavigateToCart()
        cy.ViewProductDetailsAddedToCart()
        cy.ProceedToCheckout()
        cy.FillCompleteDataAndSubmitForm('Emmanuel', 'Albert', '1234')
    })


    it('should fill incomplete data and submit form', () => {
        cy.AddProductToCart('Sauce Labs Backpack')
        cy.NavigateToCart()
        cy.ViewProductDetailsAddedToCart()
        cy.ProceedToCheckout()
        cy.FillIncompleteDataAndSubmitForm('Emmanuel', '', '')
    })

    it('should finish checkout process', () => {
        cy.AddProductToCart('Sauce Labs Backpack')
        cy.NavigateToCart()
        cy.ViewProductDetailsAddedToCart()
        cy.ProceedToCheckout()
        cy.FillCompleteDataAndSubmitForm('Emmanuel', 'Albert', '1234')
        cy.FinishCheckoutProcess()
    })

    it('should cancel checkout process', () => {
        cy.AddProductToCart('Sauce Labs Backpack')
        cy.NavigateToCart()
        cy.ViewProductDetailsAddedToCart()
        cy.ProceedToCheckout()
        cy.FillCompleteDataAndSubmitForm('Emmanuel', 'Albert', '1234')
        cy.CancelCheckoutProcess()
    })

})