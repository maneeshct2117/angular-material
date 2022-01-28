export let age : number = 20;

export function getData():string
{
    return "Hello World";
}

export class Employee {
    empCode: number;
    empName: string;
    constructor(name: string="", code: number=0) {
        this.empName = name;
        this.empCode = code;
    }
    displayEmployee() {
        console.log ("Employee Code: " + this.empCode + ", Employee Name: " + this.empName );
    }
}

let companyName:string = "XYZ";

//export default Employee;