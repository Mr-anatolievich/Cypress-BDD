const URL = 'http://zero.webappsecurity.com/feedback.html'
const name = "#name"
const email = "#email"
const subject = "#subject"
const comment = "#comment"
const send_button = 'input[type="submit"]'


export class FeedbackPage{

    visit(){
        cy.visit(URL)
    }

    fillFeedbackForm(){
        cy.get(name).type('Ivan')
        cy.get(email).type('test@test.com')
        cy.get(subject).type('Problems')
        cy.get(comment).type('Huge problems')
    }

    submitFeedback(){
        cy.get(send_button).click()
    }
}

export const onFeedbackPage = new FeedbackPage()