import test from "@playwright/test";

test('annotation test', async({  }) =>{

  let name: string = "Nikhil";
  console.log(`name is ${name}`);
  console.log(name.toString());        

  let age: number = 25;
  console.log(`age is ${age}`);
  console.log(age.toString());

  let x: string | null = null;
  console.log(`x is ${x}`);
  
  let y: string | undefined = undefined;
  console.log(`y is ${y}`);
  


});


test('normal data type', async({  }) =>{

  let name = "Nikhil";
  let age = 25;
  let x= null;
  let y= undefined;

    console.log("Before calling greet function"+ ` name is ${name}`);
    console.log("Before calling greet function"+ ` age is ${age}`);
    console.log("Before calling greet function"+ ` x is ${x}`);
    console.log("Before calling greet function"+ ` y is ${y}`);


    let message : string = "Hello, World!";
    console.log(`message is ${message}`);
    console.log(message.toString());


    let fullName : string = "Nikhil Patil";
    console.log(`fullName is ${fullName.length}`);
    console.log(fullName.toString());

    let schoolName : string = "ABC School";
    console.log(`schoolName is ${schoolName.toUpperCase()}`);
    console.log(schoolName.toString());

    let city : string = "New York";
    console.log(`city is ${city.toLowerCase()}`);
    console.log(city.toString());



});


test('normal data type 1', async({  }) =>{

let isStudent: boolean = true;
console.log(`isStudent is ${isStudent}`);
console.log(isStudent.toString()); 

let iseven: boolean = false;

let number: number = 10;
if(number % 2 === 0) {
    iseven = true;
}
else {
    iseven = false;
}
console.log(`iseven is ${iseven}`);
console.log(iseven.toString());


});


test('normal data type 2', async({  }) =>{


    function divid_4_8(x: number): boolean {
        console.log(`x is ${x}`);
        if (x % 4 === 0 && x % 8 === 0) {
            return true;
        }
        return false;
    }


    divid_4_8(16);


})

test('normal data type 3', async({  }) =>{


    let num: bigint = 1234567890123456789012345678901234567890n;
    console.log(`num is ${num}`);
    console.log(num.toString());
    

    let name:any = "Nikhil";
    console.log(`name is ${name}`);
    console.log(name.toString());
    let name1:any = 25;
    console.log(`name1 is ${name1}`);
    console.log(name1.toString());
    let name2:any = true;
    console.log(`name2 is ${name2}`);
    console.log(name2.toString());


});

test('normal data type 4', async({  }) =>{

    let name: unknown = "Nikhil";
    name = 25;
    console.log(`name is ${name}`);

    if (typeof name === "string") {
        console.log(` String  name is ${name}`);
    }
    else if (typeof name === "number") {
        console.log(`number  name is ${name}`);
    }
    else if (typeof name === "boolean") {
        console.log(`boolean  name is ${name}`);
    }

});

test('normal data type 5', async({  }) =>{


    let name= (id: number, name: string): void => {
        console.log(`id is ${id} and name is ${name}`);
    }



    console.log("Before calling greet function"+ ` name is ${name}`);
    name(1, "Nikhil");
});