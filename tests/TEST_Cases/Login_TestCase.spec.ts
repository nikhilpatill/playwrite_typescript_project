import { test, expect } from '@playwright/test';
import { LoginPage } from '../Pages/LoginPage1';
import { Hooks } from '../TEST_Cases/Hooks';


  test.beforeEach(async ({ page }) => {
   const loginPage = new LoginPage(page);
      await Hooks.login(page);
  });



    test.afterEach(async ({ page }, testInfo) => {
  if (testInfo.status !== testInfo.expectedStatus) {
    await page.screenshot({ path: 'error.png' });
  }

   await page.close();
 });

test('@nik Edit account page', async ({ page }) => {

  await page.locator('//div[@class="list-group"]/a[2]').hover();
  await page.locator('//div[@class="list-group"]/a[2]').click();
  //await page.waitForLoadState('networkidle');

});

test('dashboard page List of elements', async ({ page }) => {

  // list of web elements
  const allOptions = page.locator('//div[@class="list-group"]/a');
  const count = await allOptions.count();
  console.log("Total number of options: " + count);

  const optionLocators = await allOptions.all();
  for (let option of optionLocators) {
    const text = await option.textContent();
    console.log(text);
  }

});

test('Edit Account', async ({ page }) => {
  // list of web elements
  const allOptions = page.locator('//div[@class="list-group"]/a');
  const count = await allOptions.count();
  console.log("Total number of options: " + count);

  const optionLocators = await allOptions.all();
  for (let option of optionLocators) {
    const text = await option.textContent();
    console.log(text);
  
    if (text?.trim() === 'Edit Account') {
      await option.click();
      let name = await page.locator("//h1[text()='My Account Information']").textContent();
      console.log("Page Title is: " + name);
      await expect.soft(page.locator("//h1[text()='My Account Information']")).toHaveText('My Account Information');
      continue;

    }
    else if (text?.trim() === 'Password') {
      await option.click();
      let name = await page.locator("//h1[text()='Change Password']").textContent();
      console.log("Page Title is: " + name);
      await expect.soft(page.locator("//h1[text()='Change Password']")).toHaveText('Change Password');
      continue; 
  }

  else if (text?.trim() === 'Address Book') {
      await option.click();
      let name = await page.locator("//h2[text()='Address Book Entries']").textContent();
      console.log("Page Title is: " + name);
      await expect.soft(page.locator("//h2[text()='Address Book Entries']")).toHaveText('Address Book Entries');
      continue;
  }

   else if (text?.trim() === 'My Wish List') {
      await option.click();
      let name = await page.locator("//h2[text()='My Wish List']").textContent();
      console.log("Page Title is: " + name);
      await expect.soft(page.locator("//h2[text()='My Wish List']")).toHaveText('My Wish List');
      continue;
  }

   else if (text?.trim() === 'Order History') {
      await option.click();
      let name = await page.locator("//h1[text()='Order History']").textContent();
      console.log("Page Title is: " + name);
      await expect.soft(page.locator("//h1[text()='Order History']")).toHaveText('Order History');
      continue;
  }

  else if (text?.trim() === 'Downloads') {
      await option.click();
      let name = await page.locator("//h2[text()='Account Downloads']").textContent();
      console.log("Page Title is: " + name);
      await expect.soft(page.locator("//h2[text()='Account Downloads']")).toHaveText('Account Downloads');
      continue;
  }

  else if (text?.trim() === 'Recurring Payments') {
      await option.click();
      let name = await page.locator("//h1[text()='Recurring Payments']").textContent();
      console.log("Page Title is: " + name);
      await expect.soft(page.locator("//h1[text()='Recurring payments']")).toHaveText('Recurring payments');
      continue;
  }
   else if (text?.trim() === 'Reward Points') {
      await option.click();
      let name = await page.locator("//h1[text()='Your Reward Points']").textContent();
      console.log("Page Title is: " + name);
      await expect.soft(page.locator("//h1[text()='Your Reward Points']")).toHaveText('Your Reward Points');
      continue;
  }

  else if (text?.trim() === 'Returns') {
      await option.click();
      let name = await page.locator("//h1[text()='Product Returns']").textContent();
      console.log("Page Title is: " + name);
      await expect.soft(page.locator("//h1[text()='Product Returns']")).toHaveText('Product Returns');
      continue;
  }

   else if (text?.trim() === 'Transactions') {
      await option.click();
      let name = await page.locator("//h1[text()='Your Transactions']").textContent();
      console.log("Page Title is: " + name);
      await expect.soft(page.locator("//h1[text()='Your Transactions']")).toHaveText('Your Transactions');
      continue;
  }
  else if (text?.trim() === 'Newsletter') {
      await option.click();
      let name = await page.locator("//h1[text()='Newsletter Subscription']").textContent();
      console.log("Page Title is: " + name);
      await expect.soft(page.locator("//h1[text()='Newsletter Subscription']")).toHaveText('Newsletter Subscription');
      continue;
  }
   else if (text?.trim() === 'Logout') {
      await option.click();
      let name = await page.locator("//h1[text()='Account Logout']").textContent();
      console.log("Page Title is: " + name);
      await expect.soft(page.locator("//h1[text()='Account Logout']")).toHaveText('Account Logout');
      continue;
  }

  
}

});

