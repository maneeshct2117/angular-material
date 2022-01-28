import { Component, OnInit } from '@angular/core';
import { Dept } from '../models/dept';

@Component({
  selector: 'app-depts',
  templateUrl: './depts.component.html',
  styleUrls: ['./depts.component.css']
})
export class DeptsComponent
{

    deptno: number = 0;
    dname  :string  = "";
    loc  :string  = "";
    isDeptnoDisabled = false;

      public deptsArray:Dept[]  = [];


      getDepts_click()
      {
        this.deptsArray =
        [
          {deptno : 10, dname : "Accounts",  loc :  "Hyd"} ,
          {deptno : 20, dname : "Sales",  loc :  "Pune"},
          {deptno : 30, dname : "Marketing",  loc :  "Hyd"},
          {deptno : 40, dname : "Operations",  loc :  "Chnnai"}
        ];

      }


      addDept_click()
      {
          let deptObj:Dept = new Dept();
          deptObj.deptno = this.deptno;
          deptObj.dname = this.dname;
          deptObj.loc = this.loc;
          this.clearFields();

          this.deptsArray.push(deptObj);
      }

      deleteDept_click(dno:number)
      {
        let index:number = this.deptsArray.findIndex(x => x.deptno == dno );
        this.deptsArray.splice(index, 1);
      }

      selectDept_click(dno:number)
      {
         let deptObj:any = this.deptsArray.find(x => x.deptno == dno );
        this.deptno =   deptObj.deptno;
        this.dname  =   deptObj.dname;
        this.loc    =   deptObj.loc;
        this.isDeptnoDisabled = true;
      }

      updateDept_click()
      {
        let index:number = this.deptsArray.findIndex(x => x.deptno == this.deptno );
        this.deptsArray[index].dname = this.dname;
        this.deptsArray[index].loc = this.loc;
        this.clearFields();
      }


      clearFields()
      {
          this.isDeptnoDisabled = false;
          this.deptno = 0;
          this.dname  = "";
          this.loc  = "";
      }


}


