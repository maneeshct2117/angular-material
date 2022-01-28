// Compile Option
// tsc Demo5.ts  -t es5

class Employee
{
    private empno:number = 0;
    private ename:string  = "";

    // getter and setter methods

    public get EmployeeId():number
    {
        // console.log("get Employee Id property");
        return this.empno;
    }

    public set EmployeeId(value:number)
    {
        // console.log("set Employee Id property");
        this.empno = value;
    }

    public get EmployeeName():string
    {
        return this.ename;
    }

    public set EmployeeName(value:string)
    {
        this.ename = value;
    }

}


let empObj:Employee = new Employee();

empObj.EmployeeId = 16545;  // set
empObj.EmployeeName = "Scott"; //set 
console.log("Employee Id: " + empObj.EmployeeId);  // get
console.log("Employee Name: " + empObj.EmployeeName) ;  // get

 

