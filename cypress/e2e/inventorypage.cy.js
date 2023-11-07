describe('Inventory Page', () => {

    it.only('should add sauceLabs bike light to cart', () => {
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
  
})