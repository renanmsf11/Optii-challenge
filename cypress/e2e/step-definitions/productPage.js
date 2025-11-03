import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";


Then('the user add "product" to cart in "Product" page', () => {
    cy.fixture('pomProductPage').then((el) => {
        cy.get(el.addToCartItem1).should('be.visible').click();
    })
})

Then('the user click in "Cart" icon in "Product" page', () => {
    cy.fixture('pomProductPage').then((el) => {
        cy.get(el.shoppingCartButton).should('be.visible').click();
    })
})

Then('the user is redirected to the "Cart" page', () => {
    cy.get('span.title[data-test="title"]').should('be.visible').and('have.text', 'Your Cart');
}
)


Then('the user click in "Remove" button in "Cart" or "Product" page', () => {
    cy.fixture('pomProductPage').then((el) => {
        cy.get(el.removeItem1).should('be.visible').click();
    })
})

