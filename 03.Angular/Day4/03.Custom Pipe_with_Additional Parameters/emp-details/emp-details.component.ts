import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-emp-details',
  templateUrl: './emp-details.component.html',
  styleUrls: ['./emp-details.component.css']
})
export class EmpDetailsComponent   {

  strFilterValue:any  = '';
  strFilterProp:string  = '';

  key:string = "";
  value:string = "";

    public empData:any[] = [
      {"empno":6589,"ename":"SRIRAM","job":"MANAGER","sal":3200,"deptno":30},
      {"empno":6369,"ename":"SMITH","job":"CLERK","sal":800,"deptno":20},
      {"empno":6499,"ename":"ALLEN","job":"SALESMAN","sal":1600,"deptno":30},
      {"empno":6521,"ename":"WARD","job":"ANALYST","sal":1250,"deptno":30},
      {"empno":6566,"ename":"JONES","job":"MANAGER","sal":2975,"deptno":20},
      {"empno":7654,"ename":"MARTIN","job":"SALESMAN","sal":1250,"deptno":30},
      {"empno":7698,"ename":"BLAKE","job":"MANAGER","sal":2850,"deptno":30},
      {"empno":7782,"ename":"CLARK","job":"MANAGER","sal":2450,"deptno":10},
      {"empno":7839,"ename":"KING","job":"PRESIDENT","sal":5000,"deptno":10},
      {"empno":7844,"ename":"TURNER","job":"SALESMAN","sal":1500,"deptno":30},
      {"empno":7876,"ename":"ADAMS","job":"CLERK","sal":1100,"deptno":20},
      {"empno":8900,"ename":"JAMES","job":"CLERK","sal":950,"deptno":30},
      {"empno":8902,"ename":"FORD","job":"ANALYST","sal":3000,"deptno":20},
      {"empno":8545,"ename":"KIRAN","job":"MANAGER","sal":5890,"deptno":10},
      {"empno":8844,"ename":"TURNER","job":"SALESMAN","sal":1500,"deptno":30},
      {"empno":8876,"ename":"ADAMS","job":"CLERK","sal":1100,"deptno":20},
      {"empno":9900,"ename":"JAMES","job":"CLERK","sal":950,"deptno":30},
      {"empno":9902,"ename":"FORD","job":"ANALYST","sal":3000,"deptno":20},
      {"empno":9545,"ename":"KIRAN","job":"MANAGER","sal":5890,"deptno":10},
      {"empno":9589,"ename":"SRIRAM","job":"MANAGER","sal":3200,"deptno":30},
      {"empno":9369,"ename":"SMITH","job":"CLERK","sal":800,"deptno":20},
      {"empno":9499,"ename":"ALLEN","job":"SALESMAN","sal":1600,"deptno":30},
      ];

     tempArray:any[] = [];

    constructor()
    {
        this.tempArray = this.empData;
    }


    getData_click()
    {
      this.key = this.strFilterProp;
      this.value = this.strFilterValue;
    }


    /*
        getData_click()
        {
            let key:string  = this.strFilterProp;
            let value:string  = this.strFilterValue;
           this.tempArray = this.empData.filter( x => x[key] == value );

            // this.tempArray = this.empData.filter( x => x.job == "CLERK" );
            // this.tempArray = this.empData.filter( x => x.job == "MANAGER" );
            // this.tempArray = this.empData.filter( x => x.deptno == 10 );
          //  this.tempArray = this.empData.filter( x => x.deptno == 20 );
        }
    */
  }
