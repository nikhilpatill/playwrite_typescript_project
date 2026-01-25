import test from "@playwright/test";


test('Logical operators', async({  }) =>{

   let age : number = 25;

   if(age >= 18 && age <= 65){
        console.log("You are eligible to work");
   }
    else{
        console.log("You are not eligible to work");
    }

});

test('Comparison Operators', async({  }) =>{

    let a =5;
    let b =10;
    console.log("a == b = " + (a == b)); // Equal to
    console.log("a != b = " + (a != b)); // Not equal to
    console.log("a > b = " + (a > b));   // Greater than
    console.log("a < b = " + (a < b));   // Less than
    console.log("a >= b = " + (a >= b)); // Greater than or equal to
    console.log("a <= b = " + (a <= b)); // Less than or equal to

});



test('practice more operators', async({  }) =>{

    //ternary operator
    let age : number = 20;
    let eligibility : string = (age >= 18) ? "Eligible to vote" : "Not eligible to vote";
    console.log("voting eligibility: "+eligibility);

});


test('unitary operators', async({  }) =>{

    let num1 =5;
    console.log("value of num1 is "+num1);
    num1=num1+1;
    console.log("value of num1 after increment is "+num1);
    num1++;
    console.log("value of num1 after increment by 1 is "+num1);

    let num2 =10;
    console.log("value of num2 is "+num2);
    num2=num2-1;
    console.log("value of num2 after decrement is "+num2);
    num2--;
    console.log("value of num2 after decrement by 1 is "+num2);

    let a = 10;

    console.log("value of a is "+ ++a);  // first increment then print
    console.log("value of a is "+ a++);  // first print then increment then next time print
    console.log("value of a is "+ a);

    let d =5 ;

    d = +5;
    console.log("value of d after unary plus and minus is "+d);

    d = -5;
    console.log("value of d after unary minus is "+d);


   
});

