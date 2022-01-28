import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Dept } from '../models/dept';

@Component({
  selector: 'app-dept-details',
  templateUrl: './dept-details.component.html',
  styleUrls: ['./dept-details.component.css']
})
export class DeptDetailsComponent
{
    // deptObj:Dept =  {deptno : 10, dname : "Accounts",  loc :  "Hyd"} ;
    @Input()
    deptObj:Dept = new  Dept();

    @Output()
    onDeptRemoved:EventEmitter<number> = new EventEmitter();


    deptRemove_child()
    {
      this.onDeptRemoved.emit(this.deptObj.deptno);
    }
}
