import { test, expect } from '@playwright/test';
const homepage = "https://e-commerce-dev.betterbytesvn.com";

test('has title', async ({ page }) => {
  await page.goto(homepage);

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/E-commerce site for automation testing/);
});

test('get started link', async ({ page }) => {
  await page.goto(homepage);

  // Click the get started link.
  await page.getByRole('link', { name: 'My account' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'My account' })).toBeVisible();
});
