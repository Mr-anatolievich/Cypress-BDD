import { defineStep } from "cypress-cucumber-preprocessor/steps";

defineStep('I wait on {int} milliseconds', time => {
    cy.wait(time)
})

defineStep('I see {string} on the tittle', title => {
    cy.title().should('include', title)
})

defineStep('I see {string} on the url', url => {
    cy.url().should('include', url)
})