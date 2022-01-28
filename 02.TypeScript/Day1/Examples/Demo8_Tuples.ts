 var mytuple = [1020, "Printer"]; 
// var mytuple:[number, string] = [1020, "Printer"];

console.log("Product Id  : "  + mytuple[0]);
console.log("Product Name  : "  + mytuple[1]);


// Operations on Tuples :  push() / pop()
console.log("Size of Tuples (Before Push) : " + mytuple.length);
mytuple.push(45);
console.log("Product Quantity : "  + mytuple[2]);
console.log("Size of Tuples (After Push) : " + mytuple.length);


console.log("Poped Item  : "  + mytuple.pop());
console.log("Size of Tuples (After Pop) : " + mytuple.length);

mytuple[1]  = "iBall Speakers";
console.log("Product Name  : "  + mytuple[1]);