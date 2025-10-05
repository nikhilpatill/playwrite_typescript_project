import { test, expect, type Page } from '@playwright/test';
import { kMaxLength } from 'buffer';

export class LoginPage {
  readonly page: Page;
  readonly usernameInput;
  readonly passwordInput;
  readonly submitButton;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator("//input[@name='username']");
    this.passwordInput = page.locator("//input[@name='password']");
    this.submitButton = page.locator("//button[@type='submit']");
  }

  async navigate() {
    await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  }

  async enterUsername(username: string) {
    await this.usernameInput.fill(username);
    await this.usernameInput.press("Enter");
  }

  async enterPassword(password: string) {
    await this.passwordInput.fill(password);

  }

  async clickSubmit() {
    await this.submitButton.click();
    await this.page.waitForLoadState('networkidle');
    await expect(this.page.locator('//h6[text()="Dashboard"]')).toHaveText('Dashboard');
  }

}
