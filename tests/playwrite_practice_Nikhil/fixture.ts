import { test as base, expect, type Page, type TestInfo } from '@playwright/test';
import { TestData } from './Test_deta/interface/module1_testdeta';

declare const process: {
  env: Record<string, string | undefined>;
};



type MyFixtures = {
  testData: TestData;

};


const test = base.extend<MyFixtures>({

  testData: async ({ page }, use) => {
    const environment = process.env.TEST_ENVIRONMENT || 'QA';
    const directory = `./Test_deta/${environment}`;
    // Load test data from JSON files in the directory
    const testData: TestData = {
      module1_testdeta: {
        user1: {    
      email1: "<EMAIL>",
      password1: "<PASSWORD>"
    },
    user2: {
      email2: "<EMAIL>",
      password2: "<PASSWORD>"
    }
      }
    };
    await use(testData);
   // await use();
  },

 
});

export { test, expect };

test.afterEach(async ({ page }, testInfo: TestInfo) => {
  if (testInfo.status === 'failed') {
    const screenshot = await page.screenshot({ fullPage: true });
    await testInfo.attach('screenshot', { body: screenshot, contentType: 'image/png' });
  }
});
