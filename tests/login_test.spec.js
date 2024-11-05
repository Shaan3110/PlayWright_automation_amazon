const { expect } = require("@playwright/test");
const test = require('../utils/baseTest');


test(`Verify the UI and different elements of the Login Page`, { tag: '@Smoke'}, async ({ loginPage }) => {
    await test.step(`Navigate to Application`, async () => {
        await loginPage.navigateToBaseURL();
    });
    await test.step(`Click on Username Field`, async () => {
        await loginPage.enterUserName("standard_user");
    });
    await test.step(`Click on Password Field`, async () => {
        await loginPage.enterPassword("secret_sauce");
    });
    await test.step(`Tap on Login Button and check it's visibility`, async () => {
        await loginPage.tapOnLogin();
    });
    await test.step(`Check visibility of all Add to Cart Button`, async () => {
        await loginPage.checkVisibilityOfAllAddToCartButtons();
    });
    await test.step(`Click on all Add to Cart Button`, async () => {
        await loginPage.tapOnAllAddToCart();
    });
  }); 