const { test, expect } = require('@playwright/test')

test('simple check', async ({ page }) => {
  await page.goto('http://localhost:3000')
  const body = page.locator('body')
  await expect(body).toBeVisible()
})