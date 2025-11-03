import { test, expect, Page } from '@playwright/test';
import { MyaccountPage } from '../../Pages/MyaccountPage.spec';
import { Hooks } from './Hooks.spec '
import { text } from 'stream/consumers';
import { assert } from 'console';

let myAccountPage: MyaccountPage;



test.beforeEach(async ({ page }) => {
  myAccountPage = new MyaccountPage(page);
  await Hooks.login(page);
});


test.afterEach(async ({ page }) => {
  
  await page.close();
});

test('My Account  @test', async ({ page }) => {

  // list of web elements
  const allOptions = page.locator('//div[@class="list-group"]/a');
  const count = await allOptions.count();
  console.log("Total number of options: " + count);

  const optionLocators = await allOptions.all();
  for (let option of optionLocators) {
    const text = await option.textContent();
    console.log(text);

    if (text?.trim() === 'My Account') {
      await option.click();
      let name = await page.locator("//h2[text()='My Account']").textContent();
      console.log("Page Title is: " + name);
      await expect.soft(page.locator("//h2[text()='My Account']")).toHaveText('My Account');
      break;

    }


  }

});

test('verify Edit your account information Link visibility', async ({ page }) => {

  await myAccountPage.ClickeditYourAccountInfoLink();
  let headingText = await myAccountPage.My_Account_Information_text();
  console.log("Heading Text is: " + headingText);
  await expect.soft(headingText).toBe('My Account Information');


});

test('verify user should Edit first name', async ({ page }) => {

  await myAccountPage.ClickeditYourAccountInfoLink();
  await myAccountPage.getFirstName();
  await myAccountPage.clickContinueButton();
  const getSuccessMessage = await myAccountPage.getSuccessMessage();
  console.log("Success Message is: " + getSuccessMessage);
  await expect.soft(getSuccessMessage).toBe('Success: Your account has been successfully updated.');

});
test('verify user should Edit last name', async ({ page }) => {

  await myAccountPage.ClickeditYourAccountInfoLink();
  await myAccountPage.getLastName();
  await myAccountPage.clickContinueButton();
  const getSuccessMessage = await myAccountPage.getSuccessMessage();
  console.log("Success Message is: " + getSuccessMessage);
  await expect.soft(getSuccessMessage).toBe('Success: Your account has been successfully updated.');
});

test('verify user should edit phone Number', async ({ page }) => {

  await myAccountPage.ClickeditYourAccountInfoLink();
  await myAccountPage.getPhoneNumber();
  await myAccountPage.clickContinueButton();
  const getSuccessMessage = await myAccountPage.getSuccessMessage();
  console.log("Success Message is: " + getSuccessMessage);
  await expect.soft(getSuccessMessage).toBe('Success: Your account has been successfully updated.');
});

test('verify user should edit first name, last name and phone number', async ({ page }) => {

  await myAccountPage.ClickeditYourAccountInfoLink();
  await myAccountPage.getFirstName();
  await myAccountPage.getLastName();
  await myAccountPage.getPhoneNumber();
  await myAccountPage.clickContinueButton();
  const getSuccessMessage = await myAccountPage.getSuccessMessage();
  console.log("Success Message is: " + getSuccessMessage);
  await expect.soft(getSuccessMessage).toBe('Success: Your account has been successfully updated.');

});

test('verify Back button functionality', async ({ page }) => {

  await myAccountPage.ClickeditYourAccountInfoLink();
  await myAccountPage.getFirstName();
  await myAccountPage.getLastName();
  await myAccountPage.getPhoneNumber();
  await myAccountPage.clickBackButton();
  let name = await page.locator("//h2[text()='My Account']").textContent();
  console.log("Page Title is: " + name);
  await expect.soft(page.locator("//h2[text()='My Account']")).toHaveText('My Account');

});

test('verify Error message for first name field', async ({ page }) => {

  await myAccountPage.ClickeditYourAccountInfoLink();
  await page.locator("//input[@name='firstname']").press('Control+A');
  await page.locator("//input[@name='firstname']").press('Backspace');
  await myAccountPage.clickContinueButton();
  const getErrorMessage = await myAccountPage.getFirstNameErrorMessage();
  console.log("Error Message is: " + getErrorMessage);
  await expect.soft(getErrorMessage).toBe('First Name must be between 1 and 32 characters!');
  
});

test('verify Error message for last name field', async ({ page }) => {
    await myAccountPage.ClickeditYourAccountInfoLink();
    await page.locator("//input[@name='lastname']").press('Control+A');
    await page.locator("//input[@name='lastname']").press('Backspace');
    await myAccountPage.clickContinueButton();
    const getErrorMessage = await myAccountPage.getLastNameErrorMessage();
    console.log("Error Message is: " + getErrorMessage);
    await expect.soft(getErrorMessage).toBe('Last Name must be between 1 and 32 characters!');


});
test('verify Error message for telephone field', async ({ page }) => {
    await myAccountPage.ClickeditYourAccountInfoLink();
    await page.locator("//input[@name='telephone']").press('Control+A');
    await page.locator("//input[@name='telephone']").press('Backspace');
    await myAccountPage.clickContinueButton();
    const getErrorMessage = await myAccountPage.getPhoneNumberErrorMessage();
    console.log("Error Message is: " + getErrorMessage);
    await expect.soft(getErrorMessage).toBe('Telephone must be between 3 and 32 characters!');

});

test('verify Error message for password field', async ({ page }) => {
    await myAccountPage.ClickchangePasswordLink();
    await myAccountPage.clickContinueButton();
    const getErrorMessage = await myAccountPage.getPasswordErrorMessage();
    console.log("Error Message is: " + getErrorMessage);
    await expect.soft(getErrorMessage).toBe('Password must be between 4 and 20 characters!');
});