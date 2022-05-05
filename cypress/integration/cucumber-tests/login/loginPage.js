
export class LoginPage{

    visit(){
        cy.visit('http://zero.webappsecurity.com/login.html')
    }

    fillUsername(name){
        cy.get('#user_login').type(name)
    }

    fillPassword(password){
        cy.get('#user_password').type(password)
    }

    submitForm(){
        cy.get('input[type="submit"]').click()
    }
}

export const onLoginPage = new LoginPage()