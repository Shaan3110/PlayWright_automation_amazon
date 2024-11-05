// Include Playwirght module
const { Page, BrowserContext, Locator, expect } = require('@playwright/test');

exports.LoginPage = class LoginPage {

    /**
     * @param {import('@playwright/test').Page} page
     * @param {import('@playwright/test').BrowserContext} context
     */


    constructor(page, context) { 
        //Init page object
        this.page = page;
        this.context = context;
        this.userNameField = page.locator('//input[@id="user-name"]');
        this.passwordField = page.locator('//input[@id="password"]');
        this.clickOnAddtoCart = page.locator('//button[text()="Add to cart"]');
        this.clickOnLogin = page.locator('//input[@id="login-button"]');
    }

    async navigateToBaseURL() {
        await this.page.goto("https://www.saucedemo.com/");
        await this.page.waitForLoadState('networkidle');
        await this.page.waitForTimeout(1000); 
    }

    async enterUserName(username) {
        await this.userNameField.click();
        await this.userNameField.fill(username);
        // await this.userNameField.press('Enter');
    }

    async enterPassword(password) {
        // Forcefully click and then fill the password field
        await this.passwordField.click();
        await this.passwordField.fill(password);
    }

    // async clickOnTnCCheckbox() {
    //     await expect(this.TcCheckbox).toBeVisible();
    //     await this.TcCheckbox.click();
    // }

    // async acceptAlert() {
    //     this.page.on('dialog', async dialog => {
    //         expect(dialog.type()).toContain('alert');
    //         const dialogMessage = dialog.message();
    //         if (dialogMessage.includes('Please accept the terms and conditions')) {
    //             console.log("Handling TnC alert: " + dialogMessage);
    //             expect(dialogMessage).toContain('Please accept the terms and conditions');
    //         } else if (dialogMessage.includes('Entered credentials are incorrect')) {
    //             console.log("Handling incorrect credentials alert: " + dialogMessage);
    //             expect(dialogMessage).toContain('Entered credentials are incorrect, please enter correct credentials');
    //         } else {
    //             console.log("Unexpected dialog message: " + dialogMessage);
    //         }
    //         await dialog.accept();
    //     });
    //     await this.clickOnLogin.click();
    //     await this.page.waitForTimeout(1000);
    // }

    async tapOnLogin() {
        await expect(this.clickOnLogin).toBeVisible();
        await this.clickOnLogin.click();
        await this.page.waitForTimeout(1000);
    }

    async checkVisibilityOfAllAddToCartButtons() {
    
        // Ensure there are exactly 8 "Add to Cart" buttons
        await expect(this.clickOnAddtoCart).toHaveCount(6);
    
        // Check visibility of each button
        for (let i = 0; i < 6; i++) {
            await expect(this.clickOnAddtoCart.nth(i)).toBeVisible();
        }
    }

    async tapOnAllAddToCart() {
        // Check visibility of each button
        for (let i = 0; i < 6; i++) {
            await this.clickOnAddtoCart.nth(i).click();
            await this.page.waitForTimeout(1000);
        }
    }
}
    
  