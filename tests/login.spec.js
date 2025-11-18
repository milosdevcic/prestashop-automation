const { test, expect } = require('@playwright/test');
const locators = require ('../locators/loginLocators');


test ('login test', async ({page}) => {

    await page.goto('/');
    const frame = page.frameLocator('#framelive');
    await frame.locator('a[title="Log in to your customer account"] span[class="hidden-sm-down"]').click();
    await expect(frame.locator('header.page-header h1')).toContainText('Log in to your account');
    await frame.locator('#field-email').fill('marlon.mante@gmail.com');
    await frame.locator('#field-password').fill('ZeBoGAdxjq6VQ0Y');
    await frame.locator('button[data-link-action="sign-in"]').click();



});
