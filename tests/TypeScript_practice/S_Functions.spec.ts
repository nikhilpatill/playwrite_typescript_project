import test from "@playwright/test";


test(`simple function test`, async ({ }) => {

    let printSeries = function (n: number): void {
        for (let i = 0; i <= n; i++) {
            console.log(`${i}`);
        }
    }
    printSeries(5);

    // Output: 0 1 2 3 4 5

    function greet(): void {

        console.log("Hello, welcome to TypeScript Functions!");

    }


    greet();  // Output: Hello, welcome to TypeScript Functions!



});

// Anonymous Function

test('Anonymous Function Test', async ({ }) => {

    // Define an anonymous function and assign it to a variable
    // A function without a name.

    let multiply = function (a: number, b: number): number {
        return a * b;
    }

    // Call the anonymous function
    let result = multiply(5, 10);
    console.log("Multiplication result is " + result); // Output: Multiplication result is 50


    let employee_name = function (e_first_name: string, e_last_name: string): string {

        return `${e_first_name} ${e_last_name}`;

        let full_name = employee_name("Nikhil", "Sharma");
        console.log("Employee full name is " + full_name); // Output: Employee full name is Nikhil Sharma

    }

    let full_name = employee_name("Nikhil", "Sharma");
    console.log("Employee full name is " + full_name); // Output: Employee full name is Nikhil Sharma

});

test(`callback function test`, async ({ }) => {

    // Define a function that takes a callback as a parameter
    // A callback function is a function passed into another function as an argument,
    // which is then invoked inside the outer function to complete some kind of routine or action.
    // Callbacks are often used for asynchronous operations.


    function E_name(callback: (full_name: string) => void): void {

        let e_first_name: string = "Nikhil";
        let e_last_name: string = "Sharma";
        let full_name: string = `${e_first_name} ${e_last_name}`;
        callback(full_name);

    }

    E_name((full_name: string) => {
        console.log("Employee full name is " + full_name); // Output: Employee full name is Nikhil Sharma
    });

    function calculateSum(a: number, b: number, callback: (sum: number) => void): void {

        let sum: number = a + b;
        callback(sum);
    }

    calculateSum(5, 10, (sum: number) => {
        console.log("Sum is " + sum); // Output: Sum is 15
    });

    function multiplication(x: number, y: number, callback: (product: number) => void): void {

        let product: number = x * y;
        callback(product);
    }

    multiplication(5, 10, (product: number) => {
        console.log("Product is " + product); // Output: Product is 50
    });


    function data(callback: (name: String) => void) {

        let name: String = "Nikhil Sharma";
        callback(name);
    }
    data((name: String) => {
        console.log("Employee full name is " + name); // Output: Employee full name is Nikhil Sharma
    });


});

test(`14. Async Functions`, async ({ }) => {

    // Async functions are used to handle asynchronous operations in 
    // a more readable way using the async/await syntax.
    // An async function returns a Promise implicitly.

    async function fetchData(): Promise<void> {

        console.log("Fetching data...");
        // Simulate an asynchronous operation using setTimeout
        await new Promise(resolve => setTimeout(resolve, 2000));
        console.log("Data fetched successfully!");


    }
    await fetchData(); // Output: Fetching data... (after 2 seconds) Data fetched successfully!

    async function getNumber(): Promise<number> {
        return 42;
    }
    let number: number = await getNumber();
    console.log("Number is " + number); // Output: Number is 42


    async function greet(name: string): Promise<string> {
        return `Hello, ${name}! Welcome to TypeScript Async Functions.`;
    }

    await greet("Nikhil");
    let greeting: string = await greet("Nikhil");
    console.log(greeting); // Output: Hello, Nikhil! Welcome to TypeScript Async Functions.


    // Example of async function with error handling
    async function fetchWithErrorHandling(): Promise<void> {
        try {
            console.log("Attempting to fetch data...");
            // Simulate an error
            throw new Error("Network error");
        } catch (error) {
            console.log("Error occurred: " + (error as Error).message);
        }
    }

    await fetchWithErrorHandling(); // Output: Attempting to fetch data... Error occurred: Network error




});


test(` arrow function test`, async ({ }) => {

    // Arrow functions provide a concise syntax for writing function expressions.
    // They are often used for short functions or as callbacks.

    let data = (): void => {
        console.log("This is an arrow function");
    }

    data(); // Output: This is an arrow function


    let add = (a: number, b: number): number => {
        return a + b;
    }

    let result: number = add(5, 10);
    console.log("Addition result is " + result); // Output: Addition result is 15


    let employee_name = (f_name: string, L_name: string): string => {
        return `${f_name} ${L_name}`;
    }

    let full_name = employee_name("Nikhil", "Sharma");
    console.log("Employee full name is " + full_name); // Output: Employee full name is Nikhil Sharma

});


test(`function with return type`, async ({ }) => {

    function addition(num1: number, num2: number): number {
        return num1 + num2;
    }

    let result: number = addition(5, 10);
    console.log("Addition result is " + result); // Output: Addition result is 15

    function isEven(num: number): boolean {
        return num % 2 === 0;
    }

    console.log("Is 4 even? " + isEven(4)); // Output: Is 4 even? true
    console.log("Is 7 even? " + isEven(7)); // Output: Is 7 even? false


    function getGreeting(name: string): string {
        return `Hello, ${name}! Welcome to TypeScript.`;
    }

    console.log(getGreeting("Nikhil")); // Output: Hello, Nikhil! Welcome to TypeScript.
    console.log(getGreeting("Rahul")); // Output: Hello, Rahul! Welcome to TypeScript.


});




test('function with parameters test ', async ({ }) => {

    function greet(name: string, age: number, x: number, y: number): void {

        console.log("Inside greet function" + ` name is ${name}`);
        console.log("Inside greet function" + ` age is ${age}`);
        console.log("Inside greet function" + ` x is ${x}`);
        console.log("Inside greet function" + ` y is ${y}`);
    }

    let name: string = "Nikhil";
    let age: number = 25;
    let x: number = 10;
    let y: number = 20;

    greet(name, age, x, y);
    greet("Rahul", 30, 15, 25);
    greet("Amit", 28, 12, 22);
    greet("Vijay", 35, 18, 28);


    function displayeProduct(id: number, name: string, price: number, offer: number): void {

        console.log("product details are " + ` id is ${id}`);
        console.log("product details are " + ` name is ${name}`);
        console.log("product details are " + ` price is ${price}`);
        console.log("product details are " + ` offer is ${offer}`);

    }
    displayeProduct(1, "pen", 10.5, 5);
    displayeProduct(2, "pencil", 5.5, 2);
    displayeProduct(3, "notebook", 50.0, 10);
    displayeProduct(4, "eraser", 3.0, 1);


    function employee_name(e_first_name: string, e_last_name: string): String {

        console.log("Employee full name is " + `${e_first_name} ${e_last_name}`);
        return `${e_first_name} ${e_last_name}`;
    }
    employee_name("Nikhil", "Sharma");
    employee_name("Rahul", "Verma");
    employee_name("Amit", "Kumar");
    employee_name("Vijay", "Singh");

});