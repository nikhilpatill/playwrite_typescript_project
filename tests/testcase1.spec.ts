import { test, expect , Browser, Page, Locator} from '@playwright/test';
import { webkit, chromium, firefox  }  from '@playwright/test';

test('this first test', async({ page }) =>{

    const name : string = "nikhil";
    console.log("my name is "+name);


    console.log("this is my first test");
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await expect(page).toHaveTitle(/OrangeHRM/);
    await page.screenshot({ path: 'screenshot.png' });
    const admin: Locator = await page.locator('//input[@placeholder="Username"]');
     await admin.fill('Admin');
     await console.log("admin is filled");
await page.locator('//input[@placeholder="Password"]').fill('admin123');
await page.locator('[type="submit"]').click();
const actual_text: Locator = page.locator('//p[text()="Time at Work"]');
await expect(actual_text).toHaveText('Time at Work');
await page.screenshot({ path: 'screenshot1.png' });
await console.log("login is successful");
await page.locator('//span[text()="PIM"]').click();
await page.close();


});



