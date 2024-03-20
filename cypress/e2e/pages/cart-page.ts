/// <reference types="cypress-xpath" />

import { HomePage } from "./home-page";

const homePage = new HomePage();

export class CartPage{
    
    checkout_button = '//button[@id=\'checkout\']'
    cart_button = '//a[@class=\'shopping_cart_link\']'
    information_title = '//span[@class=\'title\']'

    checkCart(){
        homePage.addToCart();
        cy.xpath(this.cart_button).click()
        const checkCarts = ["Sauce Labs Backpack", "Sauce Labs Bike Light",
            "Sauce Labs Bolt T-Shirt"];

            checkCarts.forEach((checkCart) => {
                const valueLocation = `//div[normalize-space()='${checkCart}']`;
                cy.xpath(valueLocation).should('exist').invoke('text').then((text)=>{
                    assert.equal(text, checkCart)
                });
              });
    }

    checkoutStep(){
        this.checkCart();
        cy.xpath(this.checkout_button).click();
        cy.xpath(this.information_title).should('exist').invoke('text').then((title)=>{
            assert.equal(title, 'Checkout: Your Information');
        })
    }
}