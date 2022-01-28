class Employee
{
    public empno:number = 0;
    public ename:string  = "";

    constructor(empno:number = 0, ename:string = "", public job:string = "")
    {
        this.empno = empno;
        this.ename = ename; 
    }

    public showDetails():void
    {
        console.log("Employee Number : " + this.empno);
        console.log("Employee Name : " + this.ename);
        console.log("Employee Job : " + this.job);
    }    
}


let e1:Employee = new Employee(6546564, "Sam", "Manager"); 
e1.showDetails();

 
 

