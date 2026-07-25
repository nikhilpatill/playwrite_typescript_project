import { test, expect, type Page } from '@playwright/test';


export class RegisterPage {
  
  readonly page: Page;
  readonly newCustomer_continouesbutton;
  readonly Register_Account_txt;
  readonly First_Name;



  constructor(page: Page) {
    this.page = page;
    this.newCustomer_continouesbutton = page.locator("//a[text()='Continue']");
    this.Register_Account_txt = page.locator("//h1[text()='Register Account']");
    this.First_Name = page.locator("//input[@id='firstname']");
  }

  async navigate() {
    await this.page.setViewportSize({ width: 1380, height: 800 });
    await this.page.goto('https://tutorialsninja.com/demo/index.php?route=account/register');
    await this.page.waitForLoadState('networkidle');
  }

  async getAddressBookText() {
    return await this.page.locator("//h2[text()='Address Book Entries']").textContent();
  }

  async Register_Account_txt1() {
    return await this.Register_Account_txt.textContent();
  }

  async Click_newCustomer_continouesbutton() {

    await this.newCustomer_continouesbutton.click();
  }

 
}


