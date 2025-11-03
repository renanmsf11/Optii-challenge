import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

const url = 'https://www.saucedemo.com'

Given('the user visit "Sauce Demo" main page', () => {
  cy.visit(url)
})

When('the user types valid "Standard" user credentials in "Login" page', () => {
  cy.fixture('pomLoginPage').then((el) => {
    cy.get(el.usernameField).should('be.visible').type(el.standard_user)
    cy.get(el.passwordField).should('be.visible').type(el.password)
  })
})

When('the user types valid "Glitch" user credentials in "Login" page', () => {
  cy.fixture('pomLoginPage').then((el) => {
    cy.get(el.usernameField).should('be.visible').type(el.glitch_user)
    cy.get(el.passwordField).should('be.visible').type(el.password)
  })
})
When('the user types valid "Locked Out" user credentials in "Login" page', () => {
  cy.fixture('pomLoginPage').then((el) => {
    cy.get(el.usernameField).should('be.visible').type(el.locked_user)
    cy.get(el.passwordField).should('be.visible').type(el.password)
  })
})

Then('the user click in "Login" button in "Login" page', () => {
  cy.fixture('pomLoginPage').then((el) => {
    cy.get(el.loginButton).should('be.visible').click();
  })
})

Then('the user is redirected to the "Product" page', () => {
  cy.get('span.title[data-test="title"]').should('be.visible').and('have.text', 'Products');
})


Then('system must return an error message "Epic sadface: Sorry, this user has been locked out."', () => {
  cy.get('h3[data-test="error"]').should('be.visible').and('have.text', 'Epic sadface: Sorry, this user has been locked out.')
})

When('the user types invalid user credentials in "Login" page', () => {
  cy.fixture('pomLoginPage').then((el) => {
    cy.get(el.usernameField).should('be.visible').type('invaliduser')
    cy.get(el.passwordField).should('be.visible').type('22222222')
  })
})
Then('system must return an error message "Epic sadface: Username and password do not match any user in this service"', () => {
  cy.get('h3[data-test="error"]').should('be.visible').and('have.text', 'Epic sadface: Username and password do not match any user in this service')
})