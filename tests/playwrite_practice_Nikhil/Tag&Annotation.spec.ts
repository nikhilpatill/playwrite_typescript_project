import { test, Page } from "@playwright/test";
import { expect } from "@playwright/test";
import { constants } from "buffer";

// groups 
// describe block
// test.beforeEach
// test.afterEach
test.describe('Admin page Groups example', () => {

  // Test 1
  // beforeEach hook to login before each test 
  // This will run before each test in the file
  test.beforeEach(async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.locator("//input[@name='username']").fill("Admin");
    await page.locator("//input[@name='username']").press("Enter");
    await page.locator("//input[@name='password']").fill("admin123");
     const submitButton = page.locator("//button[@type='submit']");
     await submitButton.click();
     await page.waitForLoadState('networkidle');
    const Admin = await page.locator('//span[text()="Admin"]');
    await Admin.click();


  });

  test.afterEach(async ({ page }) => {
    await page.close();
  });

  // Test 2
  test('admin/Job/Pay Grades @smoke', async ({ page }) => {

   
    await page.locator('(//nav[@role="navigation" and @aria-label="Topbar Menu"]//li[2])[1]').isEnabled();
    await page.locator('(//nav[@role="navigation" and @aria-label="Topbar Menu"]//li[2])[1]').click();
    await page.waitForLoadState('networkidle');

    // list of web elements
    const allOptions = page.locator('//ul[@class="oxd-dropdown-menu" and @role="menu"]/li');
    const count = await allOptions.count();
    console.log("Total number of options: " + count);
    console.log("Total number of options: " + count);

    const optionLocators = await allOptions.all();
    for (let option of optionLocators) {
      const text = await option.textContent();
      console.log(text);
      if (text?.trim() === 'Pay Grades') {
        await option.click();
        await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewPayGrades');
        break;
      }

    }

  });

  test('admin/jobs/Employment Status @regression', async ({ page }) => {

    
    await page.locator('(//nav[@role="navigation" and @aria-label="Topbar Menu"]//li[2])[1]').isEnabled();
    await page.locator('(//nav[@role="navigation" and @aria-label="Topbar Menu"]//li[2])[1]').click();
    await page.waitForLoadState('networkidle');

    // list of web elements
    const allOptions = page.locator('//ul[@class="oxd-dropdown-menu" and @role="menu"]/li');
    const count = await allOptions.count();
    console.log("Total number of options: " + count);
    console.log("Total number of options: " + count);

    const optionLocators = await allOptions.all();
    for (let option of optionLocators) {
      const text = await option.textContent();
      console.log(text);
      if (text?.trim() === 'Employment Status') {
        await option.click();
        break;
      }

    }



  });

  test('admin/Job/Job Titles @smoke', async ({ page }) => {


    await page.locator('(//nav[@role="navigation" and @aria-label="Topbar Menu"]//li[2])[1]').isEnabled();
    await page.locator('(//nav[@role="navigation" and @aria-label="Topbar Menu"]//li[2])[1]').click();
    await page.waitForLoadState('networkidle');

    // list of web elements
    const allOptions = page.locator('//ul[@class="oxd-dropdown-menu" and @role="menu"]/li');
    const count = await allOptions.count();
    console.log("Total number of options: " + count);
    console.log("Total number of options: " + count);

    const optionLocators = await allOptions.all();
    for (let option of optionLocators) {
      const text = await option.textContent();
      console.log(text);
      if (text?.trim() === 'Job Titles') {
        await option.click();
        break;
      }

    }

  });

  test('admin Job Work Shifts @smoke', async ({ page }) => {



    
    await page.locator('(//nav[@role="navigation" and @aria-label="Topbar Menu"]//li[2])[1]').isEnabled();
    await page.locator('(//nav[@role="navigation" and @aria-label="Topbar Menu"]//li[2])[1]').click();
    await page.waitForLoadState('networkidle');

    // list of web elements
    const allOptions = page.locator('//ul[@class="oxd-dropdown-menu" and @role="menu"]/li');
    const count = await allOptions.count();
    console.log("Total number of options: " + count);
    console.log("Total number of options: " + count);

    const optionLocators = await allOptions.all();
    for (let option of optionLocators) {
      const text = await option.textContent();
      console.log(text);
      if (text?.trim() === 'Work Shifts') {
        await option.click();
        await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/admin/workShift');
        break;
      }

    }

  });

});

