/// <reference types="cypress-xpath" />

import { CartPage } from "./cart-page";

const cartPage = new CartPage();

export class CheckoutPage{
    
    firstName_field = '//input[@id=\'first-name\']'
    lastName_field = '//input[@id=\'last-name\']'
    zip_field = '//input[@id=\'postal-code\']'
    continue_button = '//input[@id=\'continue\']'

    checkoutOverview_title = '//span[@class=\'title\']'

    checkOutInformation(){
        cartPage.checkoutStep();
        cy.xpath(this.firstName_field).type('John')
        cy.xpath(this.lastName_field).type('Doe')
        cy.xpath(this.zip_field).type('124')
        cy.xpath(this.continue_button).click()
        cy.xpath(this.checkoutOverview_title).should('exist').invoke('text').then((title)=>{
            assert.equal(title, 'Checkout: Overview');
        })
    }
}