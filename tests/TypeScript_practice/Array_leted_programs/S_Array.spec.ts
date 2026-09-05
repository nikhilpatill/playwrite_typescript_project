import test from "@playwright/test";


test(`Simple array`, async ({ }) => {
    let fruits: string[] = ["Apple", "Banana", "Orange"];
    console.log(fruits);

    for (let fruit of fruits) {
        console.log(fruit);
    }


    let numbers: number[] = [10, 20, 30, 40, 50];
    console.log(numbers);

    for (let num of numbers) {
        console.log(num);
    }

    let mixed: (string | number | boolean)[] = ["Hello", 100, true, "World", 200, false];
    console.log(mixed);

});

test(`Find Array Length`, async ({ }) => {

    let fruits: string[] = ["Apple", "Banana", "Orange", "Mango", "Grapes"];
    console.log(`Number of fruits: ${fruits.length}`); // Output: 5

});

test(`add Elements at the Beginning of Array`, async ({ }) => {

    let fruits: string[] = ["Banana", "Orange"];
    fruits.unshift("Apple");
    fruits.unshift("Mango", "Grapes");
    console.log(fruits); // Output: ["Mango", "Grapes", "Apple", "Banana", "Orange"]

});



test(`Add Elements at the end of Array`, async ({ }) => {

    let fruits: string[] = ["Apple", "Banana"];
    fruits.push("Orange");
    fruits.push("Mango", "Grapes");
    console.log(fruits); // Output: ["Apple", "Banana", "Orange", "Mango", "Grapes"]
});

test(`Remove Elements from the Beginning of Array`, async ({ }) => {

    let fruits: string[] = ["Apple", "Banana", "Orange", "Mango"];
    let firstFruit = fruits.shift();
    console.log(`Removed fruit: ${firstFruit}`);


    console.log(fruits); // Output: ["Banana", "Orange", "Mango"]
});

test(`Remove Elements from the end of Array`, async ({ }) => {

    let fruits: string[] = ["Apple", "Banana", "Orange", "Mango"];
    let lastFruit = fruits.pop();
    console.log(`Removed fruit: ${lastFruit}`);
    console.log(fruits); // Output: ["Apple", "Banana", "Orange"]
}
);

test(`filter values in array`, async ({ }) => {

    let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let evenNumbers = numbers.filter(num => num % 2 === 0);
    console.log(evenNumbers); // Output: [2, 4, 6, 8, 10]

    let oddnumbers = numbers.filter(num => num % 2 !== 0);
    console.log(oddnumbers); // Output: [1,3,5,7,9]

});

test(`join() → join array elements into a string`, async ({ }) => {

    let fruits: string[] = ["Apple", "Banana", "Mango", "Orange"];
    let fruitString = fruits.join(", ");
    console.log(fruitString); // Output: "Apple, Banana, Mango, Orange" 


    let nam = ['a', 'b', 'c', 'd', 'e'];
    let nameString = nam.join("");
    console.log(nameString); // Output: "abcde"

});

test(`Convert String to Array`, async ({ }) => {

    let str: string = "Hello, World!";
    let charArray: string[] = str.split("");
    console.log(charArray); // Output: ['H', 'e', 'l', 'l', 'o', ',', ' ', 'W', 'o', 'r', 'l', 'd', '!']    


});


test(`includes() → check if array contains a value`, async ({ }) => {

    let fruits: string[] = ["Apple", "Banana", "Mango", "Orange"];
    console.log(fruits.includes("Banana")); // Output: true
    console.log(fruits.includes("Grapes")); // Output: false
});


test(`remove duplicate in an array  `, async ({ }) => {

    let numbers: number[] = [1, 2, 3, 3, 4, 5];
    let dublicate: number[] = [];

    for (let i = 0; i < numbers.length; i++) {
        if (!dublicate.includes(numbers[i])) {
            dublicate.push(numbers[i]);
        }
    }
    console.log(dublicate); // Output: [1, 2, 3, 4, 5]
});


