import test from "@playwright/test";


test('Reverse a String', async ({ }) => {

    let name: string = "nikhil";

    let reversed = name.split("").reverse().join("");

    console.log(reversed); // Output: "lihkin"

});

test(`without using reverse method`, async ({ }) => {

    let name: string = "nikhil";

    for (let i = name.length - 1; i >= 0; i--) {
        console.log(name[i]);
    }

});

test(`revsese sentnse`, async ({ }) => {

    let sentence: string = "Hello World from TypeScript";
    let words: string[] = sentence.split(" ");
    console.log(words.reverse().join(" ")); // Output: "TypeScript from World Hello"


});

test(` reverse reverse charater in sentnase `, async ({ }) => {


    let sentence: string = "Hello World from TypeScript";
    let words: string[] = sentence.split(" ");

    for (let word of words) {

        console.log(word.split("").reverse().join(""));


    }

});

test(`Check String is Palindrome`, async ({ }) => {

    let str: string = "madam";
    let reversed: string = str.split("").reverse().join("");

    if (str === reversed) {
        console.log(`${str} is a palindrome`);
    } else {
        console.log(`${str} is not a palindrome`);
    }

});
test(`Count Characters in a String`, async ({ }) => {

    let nam: string = "TypeScript";

    console.log(`Length of string is: ${nam.length}`);


});

test(`count the charater of string without using length property`, async ({ }) => {

    let nam: string = "TypeScript";
    let count: number = 0;
    for (let char of nam) {
        count++;
    }
    console.log(`Length of string is: ${count}`);


});

test(`Count Vowels in a String`, async ({ }) => {

    let nam: string = "TypeScript";
    let vowelsCount: number = 0;
    let consonantsCount: number = 0;

    for (let char of nam) {

        if ("aeiouAEIOU".includes(char)) {
            vowelsCount++;
        } else {
            consonantsCount++;
        }

    } 
    console.log(`Vowels: ${vowelsCount}, Consonants: ${consonantsCount}`);
    
});

test(`Count Consonants in a String`, async ({ }) => {

    let nam: string = "TypeScript";
    let consonantsCount: number = 0;

for(let char of nam){

    if(!"aeiouAEIOU".includes(char)){
        consonantsCount++;
    }
}

console.log(`Consonants: ${consonantsCount}`);
});

test(`Find Duplicate Characters`, async ({ }) => {

    let nam: string = "programming";

    let map = new Map<string, number>();

     let chars = nam.split("");
    for (let char of chars) {

        map.set(char,(map.get(char)||0)+1);
    }
    for(let [key, values] of map){
        if(values>=1){
            console.log(`${key} : ${values}`);
        }   


    }
});

test(`Find count Characters`, async ({ }) => {

    let nam: string = "programming";

    let map = new Map<string, number>();

     let chars = nam.split("");
    for (let char of chars) {

        map.set(char,(map.get(char)||0)+1);
    }
    for(let [key, values] of map){
        if(values>=1){
            console.log(`${key} : ${values}`);
        }   


    }
});

test(`Sort Characters in a  String`, async ({ }) => {

    let nam: string = "programming";

    let sorted = nam.split("").sort().join("");

    console.log(sorted); // Output: "aggimmnoprr"

}); 