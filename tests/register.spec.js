const { test, expect } = require('@playwright/test');
const userData = require('../userData/userData');
const locators = require('../locators/registrationLocators');

test('registration test', async ({ page }) => {
    await page.goto('/');
    const frame = page.frameLocator('#framelive');
    await frame.getByRole('link', { name: 'Create account' }).click();
    await expect(frame.locator('header.page-header h1')).toHaveText('Create an account');

    await frame.locator(locators.genderMale).check();
    await frame.locator(locators.firstName).fill(userData.firstName);
    await frame.locator(locators.lastName).fill(userData.lastName);
    await frame.locator(locators.email).fill(userData.email);
    await frame.locator(locators.password).fill(userData.password);
    await frame.locator(locators.birthday).fill('12/12/2012');
    await frame.locator(locators.gdprCheckbox).check();
    await frame.locator(locators.privacyCheckbox).check();
    await frame.locator(locators.submitButton).click();
    await console.log(userData);

});

