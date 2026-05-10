const { defineConfig } = require('@playwright/test')

module.exports = defineConfig({
  testDir: './e2e-tests', // This tells Playwright ONLY to look here
  use: {
    baseURL: 'http://localhost:3000',
  },
  webServer: {
    command: 'npm start',
    url: 'http://localhost:3000',
    reuseExistingServer: !process.env.CI,
  },
})