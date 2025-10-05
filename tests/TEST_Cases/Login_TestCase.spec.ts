import { test, Page } from "@playwright/test";
import { expect } from "@playwright/test";
import { LoginPage } from '../../Pages/LoginPage1.spec'

  

  test('login test case @nik', async ({ page }) => {
     const loginPage = new LoginPage(page);
    await page.goto('https://opensource-demo.orangehrmlive.com');
     await loginPage.enterUsername("Admin");
     await loginPage.enterPassword("admin123");
      await loginPage.clickSubmit();
   
  });