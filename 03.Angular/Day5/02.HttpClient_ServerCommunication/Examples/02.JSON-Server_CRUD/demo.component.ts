import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
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
    url:string  = "http://localhost:3000/depts";


    constructor(private httpObj: HttpClient) {

     }


     ngOnInit()  {
          this.getDepts_click();
     }


    getDepts_click()
    {
      this.httpObj.get(this.url).subscribe( (response:any) =>{
        // console.log(response);
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

        this.httpObj.post(this.url, deptObj).subscribe( (response:any) =>{
          console.log("New Dept details are added to server.");
          alert("New Dept details are added to server.");
          this.clearFields();
          this.getDepts_click();
        });
    }

    deleteDept_click(dno:number)
    {
      // `${this.url}/${dno}`
      //  this.url + "/" + dno
      this.httpObj.delete(this.url + "/" + dno).subscribe( (response:any) =>{
        console.log("Requested Dept details are deleted from  server.");
        alert("Requested Dept details are deleted from  server.");
        this.getDepts_click();  // to get all the updated results
      });
    }

    selectDept_click(dno:number)
    {
      this.httpObj.get(this.url + "/" + dno).subscribe( (response:any) =>{

        let deptObj:any = response;
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


      this.httpObj.put(this.url + "/" + this.deptno, deptObj).subscribe( (response:any) =>{
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


}


