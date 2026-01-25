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
  readonly changePasswordLink;
  readonly PasswordField;
  readonly conformPasswordField_error;
  readonly modifyaddressBookLink;
  readonly newAddressButton;
  readonly address1Error_Message;
  readonly cityError_Message;
  readonly region_state_Error_Message;
  readonly address_1;
  readonly city;
  readonly region_state;
  readonly postal_code;
  readonly successmessage_addressbook;
  readonly deleteAddressBook_Entry;
 readonly deleteSuccessMessage;
 readonly editAddressBook_Entry;
 readonly updateSuccessMessage;
 readonly New_Address;
 readonly modifyyourwichlistLink;
  readonly mywishListtext;
  static textvalue: any;

  constructor(page: Page) {
    this.page = page;
    this.editYourAccountInfoLink = page.locator("//a[text()='Edit your account information']");
    this.modifyaddressBookLink = page.locator("//a[text()='Modify your address book entries']");
    this.modifyyourwichlistLink = page.locator("//a[text()='Modify your wish list']");
    this.newAddressButton = page.locator("//a[text()='New Address']");
    this.mywishListtext = page.locator("//h2[text()='My Wish List']");
    this.deleteSuccessMessage= page.locator("//div[text()='Your address has been successfully deleted']");
    this.updateSuccessMessage= page.locator("//div[text()='Your address has been successfully updated']");
    this.city = page.locator("//input[@name='city']");
    this.region_state = page.locator("//select[@name='zone_id']");
    this.postal_code = page.locator("//input[@name='postcode']");
    this.changePasswordLink = page.locator("//a[text()='Change your password']");
    this.PasswordField = page.locator("//input[@name='password']");
    this.conformPasswordField_error = page.locator("//div[text()='Password confirmation does not match password!']");
    this.myAccountLink = page.locator("//a[text()='My Account']");
    this.First_Name = page.locator("//input[@name='firstname']");
    this.Last_Name = page.locator("//input[@name='lastname']");
    this.address_1 = page.locator("//input[@name='address_1']");
    this.Phone_Number = page.locator("//input[@name='telephone']");   
    this.deleteAddressBook_Entry = page.locator("(//td[text()='Nikhil Patil']/following::a[text()='Delete'])[1]");
    this.editAddressBook_Entry = page.locator("(//td[text()='Nikhil Patil']/following::a[text()='Edit'])[1]");
    this.Back_Button = page.locator("//a[text()='Back']");
    this.New_Address = page.locator("//a[text()='New Address']");
    this.First_NameError_Message = page.locator("//div[text()='First Name must be between 1 and 32 characters!']");
    this.Last_NameError_Message = page.locator("//div[text()='Last Name must be between 1 and 32 characters!']");
    this.address1Error_Message = page.locator("//div[text()='Address must be between 3 and 128 characters!']");
    this.Phone_NumberError_Message = page.locator("//div[text()='Telephone must be between 3 and 32 characters!']");
    this.PasswordError_Message = page.locator("//div[text()='Password must be between 4 and 20 characters!']");
    this.sucessmessage = page.locator("//div[text()='Success: Your account has been successfully updated.']");
    this.successmessage_addressbook = page.locator("//div[text()='Your address has been successfully added']");
    this.cityError_Message = page.locator("//div[text()='City must be between 2 and 128 characters!']");
    this.region_state_Error_Message = page.locator("//div[text()='Please select a region / state!']");
   
  }


  async ClickeditYourAccountInfoLink() {
    await this.editYourAccountInfoLink.click();
  }

  async ClickchangePasswordLink() {
    await this.changePasswordLink.click();
  }

  async clickmodifyaddressBookLink() {
    await this.modifyaddressBookLink.click();
  }

  async getFirstName() {
    await this.First_Name.fill("Nikhil");
     let fname = await this.First_Name.inputValue();
    console.log("First Name is: " + fname);
    
  }

  async getCity() {
    await this.city.fill("Pune");
     let city = await this.city.inputValue();
    console.log("City is: " + city);
    
  }

  async getMyWishListText() {
    return await this.mywishListtext.textContent();
  }

  async deleteAddressBookEntry() {
    await this.deleteAddressBook_Entry.click();
  }

  async getUpdateSuccessMessage() {
    return await this.updateSuccessMessage.textContent();
  }

  async clickModifyYourWishListText() {
    await this.modifyyourwichlistLink.click();
  }

  async getLastName() {
    await this.Last_Name.fill("Patil");
     let lname = await this.Last_Name.inputValue();
    console.log("Last Name is: " + lname);
    
  }

  async getPostalCode() {
    await this.postal_code.fill("411045");
     let pcode = await this.postal_code.inputValue();
    console.log("Postal Code is: " + pcode);
    
  }

  async deleteSuccessMessageText() {
    return await this.deleteSuccessMessage.textContent();
  }
  
  async selectRegionState() {
    await this.region_state.click();
    await this.region_state.selectOption("3513");
    let regionstate = await this.region_state.inputValue();
    console.log("Region/State is: " + regionstate);
    
  }

  async editAddressBookEntry() {
    await this.editAddressBook_Entry.click();
  } 

  async New_Address1() {
    await this.New_Address.click();
  }



  async getRegionStateErrorMessage() {
    return await this.region_state_Error_Message.textContent();
  }

  async getSuccessMessageAddressBook() {
    return await this.successmessage_addressbook.textContent();
  }

  

  async getPhoneNumber() {
    await this.Phone_Number.fill("9876543210");
     let phone = await this.Phone_Number.inputValue();
    console.log("Phone Number is: " + phone);
    
  }

  async clickNewAddressButton() {
    await this.newAddressButton.click();
  }

  async getPasswordField() {
    await this.PasswordField.fill("Password123");
    let password = await this.PasswordField.inputValue();
    console.log("Password is: " + password);

  }

  async getAddress1() {
    await this.address_1.fill("123 Main St");
     let address1 = await this.address_1.inputValue();
    console.log("Address1 is: " + address1);
    
  } 

  async getCityErrorMessage() {
    return await this.cityError_Message.textContent();
  }

  async clickContinueButton() {
    await this.page.locator("//input[@type='submit' and @value='Continue']").click();
  }

  async clickBackButton() {
    await this.Back_Button.click();
  }

  async getAddress1ErrorMessage() {
    return await this.address1Error_Message.textContent();
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

  async getConformPasswordFieldErrorMessage() {
    return await this.conformPasswordField_error.textContent();
  }

  async getAddressBookText() {
    return await this.page.locator("//h2[text()='Address Book Entries']").textContent();
  }

  async My_Account_Information_text() {
    return await this.page.locator("//h1[text()='My Account Information']").textContent();
  }

  async ClickmyAccountLink() {
    await this.myAccountLink.click();
  }

 
}


