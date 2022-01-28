function greeting(name:string) : void
{
    console.log("Welcome to " + name);
}

function add(x:number,  y:number) : number
{    
    return x + y;
}


// Optional Parameters
/*
function getTotal(price:number,  qty?:number) : void
{
    let total:number = 0;

    if(qty == undefined) 
    {
        qty = 1;
    }
    
    total = price * qty;
 
    console.log("Price  : "+ price);
    console.log("Quantity  : "+ qty);
    console.log("Total Amount  : " + total);
}
*/

// Default Parameters
function getTotal(price:number,  qty:number = 1) : void
{
    let total:number = 0;
    total = price * qty; 

    //console.log("Price  : "+ price + ", Quantity  : "+ qty + ", Total Amount  : " + total);

    // String Templtes
    console.log(`Price  : ${price}, Quantity  : ${qty}, Total Amount  : ${total}`);
}



function sum(...ar:number[])
{
    var s:number = 0;

    // let -- block scope variable
    for(let i:number = 0; i < ar.length; i++)
    {
        s  = s + ar[i];        
    }

    // console.log("Value of i : "  + i);
    console.log("Sum Result  : "  + s);
}



//---------------------------------------------------------
// Function calls
greeting("Smith");
greeting("Sandy");
console.log("---------------------------------------------------------");

let n:number = add(10,20);
console.log("Add Result: " + n);

n = add(50,120);
console.log("Add Result: " + n);
console.log("---------------------------------------------------------");

getTotal(2500,3);
getTotal(1500);

console.log("---------------------------------------------------------");


sum(10);
sum(10, 20, 30);
sum(10, 20, 40, 50, 60, 70);
sum(10, 20);
sum(10, 20, 30, 40, 50, 60, 70, 80, 90);

