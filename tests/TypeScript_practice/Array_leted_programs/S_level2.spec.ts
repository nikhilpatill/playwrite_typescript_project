import test from "@playwright/test";


test(`Count how many times a number appears`, async ({ }) => {

    const numbers: number[] = [1, 2, 2, 3, 2, 4];

    let count = 0;

    for (let i = 0; i < numbers.length; i++) {

        if (numbers[i] == 2) {
            count++
        }

    }

    console.log(count);

});


test(`Remove duplicate values`, async ({ }) => {

    const numbers: number[] = [1, 2, 2, 3, 2, 4];

    const unique: number[] = [];

    for (let num of numbers) {

        if (!unique.includes(num)) {   //number alredy exist in array check yes 

            unique.push(num);


        }

    }

    console.log(unique);





});
test(`Remove duplicate valuess`, async ({ }) => {

    const numbers = [1, 2, 2, 3, 3, 4];
    const unique: number[] = [];

    for (let i = 0; i < numbers.length; i++) {
        let found = false;

        for (let j = 0; j < unique.length; j++) {
            if (numbers[i] === unique[j]) {
                found = true;
                break;
            }
        }

        if (!found) {
            unique.push(numbers[i]);
        }
    }

    console.log(unique);
});


test(`Merge two arrays valuess`, async ({ }) => {

    const numbers = [1, 2, 3];
    const numbers2 = [4, 5, 6]
    const unique: number[] = []

    for (let num of numbers) {
        if (!unique.includes(num)) {
            unique.push(num)
        }

    }

    for (let num of numbers2) {
        if (!unique.includes(num)) {
            unique.push(num)
        }
    }

    console.log(unique);
});

test(`14. Find the second largest number const numbers = [10, 30, 20, 50, 40];`, async ({ }) => {

    const numbers: number[] = [10, 30, 20, 50, 40];
    
    const num: number[] = numbers.sort();
       console.log(num);
    for (let i = 0; i <= num.length; i++) {

        if (i == 3) {
            console.log(num[i])
        }
    }
});


// 17. Use filter() to get even numbers
// const numbers = [1,2,3,4,5,6];

test(`15 Use filter() to get even numbers`, async ({ }) => {

    const numbers: number[] = [1, 2, 3, 4, 5, 6]     // Output:// [2,4,6]

    const num: number[] = numbers.sort();

    for (let i = 0; i <= num.length; i++) {

        if (num[i] % 2 == 0) {
            console.log(num[i])
        }
    }
});


// 19. Convert all names to uppercase
// const names = ["nikhil","rahul","amit"];

// Output:



test(`Convert all names to uppercase`, async ({ }) => {

    const names = ["nikhil", "rahul", "amit"];     // ["NIKHIL","RAHUL","AMIT"]
    const array1: number[] = [];

    for (let name of names) {

        console.log(name.toUpperCase());

    }
});


test(`Find names whose length is greater than 4`, async ({ }) => {

    const names = ["Ram", "Rahul", "Amit", "Sanjay"];     // ["Rahul","Sanjay"]
    const array1: number[] = [];
    for (let name of names) {
        if (name.length > 4) {
            console.log(name)
        }
    }

});


// Challenge Questions
// Rotate an array by one position.
// Find all duplicate elements.
// Check if an array is sorted.
// Find the missing number from 1 to N.
// Find the intersection of two arrays.
// Find the union of two arrays.
// Move all zeros to the end.
// Separate even and odd numbers.
// Find the average of array elements.
// Check whether two arrays are equal.






// Found
// Level 2: Intermediate
// 11. Count how many times a number appears
// const numbers = [1, 2, 2, 3, 2, 4];

// Find occurrences of 2.

// Output:

// 3
// 12. Remove duplicate values
// const numbers = [1, 2, 2, 3, 3, 4];

// Output:

// [1,2,3,4]
// 13. Merge two arrays
// const arr1 = [1,2,3];
// const arr2 = [4,5,6];

// Output:

// [1,2,3,4,5,6]
// 14. Find the second largest number
// const numbers = [10, 30, 20, 50, 40];

// Output:

// 40
// 15. Sort an array in ascending order
// const numbers = [50, 20, 40, 10, 30];

// Output:

// [10,20,30,40,50]
// Level 3: Using Array Methods
// 16. Use map() to square every number
// const numbers = [1,2,3,4];

// Output:

// [1,4,9,16]

// 17. Use filter() to get even numbers
// const numbers = [1,2,3,4,5,6];

// Output:
// [2,4,6]

// 18. Use reduce() to calculate the sum
// const numbers = [10,20,30];

// Output:

// 60
// 19. Convert all names to uppercase
// const names = ["nikhil","rahul","amit"];

// Output:

// ["NIKHIL","RAHUL","AMIT"]
// 20. Find names whose length is greater than 4
// const names = ["Ram","Rahul","Amit","Sanjay"];

// Output:

// ["Rahul","Sanjay"]
// Challenge Questions
// Rotate an array by one position.
// Find all duplicate elements.
// Check if an array is sorted.
// Find the missing number from 1 to N.
// Find the intersection of two arrays.
// Find the union of two arrays.
// Move all zeros to the end.
// Separate even and odd numbers.
// Find the average of array elements.
// Check whether two arrays are equal.

