import { LoginPage } from '../pages/login-page';

const loginPage = new LoginPage();

describe('Competency Section', function () {
  beforeEach(function () {
    cy.visit(Cypress.env('baseUrl'));
  });

  it('Login As Valid User', function () {
    loginPage.loginValid();
  });

  it('Login As Manager 1', function () {
    loginPage.loginLocked();
  });
});
