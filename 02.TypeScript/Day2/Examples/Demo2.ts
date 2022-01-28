// Class creation in TypeScript
class Employee
{
    public empno:number = 0;
    public ename:string  = "";

    public showDetails():void
    {
        console.log("Employee Number : " + this.empno);
        console.log("Employee Name : " + this.ename);
    }    
}


let empObj:Employee = new Employee();
empObj.empno = 54654654;
empObj.ename = "Scott";
empObj.showDetails();


// console.log(empObj.empno);
// console.log(empObj.ename);



 

