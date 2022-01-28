// Array destructuring
var arr = [11, 22, 33];
/*
// Old Style
let x:number, y:number, z:number;
x = arr[0];
y = arr[1];
z = arr[2];
*/
var x = arr[0], y = arr[1];
console.log("X = ".concat(x, ", y = ").concat(y));
console.log("-----------------------------------");
var MAX_TRAILS = 3;
console.log("Maximum No. of trails : " + MAX_TRAILS);
// MAX_TRAILS = 4;     // error :  not editable
console.log("-----------------------------------");
// Unions in TypeScript
var rating;
rating = 5;
if ((typeof rating) == "number") {
    console.log("The Numeric value of a rating  is: " + rating);
    console.log(typeof rating);
    console.log("---------------------");
}
rating = "Excellent";
console.log("The String value of a rating  is: " + rating);
console.log(typeof rating);
console.log("---------------------");
