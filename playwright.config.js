const { defineConfig } = require('@playwright/test')

module.exports = defineConfig({
  testDir: './src',
  testMatch: '**/*.spec.js',
  use: {
    // Match the port defined in your index.js
    baseURL: 'http://localhost:5001',
  },
  webServer: {
    command: 'npm start',
    // Match the port defined in your index.js
    url: 'http://localhost:5001',
    reuseExistingServer: !process.env.CI,
    // Give CI a bit more time to start the server (120 seconds)
    timeout: 120 * 1000,
  }
})