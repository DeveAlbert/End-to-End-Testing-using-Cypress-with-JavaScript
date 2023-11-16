describe('Inventory Page', () => {

  beforeEach(() => {
    cy.fixture('elements').then((locator) => {
      Cypress.on('uncaught:exception', () => {
        return "Error caught by exception";
      })
      cy.LoginWithValidDetails(locator.standard)
    })
  })


  it('should add Sauce Labs Backpack to cart', () => {
    cy.AddProductToCart('Sauce Labs Backpack')
  })

  it('should add Sauce Labs Bike Light to cart', () => {
    cy.AddProductToCart('Sauce Labs Bike Light')
  })

  it('should remove Sauce Labs Bike Light from cart', () => {
    cy.AddProductToCart('Sauce Labs Bike Light')
    cy.RemoveProductFromCart('Sauce Labs Bike Light')
  })



})