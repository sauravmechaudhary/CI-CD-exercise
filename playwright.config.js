const { defineConfig } = require('@playwright/test')

module.exports = defineConfig({
  // Change this to match your folder structure
  testDir: './src',
  // Look for any files ending in .spec.js or .test.js
  testMatch: ['**/*.spec.js'],
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