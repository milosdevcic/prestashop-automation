const { test, expect } = require('@playwright/test');
const fs = require("fs");
const loginLocators = require('../locators/loginLocators');
const rawData = fs.readFileSync("lastCreatedUser.json");
const user = JSON.parse(fs.readFileSync("lastCreatedUser.json"));

test ('login test', async ({page}) => {
    
    await page.goto('/');
    const frame = page.frameLocator('#framelive');
    await frame.locator(loginLocators.loginButton).click();
    await expect(frame.locator('header.page-header h1')).toContainText('Log in to your account');
    await frame.locator(loginLocators.email).fill(user.email);
    await frame.locator(loginLocators.password).fill(user.password);
    await frame.locator(loginLocators.submitButton).click();
    await expect(frame.locator("a[title='View my customer account'] span[class='hidden-sm-down']")).toContainText(user.firstName);


});
