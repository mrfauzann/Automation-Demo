import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    baseUrl: 'https://www.saucedemo.com/',
    usernameValid: 'standard_user',
    usernameError: 'error_user',
    usernameLock: 'locked_out_user',
    passAll: 'secret_sauce'
  }
});
