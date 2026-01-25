import test from "@playwright/test";

test('arrow function test', async({  }) =>{

    let demo = () : void => {
        console.log("this is demo function");
    }

    let add = (a:number,b:number) : number => a+b;
    console.log("sum is "+add(5,10));
    demo();

    let greet = function(name1: string ) : String {

        return `hello ${name1}`;
    }

    console.log(greet("Nikhil"));


});



test('create instagram profileee', async({  }) =>{

    let insta_Profile ={

        userName : "nikhil_123",
        fullName : "Nikhil Kumar",
        age : 25,
        posts : 100,
        followers : 5000,
        following : 300,
        bio : "Just a tech enthusiast",
        isVerified : false,
    }

    console.log("Instagram Profile Details:");
    console.log(`Username: ${insta_Profile.userName}`);
    console.log(`Full Name: ${insta_Profile.fullName}`);
    console.log(`Age: ${insta_Profile.age}`);
    console.log(`Posts: ${insta_Profile.posts}`);
    console.log(`Followers: ${insta_Profile.followers}`);
    console.log(`Following: ${insta_Profile.following}`);
    console.log(`Bio: ${insta_Profile.bio}`);
    console.log(`Verified: ${insta_Profile.isVerified}`);
  console.log("Complete Profile Object:");
    console.log(insta_Profile);

})

test('normal data type 2', async({  }) =>{

    let name = "Nikhil";
    let age = 25;
    let x= null;
    let y= undefined;

    console.log("Before calling greet function"+ ` name is ${name}`);
    console.log("Before calling greet function"+ ` age is ${age}`);
    console.log("Before calling greet function"+ ` x is ${x}`);
    console.log("Before calling greet function"+ ` y is ${y}`);


    const product = {
     id :1,
     name :"pen",
     price : 10.5,
     offer : 5,
    };

    console.log("product details are "+ ` id is ${product.id}`);
    console.log("product details are "+ ` name is ${product.name}`);
    console.log("product details are "+ ` price is ${product.price}`);
    console.log("product details are "+ ` offer is ${product.offer}`);

    console.log(product);


});
test('prametrise function test ', async({  }) =>{

    let addition = function(num1: number, num2: number) : number {

        return num1 + num2;
    }

    console.log("addition is "+addition(5,10));

    let printSeries = function(n: number) : void {
        for(let i=0;i<=n;i++)
            {
                console.log(`${i}`);
                if(i%2==0)
                {
                    console.log(`${i} is even`);
                }
                else{

                    console.log(`${i} is odd`);
                }
            }
        
    }

    printSeries(5);
});

 test(' array methods test', async({  }) =>{

    let numbers: number[] = [1, 2, 3, 4, 5];

    // forEach
    numbers.forEach((num) => {
        console.log(`Number: ${num}`);
    });

    let average = function (arr: number[]) : number {

       let sum = 0;
       let avg = 0;
       for(let i=0;i<arr.length;i++)
       {
           sum = sum + arr[i];
       }
       return  avg = sum / arr.length;
    }

   console.log(`Average: ${average([10,20,30,40,50])}`);

});

test('sort array in ascending order', async({  }) =>{

    let arraysort = function(arr: number[]) {

        arr.sort((a, b) => a - b);
        console.log(`sorted array is ${arr}`);
    

        arr.reverse();
        console.log(`reverse sorted array is ${arr}`);
        return arr; 

    }
    console.log(`sorted array is ${arraysort([5,3,8,1,2])}`);


    let num = function(arr : number[]){

        for(let a of arr){
            console.log(a);

        }


    }
    num([10,20,30,40,50]);


});

test('practice more data type test 1', async({  }) =>{
   let arr : string[] = ["hello","world","typescript"];
   for(let a of arr){
    console.log(a);
   }

});


test('array methods test 2', async({  }) =>{

   let arr : number[] = [1, 2, 3, 4, 5];
   let sum = 0;
   for(let a of arr){
       sum += a;
   }
   console.log(`Sum: ${sum}`);

   console.log(arr[2])
   arr.push(6);// add element at last position
    console.log(arr);
    console.log(arr.length);
    arr.pop(); // remove last element
    console.log(arr);
    console.log(arr.length);
    arr.shift();// remove first element
    console.log(arr);
    console.log(arr.length);
    arr.unshift(0);  // add element at first position
    console.log(arr);
    console.log(arr.length);

});