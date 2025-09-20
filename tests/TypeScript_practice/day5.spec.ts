import test from "@playwright/test";

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

   

 

