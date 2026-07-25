import { test as base, expect, type Page, type TestInfo } from '@playwright/test';
import { LoginPage } from '../Pages/LoginPage1';
import { MyaccountPage } from '../Pages/MyaccountPage1';
import { GenericMethod } from '../utils/GenericMethod';
import { RegisterPage } from '../Pages/RegisterPage1';


type MyFixtures = {
  LoginPage: LoginPage;
  myAccountPage: MyaccountPage;
  genericMethod: GenericMethod;
  registerPage: RegisterPage;
};


const test = base.extend<MyFixtures>({

  LoginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    await loginPage.enterUsername("nikhilpatil1080@gmail.com");
    await loginPage.enterPassword("Welcome@123");
    await loginPage.clickSubmit();
     await use( loginPage);
  },

  myAccountPage: async ({ page, LoginPage }, use) => {
    const myAccountPage = new MyaccountPage(page);
    await use(myAccountPage);
  },

  genericMethod: async ({ page }, use) => {
    const genericMethod = new GenericMethod(page);
    await use(genericMethod);
  },

  registerPage: async ({ page }, use) => {
    const registerPage = new RegisterPage(page);
    await registerPage.navigate();
    await use(registerPage);
  }

});

export { test, expect };

test.afterEach(async ({ page }, testInfo: TestInfo) => {
  if (testInfo.status === 'failed') {
    const screenshot = await page.screenshot({ fullPage: true });
    await testInfo.attach('screenshot', { body: screenshot, contentType: 'image/png' });
  }
});
