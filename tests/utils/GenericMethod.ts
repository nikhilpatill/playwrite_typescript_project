import { Page, Locator, expect } from '@playwright/test';

export class GenericMethod {

  page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // ---------------- VISIBILITY METHODS ----------------

  async checkVisibilityFlag(elements: Locator[]): Promise<boolean> {
    for (const ele of elements) {
      if (await ele.isVisible()) {
        return true;
      }
    }
    return false;
  }

  async checkVisibleElement(elements: Locator[]): Promise<Locator | null> {
    for (const ele of elements) {
      if (await ele.isVisible()) {
        return ele;
      }
    }
    return null;
  }

  // ---------------- SCROLL METHODS ----------------

  async scrollToCenter() {
    await this.page.mouse.wheel(0, 1200);
  }

  async scrollToTop() {
    await this.page.mouse.wheel(0, -1200);
  }

  async scrollToElement(ele: Locator) {
    await ele.scrollIntoViewIfNeeded();
  }

  async scrollToElementAndClick(ele: Locator) {
    await ele.scrollIntoViewIfNeeded();
    await ele.click({ timeout: 5000 });
  }

  // ---------------- WAIT FOR LOADER ----------------

  async waitUntilLoadComplete() {
    const loader = this.page.locator("//div[@class='oxd-loading-spinner-container']/div");
    await loader.waitFor({ state: 'hidden' });
  }

  // ---------------- SCREENSHOT ----------------

  async takeScreenshot(name: string) {
    await this.page.screenshot({
      path: `screenshots/${name}.png`
    });
  }

  // ---------------- ERROR MESSAGE ----------------

  async checkErrorMessage(): Promise<string | null> {

    const msg = this.page.locator(
      `//div[text()='Warning: No match for E-Mail Address and/or Password.']
      |//div[contains(@style,'color: red')]
      |//span[text()='Required']
      |//span[text()='Should be at least 5 characters']
      |//span[text()='Passwords do not match']
      |//span[text()='Invalid']`
    );

    if (await msg.first().isVisible()) {
      return await msg.first().innerText();
    }

    return null;
  }

  // ---------------- REGISTER ACCOUNT ----------------

  async fillRegisterDetails() {

    await this.page.fill("//input[@name='firstname']", "user" + Date.now());

    await this.page.fill("//input[@name='lastname']", "user2" + Date.now());

    await this.page.fill("//input[@name='email']", `testuser${Date.now()}@gmail.com`);

    await this.page.fill("//input[@name='telephone']", "7726363656");

    await this.page.fill("//input[@name='password']", "Success@123");

    await this.page.fill("//input[@name='confirm']", "Success@123");

  }

  // ---------------- EXISTING ACCOUNT ----------------

  async fillExistingAccount() {

    await this.page.fill("//input[@name='firstname']", "Arun");

    await this.page.fill("//input[@name='lastname']", "Motoori");

    await this.page.fill("//input[@name='email']", "amotoori1@gmail.com");

    await this.page.fill("//input[@name='telephone']", "09246812111");

    await this.page.fill("//input[@name='password']", "12345");

    await this.page.fill("//input[@name='confirm']", "12345");

  }

  // ---------------- DIFFERENT PASSWORD ----------------

  async fillDifferentPassword() {

    await this.page.fill("//input[@name='firstname']", "user" + Date.now());

    await this.page.fill("//input[@name='lastname']", "user2" + Date.now());

    await this.page.fill("//input[@name='email']", `testuser${Date.now()}@gmail.com`);

    await this.page.fill("//input[@name='telephone']", "7726363656");

    await this.page.fill("//input[@name='password']", "112344343");

    await this.page.fill("//input[@name='confirm']", "Success@123");

  }

  // ---------------- INPUT FIELD ----------------

  async inputField(label: string, data: string) {

    const field = this.page.locator(`//label[text()='${label}']/following::input[1]`);

    await field.fill('');
    await field.fill(data);

  }

  // ---------------- TEXT AREA ----------------

  async textAreaInput(placeholder: string, data: string) {

    const area = this.page.locator(`textarea[placeholder='${placeholder}']`);

    if (await area.isVisible()) {
      await area.fill(data);
    }

  }

  // ---------------- BUTTON CLICK ----------------

  async buttonClick(btnName: string) {

    const button = this.page.locator(`//button[normalize-space(text())='${btnName}']`);

    await button.click();

  }

  // ---------------- SUCCESS MESSAGE ----------------

  async successMessage(): Promise<string> {

    const msg = this.page.locator("//div[contains(@class,'oxd-toast-content--success')]/p");

    if (await msg.isVisible()) {
      return await msg.innerText();
    }

    return "";

  }

  // ---------------- FILE UPLOAD ----------------

  async fileUpload(selector: string, filePath: string) {

    const uploadBtn = this.page.locator(selector);

    await uploadBtn.setInputFiles(filePath);

  }

}