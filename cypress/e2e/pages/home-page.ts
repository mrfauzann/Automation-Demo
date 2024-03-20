/// <reference types="cypress-xpath" />

export class HomePage{
    
    bubbleCart_icon = '//*[@id="shopping_cart_container"]/a/span'
    cart_button = '//a[@class=\'shopping_cart_link\']'

    addToCart() {
        const addToCarts = ["add-to-cart-sauce-labs-backpack", "add-to-cart-sauce-labs-bike-light",
            "add-to-cart-sauce-labs-bolt-t-shirt"];

            addToCarts.forEach((addToCart) => {
                const valueLocation = `//button[@id='${addToCart}']`;
                cy.xpath(valueLocation).should("exist");
                cy.xpath(valueLocation).click();
              });
        
        cy.xpath(this.bubbleCart_icon).should('exist').invoke('text').then((total)=>{
            expect(total).to.equal('3')
        })

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

    checkCart(){
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
}