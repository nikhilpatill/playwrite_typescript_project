import test from "@playwright/test";


test(`Find the Second Largest Number`, async ({ }) => {
    const numbers: number[] = [10, 5, 25, 8, 15, 25];

    // sort numerically
    const num: number[] = [];
    // find second largest distinct number
    for (let i = 0; i < numbers.length; i++) {
        if (!num.includes(numbers[i])) {

            num.push(numbers[i])

        }
    }

    console.log(num.sort());
    let temp;

    for(let i=0; i<num.length-1;i++)
    {

       for(let j=1;i<num.length-1;j++)
       {

        if(num[i]>num[j])
        {
            temp=num[i];
            num[i]=num[j];
            num[j]=temp;

        }
        console.log(num[i])

       }
       
    }
    


});


