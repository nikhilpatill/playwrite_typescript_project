import test from "@playwright/test";


test(` test map`, async ({ }) => {

    //What is Map in TypeScript?
    //Map is a special type of collection that stores key–value pairs.
    //✔ Keys can be any type (string, number, object).
    //✔ Values can also be any type.
    //✔ Maintains insertion order.
    //✔ Faster and cleaner than normal objects.
    //✔ Useful for dynamic data storage and retrieval.
    let myMap = new Map<string, number>();
    myMap.set("apple", 1);
    myMap.set("banana", 2);
    myMap.set("orange", 3);

});

test(`Creating a Map`, async ({ }) => {

    let fruitMap = new Map<string, number>();

    fruitMap.set("apple", 10);
    fruitMap.set("banana", 20);
    fruitMap.set("orange", 30);
    console.log(fruitMap);


    for(let [key, values] of fruitMap){

        console.log(`${key} : ${values}`);
     }



    let boys = new Map<String, number>();

     boys.set("Nikhil", 101);
     boys.set("Rahul", 102);
     boys.set("Amit", 103);
     boys.set("Vijay", 104);
     boys.set("Suresh", 105);

     for(let[key, values] of boys){

        console.log(`${key} : ${values}`);
     }
});

test(`Getting Values from a Map`, async ({ }) => {


    let countryMap = new Map<string, string>();

    countryMap.set("IN", "India");
    countryMap.set("US", "United States");
    countryMap.set("UK", "United Kingdom");     

    console.log(countryMap.get("IN")); // Output: India
    console.log(countryMap.get("US")); // Output: United States
    console.log(countryMap.get("UK")); // Output: United Kingdom



});

test(`Checking Existence of Keys`, async ({ }) => {


    let boys = new Map<String, number>();

    boys.set("Nikhil", 101);
    boys.set("Rahul", 102);
    boys.set("Amit", 103);
    console.log(boys.has("Nikhil")); // Output: true
    console.log(boys.has("Vijay")); // Output: false


});

test(`Getting Size of a Map`, async ({ }) => {

    let boys = new Map<String, number>();
    boys.set("Nikhil", 101);
    boys.set("Rahul", 102);
    boys.set("Amit", 103);
    console.log(boys.size); // Output: 3


    for(let b of boys.keys()){
        console.log(b);
    }

    for(let b of boys.values()){
        console.log(b);
    }   


});

test(`Iterating Over a Map`, async ({ }) => {


    let boys = new Map<String, number>();   
    boys.set("Nikhil", 101);
    boys.set("Rahul", 102);
    boys.set("Amit", 103);
    boys.set("Vijay", 104);
    boys.set("Suresh", 105);

    for(let [key, values] of boys){
        console.log(`${key} : ${values}`);
    }

});

test(`Clearing a Map`, async ({ }) => {


    let boys = new Map<String, number>();   
    boys.set("Nikhil", 101);
    boys.set("Rahul", 102);
    boys.set("Amit", 103);
    console.log(boys.size); // Output: 3

    boys.clear();
    console.log(boys.size); // Output: 0
    console.log(boys);


});


test(`Deleting Entries from a Map`, async ({ }) => {


    let boys = new Map<String, number>();   
    boys.set("Nikhil", 101);
    boys.set("Rahul", 102);
    boys.set("Amit", 103);
    console.log(boys.delete("Rahul")); // Output: true
    console.log(boys.delete("Vijay")); // Output: false

    console.log(boys);



});




test(`Accessing Map Elements`, async ({ }) => {

    let map = new Map();
    map.set("id", 101);
    map.set("age", 25);
    map.set("salary", 50000);

    console.log(map.keys(), map.values());

    for (let [key, value] of map) {
        console.log(`${key} : ${value}`);
    }


});

