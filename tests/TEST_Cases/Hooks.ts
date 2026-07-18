import { test as base, expect, type Page } from '@playwright/test';
import { LoginPage } from '../Pages/LoginPage1';
import { MyaccountPage } from '../Pages/MyaccountPage1';
import { GenericMethod } from '../utils/GenericMethod';


type MyFixtures = {
  LoginPage: LoginPage;
  page: Page;
  myAccountPage: MyaccountPage;
  genericMethod: GenericMethod;
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
  }




});

export { test, expect };





