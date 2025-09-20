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
;

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