import test from "@playwright/test"


test.describe('Rules and notes for running code', () => {

//perticular test case to run login test case
"npx playwright test tests/TEST_Cases/Login_TestCase.spec.ts"

//perticular test case to run My Account test case
"npx playwright test tests/TEST_Cases/MyAccount_TestCase.spec.ts"

//perticular test case to run data drivan test case
"npx playwright test tests/TEST_Cases/Login__DataDrivan.spec.ts"        

//run all test cases
"npx playwright test"

//run test cases in headed mode
"npx playwright test --headed"

//run test cases in debug mode
"npx playwright test --debug"

//run test cases with specific tag
"npx playwright test --grep @nik"

//run test cases with specific tag in headed mode
"npx playwright test --grep @nik --headed"

//run test cases with specific tag in debug mode
"npx playwright test --grep @nik --debug"

//run test cases in specific 2 or more files
"npx playwright test tests/TEST_Cases/MyAccount_TestCase.spec.ts tests/TEST_Cases/Login_TestCase.spec.ts"

});
