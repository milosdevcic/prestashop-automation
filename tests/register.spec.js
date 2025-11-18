const { test, expect } = require('@playwright/test');
const { faker } = require('@faker-js/faker');
const firstName = faker.person.firstName();
const lastName = faker.person.lastName();
const email = faker.internet.email();
const passwordLength = Math.floor(Math.random() * (72 - 8 + 1)) + 8;
const password = faker.internet.password(passwordLength);

test('registration test', async ({ page }) => {
    await page.goto('/');
    const frame = page.frameLocator('#framelive');
    await frame.getByRole('link', { name: 'Create account' }).click();
    await expect(frame.locator('header.page-header h1')).toHaveText('Create an account');

    await frame.locator('#field-id_gender-1').check();
    await frame.locator('#field-firstname').fill(firstName);
    await frame.locator('#field-lastname').fill(lastName);
    await frame.locator('#field-email').fill(email);
    await frame.locator('#field-password').fill(password);
    await frame.locator('#field-birthday').fill('12/12/2012');
    await frame.locator('input[name="psgdpr"]').check();
    await frame.locator('input[name="customer_privacy"]').check();
    await frame.locator('button[data-link-action="save-customer"]').click();





});
