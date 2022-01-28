// Array destructuring
let arr:number[] = [11, 22, 33];

/*
// Old Style
let x:number, y:number, z:number;
x = arr[0]; 
y = arr[1]; 
z = arr[2];
*/

let [x, y] = arr;
console.log(`X = ${x}, y = ${y}`);
console.log("-----------------------------------");

const MAX_TRAILS:number = 3;
console.log("Maximum No. of trails : " + MAX_TRAILS)
// MAX_TRAILS = 4;     // error :  not editable

console.log("-----------------------------------");

// Unions in TypeScript
let rating: number|string;  
rating = 5;  

if( (typeof rating) == "number"  )
{
    console.log("The Numeric value of a rating  is: " + rating);  
    console.log(typeof rating);
    console.log("---------------------");
}

rating = "Excellent";
console.log("The String value of a rating  is: " + rating);  
console.log(typeof rating);
console.log("---------------------");



