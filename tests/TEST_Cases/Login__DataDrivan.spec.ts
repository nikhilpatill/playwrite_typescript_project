import { test, expect, Page } from '@playwright/test';
import { LoginPage } from '../Pages/LoginPage1.spec';
import { text } from 'stream/consumers';
import { assert } from 'console';



test(' Edit account page  @nik', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    const testData = require('../TEST_Cases/Test_data.json')

    for (let data of testData) {
       console.log(`Testing with email: ${data.email} and password: ${data.password}`);
        await loginPage.enterUsername(data.email);
        await loginPage.enterPassword(data.password);

        if(data.email === "nikhilpatil1080@gmail.com" && data.password === "Welcome@123") {
            await loginPage.clickSubmit();
           await expect(page.locator('//div[@id="content"]/h2[1]')).toHaveText('My Account');
        }
      
    }
    
});