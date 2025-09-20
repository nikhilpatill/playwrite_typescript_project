import {test,Page} from "@playwright/test";
import { expect } from "@playwright/test";

    test('Login test', async ({ page }) => {
  // Navigate to URL
  await page.goto('https://qa-practice.netlify.app/bugs-form');

  // Click "Sign in"
  page.locator("//input[@id='firstName']").fill("testrigornaveen@gmail.com")
  page.locator("//input[@id='password']").fill("admin123")
  await page.locator("//button[@id='submitOrderBtn']").click();

  // Optionally, assert something after login
  await expect(page.locator('h1')).toHaveText('My account'); 
});
   