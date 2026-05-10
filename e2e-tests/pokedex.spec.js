const { test, describe, expect } = require('@playwright/test')

describe('Pokedex', () => {
  test('front page can be opened', async ({ page }) => {
    // This assumes your app will be running on port 5000 during the test
    await page.goto('http://localhost:5000')
    await expect(page.getByText('Hello CI/CD Exercise!')).toBeVisible()
  })
})