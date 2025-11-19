const { test, expect } = require('@playwright/test');
const fs = require("fs");
const loginLocators = require('../locators/loginLocators');
const rawData = fs.readFileSync("lastCreatedUser.json");
const user = JSON.parse(fs.readFileSync("lastCreatedUser.json"));

test ('login test', async ({page}) => {
    
    await page.goto('/');
    await expect(page).toHaveURL('https://demo.prestashop.com/#/en/front');
    const frame = page.frameLocator('#framelive');
    await frame.locator(loginLocators.loginButton).click();
    await expect(frame.locator(loginLocators.pageHeader)).toContainText('Log in to your account');
    await expect(frame.locator(loginLocators.submitButton)).toContainText('Sign in');
    await expect(frame.locator(loginLocators.submitButton)).toBeEnabled();
    await expect(frame.locator('div.forgot-password a')).toBeVisible();

    await expect(frame.locator(loginLocators.email)).toHaveValue('');
    await expect(frame.locator(loginLocators.password)).toHaveValue('');
    await frame.locator(loginLocators.email).fill(user.email);
    await frame.locator(loginLocators.password).fill(user.password);
    await frame.locator(loginLocators.submitButton).click();
    await expect(frame.locator(loginLocators.usersName)).toContainText(user.firstName);

    await console.log(`Hello ${user.firstName}, you have been successfully logged in!`);

    await expect(frame.locator(loginLocators.logoutButton)).toBeVisible();
    await frame.locator(loginLocators.logoutButton).click();


});