test(`Find Duplicate Numbers`, async ({ }) => {

    let number = [1, 2, 3, 4, 3, 2, 3, 5, 1, 6];
    let dublicate: number[] = [];

    for (let i = 0; i < number.length; i++) {
        for (let j = i + 1; j < number.length; j++) {
            if (number[i] === number[j] && !dublicate.includes(number[i])) {
                dublicate.push(number[i]);
                console.log(dublicate); // Output: [1, 2, 3]
            }
        }
    }
    // Output: [1, 2, 3, 4, 5]

    // console.log(number); // Output: [1, 2, 3, 4, 5]
});


test(`Convert Array to String using toString() and join()`, async ({ }) => {

    let fruits: string[] = ["Apple", "Banana", "Mango", "Orange"];
    let fruitString: string = fruits.toString();
    console.log(fruitString); // Output: "Apple,Banana,Mango,Orange"

    let nam: string[] = ['H', 'e', 'l', 'l', 'o'];
    let nameString: string = nam.join(",");
    console.log(nameString); // Output: "H,e,l,l,o"
    let nameString2: string = nam.join("");
    console.log(nameString2); // Output: "Hello"

}
);

test(`sort() → sort array`, async ({ }) => {

    let fruits: string[] = ["Banana", "Apple", "Mango", "Orange", "Grapes"];
    fruits.sort();
    console.log(fruits); // Output: ["Apple", "Banana", "Grapes", "Mango", "Orange"]    

    let numbers: number[] = [40, 10, 30, 20, 50];
    numbers.sort();
    console.log(numbers); // Output: [10, 20, 30, 40, 50]   
    console.log(numbers); // Output: [10, 20, 30, 40, 50]   

});

test(`find() → find first matching element`, async ({ }) => {

    let numbers: number[] = [1, 3, 5, 7, 8, 9, 10];
    let firstEven = numbers.find(num => num === 3);
    console.log(firstEven); // Output: 8    

});

test(`map() → transform array`, async ({ }) => {

    let numbers: number[] = [1, 2, 3, 4, 5];
    let evenNumbers = numbers.map(num => num * 2);
    console.log(evenNumbers); // Output: [2, 4, 6, 8, 10]
});

test(`reduce() → reduce array to a single value`, async ({ }) => {

    let numbers: number[] = [1, 2, 3, 4, 5];
    for (let i = 0; i < numbers.length; i++) {

        console.log(numbers[i]);
    }

    let names: String[] = ["Nikhil", "Rahul", "Amit", "Vijay"];
    for (let i = 0; i < names.length; i++) {

        console.log(names[i]);
    }



});

test(`forEach() → iterate over array`, async ({ }) => {

    let numbers: number[] = [1, 2, 3, 4, 5];
    console.log("Using forEach to iterate over numbers array:");
    console.log(numbers[1]); // Output: 2
    console.log(numbers[2]); // Output: 3
    console.log(numbers[3]); // Output: 4
    console.log(numbers[4]); // Output: 5



});

test(`functions of array`, async ({ }) => {

    let numbers: number[] = [1, 2, 3, 4, 5];
    console.log("Using forEach to iterate over numbers array:");
  
    //push() → add elements to the end of the array
    let lastNumber = numbers.push(6);
    console.log(`Last number added: ${lastNumber}`);
    console.log(`Updated array: ${numbers}`); // Output: [1, 2, 3, 4, 5, 6]

    //pop() → remove the last element from the array
    let lastElement = numbers.pop();
    console.log(`Removed last element: ${lastElement}`);
    console.log(`Updated array: ${numbers}`); // Output: [1, 2, 3, 4, 5]

    //shift() → remove the first element from the array
    let firstElement = numbers.shift();
    console.log(`Removed first element: ${firstElement}`);
    console.log(`Updated array: ${numbers}`); // Output: [2, 3, 4, 5]

    //unshift() → add elements to the beginning of the array
    let firstNumber = numbers.unshift(0);
    console.log(`First number added: ${firstNumber}`);
    console.log(`Updated array: ${numbers}`); // Output: [0, 2, 3, 4, 5]


    for (let i = 0; i < numbers.length; i++) {
        console.log(numbers[i]);
    }

    // forEach() → iterate over the array
    console.log("Using forEach to iterate over numbers array:");

    for(let num of numbers){
        console.log(num);
    }

    // for in operator 
    for (let index in numbers) {
        console.log(`Index ${index} exists in the array.`);
    }

});