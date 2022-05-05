import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { onLoginPage } from './loginPage'

Given ('I open login page', () => {
    onLoginPage.visit()
})

When('I fill username with {string}', username => {
    onLoginPage.fillUsername(username)
})

When('I fill password with {string}', password => {
    onLoginPage.fillPassword(password)
})

When('I click on submit login', () => {
    onLoginPage.submitForm()
})

Then('I should see homepage', () => {
    cy.get('#account_summary_tab').should('be.visible')
})

Then('I should see error message', () => {
    cy.get('.alert-error').should('be.visible')
})