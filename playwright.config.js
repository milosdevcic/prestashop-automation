const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  timeout: 30000,
  use: {
    headless: false,
    viewport: { width: 1280, height: 720 },
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    baseURL: 'https://demo.prestashop.com/'
  },
});
