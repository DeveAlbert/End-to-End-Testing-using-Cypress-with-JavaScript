describe('Checkout Page', () => {

    it('should fill and submit checkout information', () => {
        cy.fixture('elements').then((locator) => {
            cy.Login(locator.standard)
            cy.AddSauceLabsBikeLightToCart()
            cy.AddSauceLabsBackpackToCart()
            cy.NavigateToCart()
            cy.VerifyShoppingcartPageTitle()
            cy.VerifyExpectedProductsAreAddedToCart()
            cy.Checkout()
            cy.CheckoutCartPageTitle()
            cy.FillAndSubmitCheckoutForm('Emmanuel', 'Albert', '9087')
        })
    })

    it('should verify that checkout information is submitted', () => {
        cy.fixture('elements').then((locator) => {
            cy.Login(locator.standard)
            cy.AddSauceLabsBikeLightToCart()
            cy.AddSauceLabsBackpackToCart()
            cy.NavigateToCart()
            cy.VerifyShoppingcartPageTitle()
            cy.VerifyExpectedProductsAreAddedToCart()
            cy.Checkout()
            cy.CheckoutCartPageTitle()
            cy.FillAndSubmitCheckoutForm('Emmanuel', 'Albert', '9087')
            cy.VerifyThatCheckoutInformationIsSubmitted()
        })
    })

   
    it('should finish checkout process', () => {
        cy.fixture('elements').then((locator) => {
            cy.Login(locator.standard)
            cy.AddSauceLabsBikeLightToCart()
            cy.AddSauceLabsBackpackToCart()
            cy.NavigateToCart()
            cy.VerifyShoppingcartPageTitle()
            cy.VerifyExpectedProductsAreAddedToCart()
            cy.Checkout()
            cy.CheckoutCartPageTitle()
            cy.FillAndSubmitCheckoutForm('Emmanuel', 'Albert', '9087')
            cy.VerifyThatCheckoutInformationIsSubmitted()
            cy.FinishCheckout()
        })
    })

    it('should cancel checkout process', () => {
        cy.fixture('elements').then((locator) => {
            cy.Login(locator.standard)
            cy.AddSauceLabsBikeLightToCart()
            cy.AddSauceLabsBackpackToCart()
            cy.NavigateToCart()
            cy.VerifyShoppingcartPageTitle()
            cy.VerifyExpectedProductsAreAddedToCart()
            cy.Checkout()
            cy.CheckoutCartPageTitle()
            cy.FillAndSubmitCheckoutForm('Emmanuel', 'Albert', '9087')
            cy.VerifyThatCheckoutInformationIsSubmitted()
            cy.CancelCheckoutProcess()
        })
    })

    it('should verify that checkout process is finished', () => {
        cy.fixture('elements').then((locator) => {
            cy.Login(locator.standard)
            cy.AddSauceLabsBikeLightToCart()
            cy.AddSauceLabsBackpackToCart()
            cy.NavigateToCart()
            cy.VerifyShoppingcartPageTitle()
            cy.VerifyExpectedProductsAreAddedToCart()
            cy.Checkout()
            cy.CheckoutCartPageTitle()
            cy.FillAndSubmitCheckoutForm('Emmanuel', 'Albert', '9087')
            cy.VerifyThatCheckoutInformationIsSubmitted()
            cy.FinishCheckout()
            cy.VerifyThatCheckoutProcessIsFinished()
        })
    })
    

    it('should verify that checkout process is cancelled', () => {
        cy.fixture('elements').then((locator) => {
            cy.Login(locator.standard)
            cy.AddSauceLabsBikeLightToCart()
            cy.AddSauceLabsBackpackToCart()
            cy.NavigateToCart()
            cy.VerifyShoppingcartPageTitle()
            cy.VerifyExpectedProductsAreAddedToCart()
            cy.Checkout()
            cy.CheckoutCartPageTitle()
            cy.FillAndSubmitCheckoutForm('Emmanuel', 'Albert', '9087')
            cy.VerifyThatCheckoutInformationIsSubmitted()
            cy.CancelCheckoutProcess()
            cy.VerifyThatCheckoutProcessIsCancelled()
        })
    })


})

