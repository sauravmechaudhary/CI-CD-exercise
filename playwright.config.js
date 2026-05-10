const { defineConfig } = require('@playwright/test')

module.exports = defineConfig({
  testDir: './e2e-tests', // Ensure this matches where your .spec.js files are!
  testMatch: '**/*.spec.js',
  use: {
    baseURL: 'http://localhost:5001',
  },
  webServer: {
    command: 'npm start',
    url: 'http://localhost:5001',
    reuseExistingServer: !process.env.CI,
    timeout: 120 * 1000,
  }
})