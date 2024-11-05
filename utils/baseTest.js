const { test: baseTest } = require('@playwright/test');
const { LoginPage } = require('../pages/loginPage');

const test = baseTest.extend({
    loginPage: async ({ page, context }, use) => {
        await use(new LoginPage(page, context));
    }
});

// Export the base class for use in specific test files
module.exports = test;