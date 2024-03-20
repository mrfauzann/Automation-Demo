import { HomePage } from '../pages/home-page';
import { LoginPage } from '../pages/login-page';

const homePage = new HomePage();
const loginPage = new LoginPage();

describe('Competency Section', function () {
  beforeEach(function () {
    cy.visit(Cypress.env('baseUrl'));
    loginPage.loginValid();
  });

  it('Add To Cart', function () {
    homePage.addToCart();
  });
});
