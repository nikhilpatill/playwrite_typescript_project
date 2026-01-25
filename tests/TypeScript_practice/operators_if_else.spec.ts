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




