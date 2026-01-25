import test, { test } from "@playwright/test";

class Person {
    private name!: string;
    private age!: number;
// getter and setter methods
    public getName(): string {
        return this.name;
    }
    public setName(name: string): void {
        this.name = name;
    }

    public getAge(): number {
        return this.age;
    }
    public setAge(age: number): void {
        this.age = age;
    }   

    
}

test('inheritance test', async ({ }) => {

    const person = new Person();
    person.setName("Nikhil");
    person.setAge(25);
    console.log(`Name is ${person.getName()} and age is ${person.getAge()}`);
    
});
test('Logical operators', async ({ }) => {

    let a: number = 10;
    let b: number = 5;


    // Logical Operators
    console.log("a > 5 && b < 10 = " + (a > 5 && b < 10)); // Logical AND
    console.log("a > 15 || b < 10 = " + (a > 15 || b < 10)); // Logical OR
    console.log("!(a > b) = " + (!(a > b))); // Logical NOT


});

   

 

