import test from "@playwright/test";

class Person {
    protected name: string;
    public age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

class Employee extends Person {
    public employeeId: number;

        constructor(name: string, age: number, employeeId: number) {
            super(name, age);
            this.employeeId = employeeId;
        }

        work() {
            console.log(`Employee ${this.name} is working.`);
            console.log(`Employee ID: ${this.employeeId}`);
            console.log(`Age: ${this.age}`);
        }
    }   

 


test('object test', async ({ }) => {
    const employee = new Employee("John", 30, 12345);
    employee.work();
});