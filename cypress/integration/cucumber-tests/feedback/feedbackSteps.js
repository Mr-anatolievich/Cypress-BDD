import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { onFeedbackPage } from "./feedbackPage";

Given('I open feedback page', () => {
    onFeedbackPage.visit()
})

When('I fill feedback form', () => {
    onFeedbackPage.fillFeedbackForm()
})

When('I click on send button', () => {
    onFeedbackPage.submitFeedback()
})