// Callbacks in TypeScript

function getTwoMultiplies(x:number) : number
{
    return x * 2;
}

let arr1:number[] = [1, 2, 3, 4, 5];
let arr2:number[] =  [];

console.log(arr1.toString());

// 1. Named functions as callback
arr2 = arr1.map( Math.sqrt );
console.log(arr2.toString());

arr2 = arr1.map( getTwoMultiplies );
console.log(arr2.toString());


// 2. anonymous functions as callback
arr2 = arr1.map(function(x:number) 
                {
                    return x * 5;
                });

console.log(arr2.toString());


// 3. Arrow functions as callback
arr2 = arr1.map( (x:number) =>
                {
                    return x * 10;
                });

console.log(arr2.toString());
 
//    =>    goes to
arr2 = arr1.map( x => x * x );

console.log(arr2.toString());


