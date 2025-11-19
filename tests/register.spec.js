const { test, expect } = require('@playwright/test');
const userData = require('../userData/userData');
const locators = require('../locators/registrationLocators');
const fs = require("fs");

test ('registration test', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveURL('https://demo.prestashop.com/#/en/front');
    const frame = page.frameLocator('#framelive');
    await frame.getByRole('link', { name: 'Create account' }).click();
    await expect(frame.locator('header.page-header h1')).toHaveText('Create an account');

    await expect(frame.locator(locators.genderMale)).not.toBeChecked();
    await expect(frame.locator(locators.genderFemale)).not.toBeChecked();
    await frame.locator(locators.genderMale).check();

    await expect(frame.locator(locators.firstName)).toHaveValue('');
    await expect(frame.locator(locators.lastName)).toHaveValue('');
    await expect(frame.locator(locators.email)).toHaveValue('');
    await expect(frame.locator(locators.password)).toHaveValue('');
    await frame.locator(locators.firstName).fill(userData.firstName);
    await frame.locator(locators.lastName).fill(userData.lastName);
    await frame.locator(locators.email).fill(userData.email);
    await frame.locator(locators.password).fill(userData.password);

    await frame.locator(locators.birthday).fill('12/12/2001');

    await expect(frame.locator(locators.gdprCheckbox)).not.toBeChecked();
    await expect(frame.locator(locators.offersCheckbox)).not.toBeChecked();
    await expect(frame.locator(locators.privacyCheckbox)).not.toBeChecked();
    await expect(frame.locator(locators.newsletterCheckbox)).not.toBeChecked();
    await frame.locator(locators.gdprCheckbox).check();
    await frame.locator(locators.privacyCheckbox).check();

    await frame.locator(locators.submitButton).click();

    await console.log(`Hello ${userData.firstName}, you have successfully created your account!`);

    await console.log(`Your credentials:`);
    await console.log(`First name: ${userData.firstName}`);
    await console.log(`Last name: ${userData.lastName}`);
    await console.log(`Email: ${userData.email}`);
    await console.log(`Password: ${userData.password}`);

    await expect(frame.locator(locators.logoutButton)).toBeVisible();
    await frame.locator(locators.logoutButton).click();


    fs.writeFileSync("lastCreatedUser.json", JSON.stringify(userData, null, 2));

});

