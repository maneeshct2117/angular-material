//   tsc Demo5.ts   --lib es2016,dom

var arr:number[]=[11,2,33,40,5];

console.log("Given array: " + arr);
console.log("Element equal to 40 : " + arr.find( x => x == 40  ));
console.log("Index of Element 40 : " + arr.findIndex( x => x == 40  ));


var arr2:number[] = arr.filter( x =>  x > 10 );
console.log(arr2.toString());
