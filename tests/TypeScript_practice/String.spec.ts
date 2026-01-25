import test from "@playwright/test";




test('test name', async ({ }) => {

    let name: string[] = ["Alice", "Bob", "Charlie", "David", "Eve"];

    for (let i = 0; i < name.length; i++) {
        console.log(`Name at index ${i} is ${name[i]}`);
    }

});


test('test String methods', async ({ }) => {

    let sampleString: string = "  Hello, Playwright!  ";

    // Length of the string
    console.log(`Length: ${sampleString.length}`);

    // Convert to uppercase
    console.log(`Uppercase: ${sampleString.toUpperCase()}`);

    // Convert to lowercase
    console.log(`Lowercase: ${sampleString.toLowerCase()}`);

    // Trim whitespace
    console.log(`Trimmed: '${sampleString.trim()}'`);

    // Replace substring

    console.log(`Replaced: ${sampleString.replace("Playwright", "TypeScript")}`);

    console.log(`Includes 'Hello': ${sampleString.includes("Hello")}`);


});

test('test charAt and charCodeAt methods', async ({ }) => {

    let nam: string = "Playwright";

    console.log(nam.charAt(0));// Output: "P"
    console.log(nam.charAt(4)); // Output: "w"
    console.log(nam.charAt(9)); // Output: "" (empty string, index out of bounds)

    console.log(nam.charCodeAt(0)); // Output: 80 (ASCII code for 'P')


    for (let i = 0; i < nam.length; i++) {
        console.log(`Character at index ${i} is ${nam.charAt(i)} with ASCII code ${nam.charCodeAt(i)}`);
    }


    for (let i = nam.length - 1; i >= 0; i--) {
        console.log(` ${nam.charAt(i)}`);  //printing in reverse order
        // print charter  harizontaly 
    }

    let str = "Playwright";
    let charArray = str.split("");

    console.log(charArray); // Output: ['P', 'l', 'a', 'y', 'w', 'r', 'i', 'g', 'h', 't'  
    
    for (let char of charArray) {
        console.log(char);

        
    }


let progStr = "programming";
let map: { [key: string]: number } = {};


for (let ch of progStr) {
map[ch] = (map[ch] || 0) + 1;
}

console.log(map);

});

test(`test replace method`, async ({ }) => {


    let name: String = "hello";
    console.log(name.replace("h", "H")); // Output: "Hello"
    console.log(name.replace("h", "Y")); // Output: "Yello"
    console.log(name.replace("lo", "p")); // Output: "help"



});

test(`test concat method`, async ({ }) => {

    let firstName: string = "Nikhil";
    let lastName: string = "patil";

    console.log(firstName.concat(" ", lastName)); // Output: "Nikhil patil"

    console.log(firstName.concat(", Welcome to TypeScript!")); // Output: "Nikhil, Welcome to TypeScript!"

    console.log(firstName + lastName); // Output: "Nikhilpatil"
});


test(` test slice method`, async ({ }) => {

    let name: string = "123456789";
    console.log(name.slice(2, 5)); // Output: "345"

    let greeting: string = "my name is nikhil";
    console.log(greeting.slice()); // Output: "my name is nikhil"

    console.log(greeting.slice(3)); // Output: "name is nikhil"

    console.log(greeting.slice(-6)); // Output: "nikhil"






});

test(`joint method`, async ({ }) => {

  let arr: string[] = ["Nikhil", "Patil", "is", "a", "developer"];
  let joinedString: string = arr.join(" ");
  console.log(joinedString); // Output: "Nikhil Patil is a developer"   


  let name ="playwright";  
  let charsArray: string[] = name.split("");// Splitting the string into an array of characters
  let hyphenJoined: string = charsArray.join("-");
  console.log(hyphenJoined); // Output: "p-l-a-y-w-r-i-g-h-t"


  //reverse method
  let  name1: string = "TypeScript";
  console.log(name1.split("").reverse().join("")); // Output: "tpircSepyT"



});