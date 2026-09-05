
import { TestData } from './Test_deta/interface/module1_testdeta';
import { test as base, expect, type Page, type TestInfo } from '@playwright/test';
// Export an alias LoadTestData for compatibility with other modules

declare const process: {
  env: Record<string, string | undefined>;
};

export async function loadTestData() {
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

  return testData;
}

// compatibility alias
export const LoadTestData = loadTestData;

