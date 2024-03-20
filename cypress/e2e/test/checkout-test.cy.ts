import { CheckoutPage } from '../pages/checkout-page';
import { LoginPage } from '../pages/login-page';

const checkoutPage = new CheckoutPage();
const loginPage = new LoginPage();

describe('Competency Section', function () {
  beforeEach(function () {
    cy.visit(Cypress.env('baseUrl'));
    loginPage.loginValid();
  });

  it('Checkout', function () {
    checkoutPage.checkOutInformation();
  });
});
