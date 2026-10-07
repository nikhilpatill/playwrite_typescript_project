import { test, expect } from "@playwright/test";
import testData from "./Test_deta/testdeta.json";

test('data driven test example', async ({ page }) => {
  
  page.goto("https://vinothqaacademy.com/multiple-windows/");
  const promise = page.waitForEvent('popup');
  await page.locator("//button[text()='New Browser Window']").click();
  const newPage = await promise;
  newPage.waitForLoadState();
  const projectDetailsText = await newPage.locator("//h2[text()='Project Details']").textContent();
  console.log("Project Details Text is: " + projectDetailsText);
  await expect.soft(projectDetailsText).toBe('Project Details');
  await newPage.bringToFront();
  await page.waitForLoadState();
  await page.locator("//h2[text()='Multiple Windows']").scrollIntoViewIfNeeded();
  const multipleWindowsText = await page.locator("//h2[text()='Multiple Windows']").textContent();
  console.log("Multiple Windows Text is: " + multipleWindowsText);
  await expect.soft(multipleWindowsText).toBe('Multiple Windows');


});


test("New Message Window", async ({ page }) => {


});

