//  Create a TypeScript program to implement interface 
interface  IPerson
{	
	fname:string; 
	lname:string; 
	age:number;
	
	showDetails();
}

class  Employee implements IPerson
{
    public empid:number  = 456455;
	public fname:string = "Ravi";
    public lname:string = "Kumar";
    public age:number = 25;
    
    public  showDetails():void
	{
	var str  = `Employee Details :  ${this.empid}, ${this.fname},  ${this.lname},  ${this.age}`;
	console.log(str);
	}
}


var  e1:Employee = new Employee();
e1.showDetails();
 

 