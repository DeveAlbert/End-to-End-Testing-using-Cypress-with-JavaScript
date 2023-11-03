describe('Shopping Cart Page', () => {

  it('should add sauceLabs bike light to cart', () => {
    cy.fixture('elements').then((locator) => {
      cy.Login(locator.standard)
      cy.addSauceLabsBikeLightToCart()
    })
  })

  it('should add saucelabs backpack to cart', () => {
    cy.fixture('elements').then((locator) => {
      cy.Login(locator.standard)
      cy.addSauceLabsBackpackToCart()
    })
  })

  it('should navigate to cart', () => {
    cy.fixture('elements').then((locator) => {
      cy.Login(locator.standard)
      cy.NavigateToCart()
    })
  })

  it('should verify that it navigates to the shopping cart page', () => {
    cy.fixture('elements').then((locator) => {
      cy.Login(locator.standard)
      cy.NavigateToCart()
      cy.verifyShoppingcartPageTitle()
    })
  })

//change first letter of functions to uppercase
  it('should verify that the expected products was added to the shopping cart page', () => {
    cy.fixture('elements').then((locator) => {
      cy.Login(locator.standard)
      cy.addSauceLabsBikeLightToCart()
      cy.addSauceLabsBackpackToCart()
      cy.NavigateToCart()
      cy.verifyShoppingcartPageTitle()
      cy.verifyExpectedProductsAreAddedToCart()
    })
  })

  it('should continue to checkout page', () => {
    cy.fixture('elements').then((locator) => {
      cy.Login(locator.standard)
      cy.AddSauceLabsBikeLightToCart()
      cy.AddSauceLabsBackpackToCart()
      cy.NavigateToCart()
      cy.VerifyShoppingcartPageTitle()
      cy.VerifyExpectedProductsAreAddedToCart()
      cy.Checkout()
    })
  })

  it('should verify a user is taken to the checkout page', () => {
    cy.fixture('elements').then((locator) => {
      cy.Login(locator.standard)
      cy.AddSauceLabsBikeLightToCart()
      cy.AddSauceLabsBackpackToCart()
      cy.NavigateToCart()
      cy.VerifyShoppingcartPageTitle()
      cy.VerifyExpectedProductsAreAddedToCart()
      cy.Checkout()
      cy.CheckoutCartPageTitle()
    })
  })

  it('should let a user continue shopping', () => {
    cy.fixture('elements').then((locator) => {
      cy.Login(locator.standard)
      cy.AddSauceLabsBikeLightToCart()
      cy.AddSauceLabsBackpackToCart()
      cy.NavigateToCart()
      cy.VerifyShoppingcartPageTitle()
      cy.VerifyExpectedProductsAreAddedToCart()
      cy.ContinueShopping()
    })
  })

  it.only('should verify a user can continue shopping', () => {
    cy.fixture('elements').then((locator) => {
      cy.Login(locator.standard)
      cy.AddSauceLabsBikeLightToCart()
      cy.AddSauceLabsBackpackToCart()
      cy.NavigateToCart()
      cy.VerifyShoppingcartPageTitle()
      cy.VerifyExpectedProductsAreAddedToCart()
      cy.ContinueShopping()
      cy.ContinueShoppingPageTitle()
    })
  })
  
})



