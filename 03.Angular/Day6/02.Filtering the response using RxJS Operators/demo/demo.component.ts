import { Component, OnInit } from '@angular/core';
import { DbService } from '../db-service.service';
import { Dept } from '../models/dept';


@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit
{
    deptno: number = 0;
    dname  :string  = "";
    loc  :string  = "";
    isDeptnoDisabled = false;
    deptsArray:Dept[]  = [];


    constructor(private dbService: DbService) {
     }


     ngOnInit()  {
         this.getDepts_click();
     }


    getDepts_click()
    {
       this.dbService.getAllDepartments().subscribe( (response:Dept[]) =>
       {
            this.deptsArray = response;
       });
    }


    addDept_click()
    {
        let deptObj:Dept = new Dept();
        deptObj.deptno = this.deptno;
        deptObj.dname = this.dname;
        deptObj.loc = this.loc;
        this.clearFields();

        this.dbService.createDept(deptObj).subscribe( (response:any) =>{
          console.log("New Dept details are added to server.");
          alert("New Dept details are added to server.");
          this.clearFields();
          this.getDepts_click();
        });
    }

    deleteDept_click(dno:number)
    {
      let isDelete:boolean = confirm("Are you sure you want to delete this dept?");

      if(isDelete == true)
      {
        this.dbService.deleteDept(dno).subscribe( (response:any) =>{
          console.log("Requested Dept details are deleted from  server.");
          alert("Requested Dept details are deleted from  server.");
          this.getDepts_click();  // to get all the updated results
        });
      }
    }

    selectDept_click(dno:number)
    {
      this.dbService.getDeptById(dno).subscribe( (response:Dept) =>{
        let deptObj:Dept = response;
        this.deptno =   deptObj.deptno;
        this.dname  =   deptObj.dname;
        this.loc    =   deptObj.loc;
        this.isDeptnoDisabled = true;
      });


    }

    updateDept_click()
    {
      let deptObj:Dept = new Dept();
      deptObj.deptno = this.deptno;
      deptObj.dname = this.dname;
      deptObj.loc = this.loc;


      this.dbService.updateDept(deptObj).subscribe( (response:any) =>{
        console.log("Requested Dept details are updated to server.");
        alert("Requested Dept details are updated to server.");
        this.clearFields();
        this.getDepts_click();
      });
    }

    clearFields()
    {
        this.isDeptnoDisabled = false;
        this.deptno = 0;
        this.dname  = "";
        this.loc  = "";
     }


     getDeptsByLoc_click()
     {
      this.dbService.getDeptsByLoc("Chennai").subscribe( (response:Dept[]) =>
      {
        console.log(response);
      });
     }

     getDeptNames_click()
     {
      this.dbService.getDeptNames().subscribe( (response:string[]) =>
      {
        console.log(response);
      });
     }

     getNameAndLoc_click()
     {
      this.dbService.getDeptNameAndLoc().subscribe( (response:any[]) =>
      {
        console.log(response);
      });
     }
}


