const { defineConfig } = require('@playwright/test')

module.exports = defineConfig({
  testDir: './e2e-tests',
  use: {
    baseURL: 'http://localhost:3000', // Match here
  },
  webServer: {
    command: 'npm start',
    url: 'http://localhost:3000', // And match here
    reuseExistingServer: !process.env.CI,
  },
})