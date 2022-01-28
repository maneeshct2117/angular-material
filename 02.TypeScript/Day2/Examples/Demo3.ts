class Employee
{
    public empno:number = 0;
    public ename:string  = "";

    constructor(empno:number = 0, ename:string = "")
    {
        this.empno = empno;
        this.ename = ename;
    }

    public showDetails():void
    {
        console.log("Employee Number : " + this.empno);
        console.log("Employee Name : " + this.ename);
    }    
}


let e1:Employee = new Employee();
let e2:Employee = new Employee(10256);
let e3:Employee = new Employee(654656, "Sam");
 
e1.showDetails();
e2.showDetails();
e3.showDetails();

 
 

