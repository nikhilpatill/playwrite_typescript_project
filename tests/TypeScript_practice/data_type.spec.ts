import test from "@playwright/test";

test('this is data type test', async({  }) =>{

    let num :number = 10;
    console.log("value of num is "+num);

    let str :string = "Hello";
    console.log("value of str is "+str);

    let isTrue :boolean = true;
    console.log("value of isTrue is "+isTrue);

    let arr :number[] = [1,2,3];
    console.log("value of arr is "+arr);

    let tuple :[number,string] = [1,"Hello"];
    console.log("value of tuple is "+tuple);


    let name : String = "Nikhil";
    console.log("length of the string  "+name.length);
    console.log("character at index 2 is "+name.charAt(2));
    console.log("index of h is "+name.indexOf('h'));
    console.log("substring from index 1 to 3 is "+name.substring(1,4));
    console.log("lowercase "+name.toLowerCase());
    console.log("uppercase "+name.toUpperCase());
    console.log("replace "+name.replace('Nikhil','Adhikari'));
});

test('practice more data type test ', async({  }) =>{

   let name : string ="nikhil";
   let length : number = name.length;
   console.log("length of the string is "+length);

   let char : string = name.charAt(2);
   console.log("character at index 2 is "+char);
   
    let index : number = name.indexOf('h');
    console.log("index of h is "+index);

    let sub : string = name.substring(1,4);
    console.log("substring from index 1 to 3 is "+sub);

    let lower : string = name.toLowerCase();
    console.log("lowercase "+lower);

    let upper : string = name.toUpperCase();
    console.log("uppercase "+upper);

    for(let i=0;i<name.length;i++){
        console.log(name.charAt(i));
    }

    let num : number = 10;

    for(let i=0;i<num;i++){
        console.log(i);
    }

    function demo(a: number): boolean{
        if(a%2==0){
            return true;
        }
        return false;
    }
    console.log("check number is even or not" +demo(5));
    console.log("check number is even or not " +demo(6));
    
    function demo1(a:number): boolean{
        return a%4==0 && a%8==0 ? true : false;
    }
    console.log("check number is divisible by 4 and 8 =" +demo1(16));
    console.log("check number is divisible by 4 and 8 =" +demo1(18));

});

test('practice more data type test 2', async({  }) =>{

    let num : number = 1099999999999999999;
    console.log("value of num is "+num);
    // bigint is used for very large numbers
    let num1 : bigint = 1099999999999999999n;
    console.log("value of num1 is "+num1);

    // any type can hold any type of value
    let val : any = 10;
    console.log("value of val is "+val);
    val = "hello";
    console.log("value of val is "+val);
    val = true;
    console.log("value of val is "+val);

    let arr : any[] = [1,"hello",true,2.5];
    console.log("value of arr is "+arr);

    //unknown type
    let val1 : unknown = 10;
    console.log("value of val1 is "+val1);
    val1 = "hello";
    console.log("value of val1 is "+val1);
    val1 = true;
    console.log("value of val1 is "+val1);

    //

});

test('practice more arrow function and ', async({  }) =>{

    let demo = (id:number, name1:string) =>
    {
        console.log(`id is ${id} and name is ${name1}`);
    }
    demo(1,"nikhil");

    let add = (a:number,b:number): number => a+b;
    console.log("sum is "+add(5,6));

    let isEven = (a:number): boolean => a%2==0 ? true : false;
    console.log("is even "+isEven(5));
    console.log("is even "+isEven(6));

    let isDivisible = (a:number): boolean => a%4==0 && a%8==0 ? true : false;
    console.log("is divisible by 4 and 8 "+isDivisible(16));
    console.log("is divisible by 4 and 8 "+isDivisible(18));

    
});