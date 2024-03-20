import { CartPage } from '../pages/cart-page';
import { LoginPage } from '../pages/login-page';

const cartPage = new CartPage();
const loginPage = new LoginPage();

describe('Competency Section', function () {
  beforeEach(function () {
    cy.visit(Cypress.env('baseUrl'));
    loginPage.loginValid();
  });

  it('Add To Cart', function () {
    cartPage.checkCart();
  });
});
