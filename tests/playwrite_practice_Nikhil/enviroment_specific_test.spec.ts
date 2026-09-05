// Removed incorrect import from './fixture'
import { test } from '@playwright/test';

declare const process: {
  env: Record<string, string | undefined>;
};

type UserData = Record<
  string,
  {
    email1?: string;
    password1?: string;
  }
>;

const deta: UserData = {
  primaryUser: {
    email1: 'testuser@example.com',
    password1: 'Password123',
  },
};

test('placeholder test', async ({ page }) => {
  // environment specific tests go here
  const environment = process.env.TEST_ENVIRONMENT || 'QA';
  await page.goto(`https://qa-practice.netlify.app/auth_ecommerce`);

  for (const userKey of Object.keys(deta)) {
    const user = deta[userKey];

    if (!user || !('email1' in user) || !('password1' in user)) {
      continue; // Skip if the user object doesn't have the expected properties
    }

    await page.locator('input#email').fill(user.email1 as string);
    console.log(`Email: ${user.email1}, Password: ${user.password1}`);
    await page.locator('input#password').fill(user.password1 as string);
  }

  console.log(`Environment used: ${environment}`);
});