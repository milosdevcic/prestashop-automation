const { test, expect } = require('@playwright/test');


test.only ('login test', async ({page}) => {

    await page.goto('/');
    const frame = page.frameLocator('#framelive');
    await frame.locator('a[title="Log in to your customer account"] span[class="hidden-sm-down"]').click();
    await expect(frame.locator('header.page-header h1')).toContainText('Log in to your account');
   
    

});
