import { Page } from '@playwright/test';
import { LoginPage } from '../Pages/LoginPage1';


export class Hooks {
  static async login(page: Page) {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    await loginPage.enterUsername("nikhilpatil1080@gmail.com");
    await loginPage.enterPassword("Welcome@123");
    await loginPage.clickSubmit();
  }



}