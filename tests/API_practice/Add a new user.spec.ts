import { test, expect } from "@playwright/test"
import testData from "./post_request_deta.json";

test('post request data', async ({ request }) => {
  const response = await request.post('https://dummyjson.com/users/add', { data: testData });
  expect(response.status()).toBe(201);
  const responseBody = await response.json();
  console.log('Response Body:', responseBody);

  // Validate the response body against the expected data
  expect(responseBody.firstName).toBe(testData.firstName);
  expect(responseBody.lastName).toBe(testData.lastName);
  expect(responseBody.age).toBe(testData.age);

  //validate status code
  expect(response.status()).toBe(201);
  expect(response.ok()).toBeTruthy();
  expect(responseBody).toMatchObject(testData);


  //validate  nested object
  expect(responseBody.address).toMatchObject(testData.address);
  expect(responseBody.company).toMatchObject(testData.company);

  



});