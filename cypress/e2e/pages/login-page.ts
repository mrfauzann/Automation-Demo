/// <reference types="cypress-xpath" />

export class LoginPage{
    username_field = '//input[@id=\'user-name\']'
    password_field = '//input[@id=\'password\']'
    login_button = '//input[@id=\'login-button\']'
    error_message = '//*[@id="login_button_container"]/div/form/div[3]/h3'
    headerName_product = '//span[contains(text(),\'Products\')]'

    loginTemplate(userName: string, password: string) {
        cy.xpath(this.username_field).type(Cypress.env(userName));
        cy.xpath(this.password_field).type(Cypress.env(password), { log: false });
        cy.xpath(this.login_button).click()
    }

    loginValid() {
        this.loginTemplate('usernameValid', 'passAll');
        cy.xpath(this.headerName_product).should('be.visible');
        cy.xpath(this.headerName_product).should('have.text', 'Products');
    }

    loginLocked() {
        this.loginTemplate('usernameLock', 'passAll');
        cy.xpath(this.error_message).should('be.visible');
    }
}