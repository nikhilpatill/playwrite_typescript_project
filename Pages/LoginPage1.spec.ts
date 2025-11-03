import { test, expect, type Page } from '@playwright/test';
import { kMaxLength } from 'buffer';

export class LoginPage {
  readonly page: Page;
  readonly usernameInput;
  readonly passwordInput;
  readonly submitButton;
  static textvalue: any;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator("//input[@name='email']");
    this.passwordInput = page.locator("//input[@name='password']");
    this.submitButton = page.locator("//input[@type='submit']");
  }

  async navigate() {
   await this.page.goto('https://tutorialsninja.com/demo/index.php?route=account/login')
   await this.page.waitForLoadState('networkidle');

  }

  async enterUsername(username: string) {
    await this.usernameInput.fill(username);
    
  }

  async enterPassword(password: string) {
    await this.passwordInput.fill(password);

  }

  async clickSubmit() {
    await this.submitButton.click();
    await expect(this.page.locator('//div[@id="content"]/h2[1]')).toHaveText('My Account');
  }

  

}


