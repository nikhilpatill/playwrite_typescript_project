import test from "@playwright/test";


test(`simple function test`, async ({ }) => {

   class Person {
        name: string;
        age: number;    
        constructor(name: string, age: number) {
            this.name = name; // Initialize name property
            this.age = age;
        }
        greet(): void {
            console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
        }
    }

    let person1 = new Person("Nikhil", 25); // Create an instance of Person
    person1.greet(); // Output: Hello, my name is Nikhil and I am 25 years old.


});

test(`Inheritance (Child Class Extends Parent Class)`, async ({ }) => {

    class Animal {
        name: string;
        constructor(name: string) {
            this.name = name;
        }       
    }

    class Dog extends Animal {
        breed: string;
        constructor(name: string, breed: string) {
            super(name); // Call the parent class constructor   
            this.breed = breed;
        }

        bark(): void {
            console.log(`${this.name} is barking. It is a ${this.breed}.`);
        }
    }

    let dog = new Dog("Buddy", "Golden Retriever");
    dog.bark(); // Output: Buddy is barking. It is a Golden Retriever.

});