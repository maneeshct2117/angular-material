import  CustomStack  from './Demo11_Generics';
import Employee, {Dept}  from './Demo13_EmpsDept';


let d1:Dept = new  Dept(); 
let  e1:Employee = new Employee();


let stackObj:CustomStack<number> = new CustomStack<number>();
stackObj.push(10);
stackObj.push(20);
stackObj.push(30);
console.log("After push : " + stackObj.getAllItem());


console.log("Popped Item : " +  stackObj.pop());
console.log("Popped Item : " +  stackObj.pop());
console.log("Popped Item : " +  stackObj.pop());
console.log("After pop : " + stackObj.getAllItem());


console.log("---------------------");

let cityStack:CustomStack<string> =  new  CustomStack<string>();

cityStack.push("Hyd");
cityStack.push("Chennai");
cityStack.push("Pune");
console.log("After push : " + cityStack.getAllItem());


console.log("Popped Item : " +  cityStack.pop());
console.log("Popped Item : " +  cityStack.pop());
console.log("Popped Item : " +  cityStack.pop());
console.log("After pop : " + cityStack.getAllItem());