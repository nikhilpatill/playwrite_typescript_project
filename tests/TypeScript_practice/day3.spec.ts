import test from "@playwright/test";

test('object  test', async({ }) =>{

   class Person {
       name: string;
       age: number;
       constructor(name: string, age: number) {
           this.name = name;
           this.age = age;
       }
       greet() {
           console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
       }
   }

   let person1 = {
       name: "Nikhil",
       age: 25,
   };
   console.log(`Name is ${person1.name} and age is ${person1.age}`);
   person1.age = 26;
   console.log(`Name is ${person1.name} and age is ${person1.age}`);

   // Use the Person class for greeting
   let personObj = new Person(person1.name, person1.age);
   personObj.greet();

   // Reassign personObj to a new Person instance
   personObj = new Person("John", 30);
   personObj.greet();

});
