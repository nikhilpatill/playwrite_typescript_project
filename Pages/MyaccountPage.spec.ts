import { test, expect, type Page } from '@playwright/test';
import { kMaxLength } from 'buffer';

export class MyaccountPage {
  
  readonly page: Page;
  readonly editYourAccountInfoLink;
  readonly myAccountLink;
  readonly First_Name;
  readonly Last_Name;
  readonly sucessmessage;
  readonly Phone_Number;
  readonly Back_Button; 
  readonly First_NameError_Message;
  readonly Last_NameError_Message;
  readonly Phone_NumberError_Message;
  readonly PasswordError_Message;
  readonly chngePasswordLink;

  static textvalue: any;

  constructor(page: Page) {
    this.page = page;
    this.editYourAccountInfoLink = page.locator("//a[text()='Edit your account information']");
    this.chngePasswordLink = page.locator("//a[text()='Change your password']");
    this.myAccountLink = page.locator("//a[text()='My Account']");
    this.First_Name = page.locator("//input[@name='firstname']");
    this.Last_Name = page.locator("//input[@name='lastname']");
    this.Phone_Number = page.locator("//input[@name='telephone']");   
    this.Back_Button = page.locator("//a[text()='Back']");
    this.First_NameError_Message = page.locator("//div[text()='First Name must be between 1 and 32 characters!']");
    this.Last_NameError_Message = page.locator("//div[text()='Last Name must be between 1 and 32 characters!']");
    this.Phone_NumberError_Message = page.locator("//div[text()='Telephone must be between 3 and 32 characters!']");
    this.PasswordError_Message = page.locator("//div[text()='Password must be between 4 and 20 characters!']");
    this.sucessmessage = page.locator("//div[text()='Success: Your account has been successfully updated.']");

   
  }


  async ClickeditYourAccountInfoLink() {
    await this.editYourAccountInfoLink.click();
  }

  async ClickchangePasswordLink() {
    await this.chngePasswordLink.click();
  }

  async getFirstName() {
    await this.First_Name.fill("Nikhil");
     let fname = await this.First_Name.inputValue();
    console.log("First Name is: " + fname);
    
  }
  async getLastName() {
    await this.Last_Name.fill("Patil");
     let lname = await this.Last_Name.inputValue();
    console.log("Last Name is: " + lname);
    
  }

  async getPhoneNumber() {
    await this.Phone_Number.fill("9876543210");
     let phone = await this.Phone_Number.inputValue();
    console.log("Phone Number is: " + phone);
    
  }

  async clickContinueButton() {
    await this.page.locator("//input[@type='submit' and @value='Continue']").click();
  }

  async clickBackButton() {
    await this.Back_Button.click();
  }

  async getSuccessMessage() {
    return await this.sucessmessage.textContent();
  }
  
  async getFirstNameErrorMessage() {
    return await this.First_NameError_Message.textContent();
  }

  async getLastNameErrorMessage() {
    return await this.Last_NameError_Message.textContent();
  }
  async getPhoneNumberErrorMessage() {
    return await this.Phone_NumberError_Message.textContent();
  }
  async getPasswordErrorMessage() {
    return await this.PasswordError_Message.textContent();
  }
  

  async My_Account_Information_text() {
    return await this.page.locator("//h1[text()='My Account Information']").textContent();
  }

  async ClickmyAccountLink() {
    await this.myAccountLink.click();
  }

 
}


