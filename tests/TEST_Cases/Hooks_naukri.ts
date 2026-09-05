import { test as base, expect, type Page, type TestInfo } from '@playwright/test';
import { loginPage1} from '../Pages/Naukri_LoginPage';
import testDeta from '../TEST_Cases/Test_deta_naukri/Naukri_testdeta.json';

// Use the imported JSON data where needed in this test file.
type MyFixtures = {
  LoginPage: loginPage1;
  
};


const test = base.extend<MyFixtures>({
  LoginPage: async ({ page }, use) => {
    const LoginPage = new loginPage1(page);
    await LoginPage.navigate();
    await LoginPage.enterUsername();
    await LoginPage.enterPassword();
    await LoginPage.clickSubmit();
    await use(LoginPage);
  },
});

export { test, expect };

test.afterEach(async ({ page }, testInfo: TestInfo) => {
  if (testInfo.status === 'failed') {
    const screenshot = await page.screenshot({ fullPage: true });
    await testInfo.attach('screenshot', { body: screenshot, contentType: 'image/png' });
  }
});
