import { test, expect } from "@playwright/test";
import testData from "./Test_deta/testdeta.json";


type UserData = {
  user1: {
    email1: string;
    password1: string;
  };
  user2: {
    email2: string;
    password2: string;
  };
};

const deta = testData as UserData;

test.describe('Data Driven Test Example', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://qa-practice.netlify.app/auth_ecommerce');
  });



test('data driven test example', async ({ page }) => {
  
  for (const userKey of Object.keys(deta)) {
    const user = deta[userKey as keyof UserData];
    if(!('email1' in user && 'password1' in user)) continue; // Skip if the user object doesn't have the expected properties
    await page.locator('input#email').fill(user.email1);
    console.log(`Email: ${user.email1}, Password: ${user.password1}`);
    await page.locator('input#password').fill(user.password1);
  }
});

test('data driven test example - 2', async ({ page }) => {
  for (const userKey of Object.keys(deta)) {
    const user = deta[userKey as keyof UserData];
    if(!('email2' in user && 'password2' in user)) continue; // Skip if the user object doesn't have the expected properties
    await page.locator('input#email').fill(user.email2);
    console.log(`Email: ${user.email2}, Password: ${user.password2}`);
    await page.locator('input#password').fill(user.password2);
  }

});
});


test('practice object retrieve data', async ({ page }) => {

  type Deta = {
    user1: {
      email1: string;
      password1: string;
    };
    user2: {
      email2: string;
      password2: string;
    };
  };

  const deta: Deta = {
    user1: {
      email1: "nikhil",
      password1: "password",
    },
    user2: {
      email2: "nikil",
      password2: "password2",
    },
  };

  for(const userkey of Object.keys(deta)){
    const user = deta[userkey as keyof Deta];
    if(!('email1' in user && 'password1' in user)) continue; // Skip if the user object doesn't have the expected properties
    console.log(`Email: ${user.email1}, Password: ${user.password1}`);
    
  }
});

test('Create a Simple Object', async ({ page }) => {
  type User = {
    name: string;
    age: number;
    email: string;
  };
  const user: User = {
    name: "John Doe",
    age: 30,
    email: "john.doe@example.com"
  };

  console.log(`name: ${user.name}`);
  console.log(`age: ${user.age}`);
  console.log(`email: ${user.email}`);

  for(const key of Object.keys(user)){

    const value = user[key as keyof User];
    console.log(`Key: ${key}, Value: ${value}`);
    
    if(!('name' in user && 'age' in user && 'email' in user)) continue;
    console.log(`name: ${user.name}`);
    console.log(`age: ${user.age}`);
    console.log(`email: ${user.email}`);  
  }

 // console.log(`name: ${user.name}`);


});

test('Create a Simple Object - 2', async ({ page }) => {

  const employee = {
    name: "Nikhil",
    address: {
        city: "Pune",
        state: "Maharashtra",
        pincode: 411001
    },
    city: { place: "Pune",
           state: "Maharashtra",
            pincode: 411001
         }
  };


console.log(`Employee Name: ${employee.name}`);
console.log(`Employee City: ${employee.address.city}`);
console.log(`Employee State: ${employee.address.state}`);
console.log(`Employee Pincode: ${employee.address.pincode}`);
console.log(`Employee City Place: ${employee.city.place}`);
console.log(`Employee City State: ${employee.city.state}`);
console.log(`Employee City Pincode: ${employee.city.pincode}`);

});

test('Create a Simple Object - 3', async ({ page }) => {

  const users = [
    {
      name: "Nikhil",
      age: 30,
      email: "nikhil@example.com"
    },
    {
      name: "Asha",
      age: 28,
      email: "asha@example.com"
    }
  ];

  console.log(users[0].name);
  console.log(users[1].age);

  console.log(`User 1: Name - ${users[0].name}, Age - ${users[0].age}`);
  console.log(`User 2: Name - ${users[1].name}, Age - ${users[1].age}`);

});

