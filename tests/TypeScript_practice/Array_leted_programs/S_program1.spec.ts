import test from "@playwright/test";


test(`Print all elements of an array`, async ({ }) => {

    const numbers: number[] = [10, 20, 30, 40, 50];

    for (let i = 0; i < numbers.length; i++) {
        console.log(numbers[i]);
    }


});

test(` find the length of an array`, async ({ }) => {

    const numbers: number[] = [10, 20, 30, 40, 50];

    let count = 0;
    for (let i = 0; i < numbers.length; i++) {
        count++;
    }
    console.log(count);
});

test(`print first and last element of an array`, async ({ }) => {

    const numbers: number[] = [10, 20, 30, 40, 50];

    for (let i = 0; i < numbers.length; i++) {
        if (i == 0 || i == numbers.length - 1) {
            console.log(numbers[i]);
        }
    }


});

test(`calculate sum of all elements in an array`, async ({ }) => {

    const numbers: number[] = [10, 20, 30, 40, 50];
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum = sum + numbers[i];
    }
    console.log(sum);
});

test(`find the largest element in an array`, async ({ }) => {

    const numbers: number[] = [12, 45, 7, 89, 23];

    let num = numbers.sort();

    console.log(num);

    for (let i = 0; i < num.length; i++) {
        if (i == num.length - 1) {
            console.log(num[i]);
        }
    }

});

test(`find the smallest element in an array`, async ({ }) => {

    let number: number[] = [12, 45, 7, 89, 23];
    let num = number.sort();

    for (let i = 0; i < num.length; i++) {
        if (i == 0) {
            console.log(num[i]);
        }
    }

});

test(`Count even numbers in an array`, async ({ }) => {

    let number: number[] = [1, 2, 3, 4, 5, 6];

    let count = 0;

    for (let i = 0; i < number.length; i++) {

        if (number[i] % 2 == 0) {
            count++;

        }
    }

    console.log(count)


});


test(`Count odd numbers in an array`, async ({ }) => {

    let number: number[] = [1, 2, 3, 4, 5, 6];

    let count = 0;

    for (let i = 0; i < number.length; i++) {

        if (number[i] % 2 == 1) {
            count++;

        }
    }

    console.log(count)


});

test(`Reverse an array (without using reverse())in an array`, async ({ }) => {

    let number: number[] = [1, 2, 3, 4, 5, 6];

    let count = 0;

    for (let i = number.length; i >= 0; i--) {

        console.log(number[i]);
    }


});

test(`search element in array`, async ({ }) => {


    let array: number[] = [1, 2, 3, 4, 5, 6];

    let search = 5;
    for (let i = 0; i < array.length; i++) {
        if (array[i] == search) {
            console.log("found", `${array[i]}`)
        }
        else {

            console.log("not found");
        }

    }



});
