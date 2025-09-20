import { test, expect, type Page } from '@playwright/test';


test('Login test', async ({ page }) => {
  // Navigate to URL
  await page.goto('https://qa-practice.netlify.app/auth_ecommerce');

  // Click "Sign in"
  await page.click('a:text("Sign in")');

  // Fill login details
  await page.fill('#email', 'testrigornaveen@gmail.com');
  await page.fill('#passwd', 'testrigor123');

  // Click login button
  await page.click('#SubmitLogin');

  // Optionally, assert something after login
  await expect(page.locator('h1')).toHaveText('My account'); 
});