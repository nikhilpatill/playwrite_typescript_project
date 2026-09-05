import { test, expect } from "@playwright/test"
import testData from "./post_request_deta.json";
import { faker } from '@faker-js/faker';
// Removed unused DateTime import from 'luxon' to resolve missing type declarations and unused variable


test('post request data', async ({ request }) => {
  const data = {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    age: faker.number.int({ min: 18, max: 100 }),
    id: faker.number.int({ min: 1, max: 1000 }),
    middleName: faker.name.middleName(),
    gender: faker.helpers.arrayElement(['male', 'female']),
    email: faker.internet.email(),
    phone: faker.phone.number(),
    username: faker.internet.userName(),
    password: faker.internet.password(),
    birthDate: faker.date.birthdate({ mode: 'year', min: 1900, max: 2000 }).toLocaleDateString(),
    image: faker.image.avatar(),
    bloodGroup: faker.helpers.arrayElement(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']),
    height: faker.number.int({ min: 150, max: 200 }),
    weight: faker.number.float({ min: 40, max: 100 }),
    eyeColor: faker.color.human(),
    hair: {
      color: faker.color.human(),
      type: faker.helpers.arrayElement(['straight', 'wavy', 'curly', 'coily'])
    },
    ip: faker.internet.ip(),
    address: {
      address: faker.location.streetAddress(),
      city: faker.location.city(),
      state: faker.location.state(),
      stateCode: "232323232",
      postalCode: faker.location.zipCode(),
      coordinates: {
        lat: null,
        lng: null
      },
      country: faker.location.country()
    },
    macAddress: faker.internet.mac(),
    university: faker.helpers.arrayElement(['Harvard University', 'Stanford University', 'MIT', 'University of Cambridge', 'University of Oxford']),
    bank: {
      cardExpire: faker.date.future().toISOString().split('T')[0],
      cardNumber: faker.finance.creditCardCVV(),
      cardType: faker.helpers.arrayElement(['Visa', 'MasterCard', 'American Express']),
      currency: faker.finance.currencyCode(),
      iban: faker.finance.iban()
    },
    company: {
      department: faker.commerce.department(),
      name: faker.company.name(),
      title: faker.name.jobTitle(),
      address: {
        address: faker.location.streetAddress(),
        city: faker.location.city(),
        state: faker.location.state(),
        stateCode: faker.location.state(),
        postalCode: faker.location.zipCode(),
        coordinates: {
          lat: null,
          lng: null
        },
        country: faker.location.country()
      }
    },
    ein: "",
    ssn: "",
    userAgent: "",
    crypto: {
      coin: "",
      wallet: "",
      network: ""
    },
    role: "user"
  };

  const response = await request.post('https://dummyjson.com/users/add', {
    data
  });

  expect(response.status()).toBe(201);
  const responseBody = await response.json();
  console.log('Response Body:', responseBody);

  // Validate the response body against the expected data
  expect(responseBody.firstName).toBe(data.firstName);
  expect(responseBody.lastName).toBe(data.lastName);
  expect(responseBody.age).toBe(data.age);

  //validate status code
  expect(response.status()).toBe(201);
  expect(response.ok()).toBeTruthy();
  //expect(responseBody).toMatchObject(data);


  //validate  nested object
  expect(responseBody.address).toMatchObject(data.address);
  expect(responseBody.company).toMatchObject(data.company);

  

});