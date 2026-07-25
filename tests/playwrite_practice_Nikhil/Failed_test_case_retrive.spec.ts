import { test, expect } from "@playwright/test";


test('Checkboxes', async ({ page }) => {

  await page.goto('https://qa-practice.netlify.app/checkboxes');
  await page.getByLabel('Check me out - 1').check();
  await expect(page.getByLabel('Check me out - 1')).toBeChecked();

});

test('check buttons - 2', async ({ page }) => {

  await page.goto('https://qa-practice.netlify.app/checkboxes');
  await page.getByLabel('Check me out - 2').check();
  await expect(page.getByLabel('Check me out - 2')).toBeChecked();

});

test('check buttons - 3', async ({ page }) => {
  await page.goto('https://qa-practice.netlify.app/checkboxes');
  await page.getByLabel('Check me out').check();
  await expect(page.getByLabel('Check me out - 3')).toBeChecked();  
});
