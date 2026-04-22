import { test, expect } from '@playwright/test';
import { MyaccountPage } from '../Pages/MyaccountPage1.spec';
import { GenericMethod } from '../utils/GenericMethod';
import { Hooks } from './Hooks.spec'

let myAccountPage: MyaccountPage;
let  genericMethod: GenericMethod;
test.beforeEach(async ({ page }) => {
  myAccountPage = new MyaccountPage(page);
  genericMethod = new GenericMethod(page);
  await Hooks.login(page);
});


test.afterEach(async ({ page }) => {

  await page.close();
});

test('@nik My Account', async ({ page }) => {

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

test('verify Password and confirm password does not match error message should be displayed', async ({ page }) => {

  await myAccountPage.ClickchangePasswordLink();
  await myAccountPage.getPasswordField();
  await myAccountPage.clickContinueButton();
  const getSuccessMessage = await myAccountPage.conformPasswordField_error.textContent();
  console.log("Success Message is: " + getSuccessMessage);
  await expect.soft(getSuccessMessage).toBe('Password confirmation does not match password!');

});

test('verify user click on back button My Account page should be displayed', async ({ page }) => {
  await myAccountPage.ClickchangePasswordLink();
  await myAccountPage.getPasswordField();
  await myAccountPage.clickBackButton();
  let name = await page.locator("//h2[text()='My Account']").textContent();
  console.log("Page Title is: " + name);
  await expect.soft(page.locator("//h2[text()='My Account']")).toHaveText('My Account');

});

test('verify user should displayed Address Book Entries', async ({ page }) => {

  await myAccountPage.clickmodifyaddressBookLink();
  let headingText = await myAccountPage.getAddressBookText();
  console.log("Heading Text is: " + headingText);
  await expect.soft(headingText).toBe('Address Book Entries');


});

test('verify user click on back button My Account page should be displayed from Address Book Entries page', async ({ page }) => {
  await myAccountPage.clickmodifyaddressBookLink();
  await myAccountPage.clickBackButton();
  let name = await page.locator("//h2[text()='My Account']").textContent();
  console.log("Page Title is: " + name);
  await expect.soft(page.locator("//h2[text()='My Account']")).toHaveText('My Account');
});

test('verify user should click on New Address button add address page should be displayed', async ({ page }) => {
  await myAccountPage.clickmodifyaddressBookLink();
  await myAccountPage.clickNewAddressButton();
  let name = await page.locator("//h2[text()='Add Address']").textContent();
  console.log("Page Title is: " + name);
  await expect.soft(page.locator("//h2[text()='Add Address']")).toHaveText('Add Address');
});

test('verify user click on continous button without filling any details system should not navigate next page', async ({ page }) => {
  await myAccountPage.clickmodifyaddressBookLink();
  await myAccountPage.clickNewAddressButton();
  await myAccountPage.clickContinueButton();
  let name = await page.locator("//h2[text()='Add Address']").textContent();
  console.log("Page Title is: " + name);
  await expect.soft(page.locator("//h2[text()='Add Address']")).toHaveText('Add Address');
});

test('verify user click on back button Address Book Entries page should be displayed from Add Address page', async ({ page }) => {
  await myAccountPage.clickmodifyaddressBookLink();
  await myAccountPage.clickNewAddressButton();
  await myAccountPage.clickContinueButton();
  await myAccountPage.clickBackButton();
  let name = await page.locator("//h2[text()='Address Book Entries']").textContent();
  console.log("Page Title is: " + name);
  await expect.soft(page.locator("//h2[text()='Address Book Entries']")).toHaveText('Address Book Entries');

});

test('verify user click on continue button without filling first name system should display an error message', async ({ page }) => {
  await myAccountPage.clickmodifyaddressBookLink();
  await myAccountPage.clickNewAddressButton();
  await myAccountPage.clickContinueButton();
  const getErrorMessage = await myAccountPage.getFirstNameErrorMessage();
  console.log("Error Message is: " + getErrorMessage);
  await expect.soft(getErrorMessage).toBe('First Name must be between 1 and 32 characters!');
});

test('verify user click on continue button without filling last name system should display an error message', async ({ page }) => {
  await myAccountPage.clickmodifyaddressBookLink();
  await myAccountPage.clickNewAddressButton();
  await myAccountPage.clickContinueButton();
  const getErrorMessage = await myAccountPage.getLastNameErrorMessage();
  console.log("Error Message is: " + getErrorMessage);
  await expect.soft(getErrorMessage).toBe('Last Name must be between 1 and 32 characters!');
});

test('verify user click on continue button without filling address1 field system should display an error message', async ({ page }) => {
  await myAccountPage.clickmodifyaddressBookLink();
  await myAccountPage.clickNewAddressButton();
  await myAccountPage.clickContinueButton();
  const getErrorMessage = await myAccountPage.getAddress1ErrorMessage();
  console.log("Error Message is: " + getErrorMessage);
  await expect.soft(getErrorMessage).toBe('Address must be between 3 and 128 characters!');
});

test('verify user click on continue button without filling city system should display an error message', async ({ page }) => {
  await myAccountPage.clickmodifyaddressBookLink();
  await myAccountPage.clickNewAddressButton();
  await myAccountPage.clickContinueButton();
  const getErrorMessage = await myAccountPage.getCityErrorMessage();
  console.log("Error Message is: " + getErrorMessage);
  await expect.soft(getErrorMessage).toBe('City must be between 2 and 128 characters!');
});;

test('verify user click on continue button without filling region / state! system should display an error message', async ({ page }) => {
  await myAccountPage.clickmodifyaddressBookLink();
  await myAccountPage.clickNewAddressButton();
  await myAccountPage.clickContinueButton();
  const getErrorMessage = await myAccountPage.getRegionStateErrorMessage();
  console.log("Error Message is: " + getErrorMessage);
  await expect.soft(getErrorMessage).toBe('Please select a region / state!');
});

test('verify user fill all fields and click continue button system should display success message', async ({ page }) => {
  await myAccountPage.clickmodifyaddressBookLink();
  await myAccountPage.clickNewAddressButton();
  await myAccountPage.getFirstName();
  await myAccountPage.getLastName();
  await myAccountPage.getAddress1();
  await myAccountPage.getCity();
  await myAccountPage.selectRegionState();
  await myAccountPage.getPostalCode();
  await myAccountPage.clickContinueButton();
  const getSuccessMessage = await myAccountPage.getSuccessMessageAddressBook();
  console.log("Success Message is: " + getSuccessMessage);
  await expect.soft(getSuccessMessage).toBe('Your address has been successfully added');
});

test('verify user fill all fields and click continue button system should be displayed from Add Address page', async ({ page }) => {
  await myAccountPage.clickmodifyaddressBookLink();
  await myAccountPage.clickNewAddressButton();
  await myAccountPage.getFirstName();
  await myAccountPage.getLastName();
  await myAccountPage.getAddress1();
  await myAccountPage.getCity();
  await myAccountPage.selectRegionState();
  await myAccountPage.getPostalCode();
  await myAccountPage.clickContinueButton();
  const getSuccessMessage = await myAccountPage.getSuccessMessageAddressBook();
  console.log("Success Message is: " + getSuccessMessage);
  await expect.soft(getSuccessMessage).toBe('Your address has been successfully added');
  let name = await page.locator("//h2[text()='Address Book Entries']").textContent();
  console.log("Page Title is: " + name);
  await expect.soft(page.locator("//h2[text()='Address Book Entries']")).toHaveText('Address Book Entries');
});

test('verify user click on back button Address Book Entries page system should displayed my Account page', async ({ page }) => {
  await myAccountPage.clickmodifyaddressBookLink();
  await myAccountPage.clickNewAddressButton();
  await myAccountPage.getFirstName();
  await myAccountPage.getLastName();
  await myAccountPage.getAddress1();
  await myAccountPage.getCity();
  await myAccountPage.selectRegionState();
  await myAccountPage.getPostalCode();
  await myAccountPage.clickContinueButton();
  const getSuccessMessage = await myAccountPage.getSuccessMessageAddressBook();
  console.log("Success Message is: " + getSuccessMessage);
  await expect.soft(getSuccessMessage).toBe('Your address has been successfully added');
  let name = await page.locator("//h2[text()='Address Book Entries']").textContent();
  console.log("Page Title is: " + name);
  await expect.soft(page.locator("//h2[text()='Address Book Entries']")).toHaveText('Address Book Entries');
  await myAccountPage.clickBackButton();
  let name1 = await page.locator("//h2[text()='My Account']").textContent();
  console.log("Page Title is: " + name1);
  await expect.soft(page.locator("//h2[text()='My Account']")).toHaveText('My Account');
});

test('verify user should delete address book entry', async ({ page }) => {
  await myAccountPage.clickmodifyaddressBookLink();
  await myAccountPage.deleteAddressBookEntry();
  const getSuccessMessage = await myAccountPage.deleteSuccessMessageText();
  console.log("Success Message is: " + getSuccessMessage);
  await expect.soft(getSuccessMessage).toBe('Your address has been successfully deleted');

});

test('verify user should edit address book entry', async ({ page }) => {
  // Open Address Book Entries and perform a basic smoke check for the page (implement full edit flow later)
  await myAccountPage.clickmodifyaddressBookLink();
  await myAccountPage.editAddressBookEntry();
  await page.locator("//input[@name='city']").fill("New City");
  await myAccountPage.clickContinueButton();
  // Validate that the success message is displayed after editing the address
  // const getSuccessMessage =
  await myAccountPage.getUpdateSuccessMessage();
  const getSuccessMessage = await myAccountPage.getUpdateSuccessMessage();
  console.log("Success Message is: " + getSuccessMessage);
  await expect.soft(getSuccessMessage).toBe('Your address has been successfully updated');

});

test('verify userclick on new address button system should display ', async ({ page }) => {
  await myAccountPage.clickmodifyaddressBookLink();
  await myAccountPage.New_Address1();
  const name = await page.locator("//h2[text()='Add Address']").textContent();
  console.log("Page Title is: " + name);
  await expect.soft(name).toBe('Add Address');
});


test("verify user click on modify your wishlist link system should display My Wish List page", async ({ page }) => {
  await myAccountPage.clickModifyYourWishListText();
  const headingText = await myAccountPage.getMyWishListText();
  console.log("Heading Text is: " + headingText);
  expect.soft(headingText).toBe('My Wish List');
});

test("verify user click on back button from My Wish List page system should display My Account page", async ({ page }) => {
  await myAccountPage.clickModifyYourWishListText();
  const headingText = await myAccountPage.getMyWishListText();

});
