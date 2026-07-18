import { test, expect } from '@playwright/test';
import { MyaccountPage } from '../Pages/MyaccountPage1';
import { GenericMethod } from '../utils/GenericMethod';
import { Hooks } from './Hooks';
import { RegisterPage } from '../Pages/RegisterPage1';
import { LoginPage } from '../Pages/LoginPage1';

let registerPage: RegisterPage;
let  genericMethod: GenericMethod;
let loginPage: LoginPage;
test.beforeEach(async ({ page }) => {
  registerPage = new RegisterPage(page);
  genericMethod = new GenericMethod(page);
  loginPage = new LoginPage(page);
  loginPage.navigate();
   
});


test.afterEach(async ({ page }) => {

  await page.close();
});



test('TC_RF_001_Verify Registering an Account by providing only the Mandatory fields', async ({ page }) => {  
 
  await registerPage.Click_newCustomer_continouesbutton();
  await registerPage.Register_Account_txt1();
  await expect.soft(registerPage.Register_Account_txt).toHaveText('Register Account');
  await genericMethod.new_register_user();

  });

  test('TC_RF_004_Verify proper notification messages are displayed for the mandatory fields', async ({ page }) => {  
  await registerPage.Click_newCustomer_continouesbutton();
  await registerPage.Register_Account_txt1();
  await expect.soft(registerPage.Register_Account_txt).toHaveText('Register Account');
  await genericMethod.new_register_user();

  });

