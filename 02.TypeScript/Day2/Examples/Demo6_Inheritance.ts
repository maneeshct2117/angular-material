class Person
{
   public name: string  = "Scott";
   public age: number  = 25;
}

class Employee  extends Person
{
    public empno:number = 546545;
    public job:string  = "Lead";

    constructor(empno:number)
    {
        super();        // invokes the super class constructor.
        this.empno = empno;
    }

    public showDetails():void
    {
        console.log("Employee Number : " + this.empno);
        console.log("Employee Name : " + this.name);
        console.log("Employee Age : " + this.age);
        console.log("Employee Job : " + this.job);
    }    
}


let empObj:Employee = new Employee(465465); 
empObj.showDetails();

 

 

