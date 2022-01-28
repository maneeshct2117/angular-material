import { Component, ViewChild, ViewChildren, QueryList, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { DeptDetailsComponent } from '../dept-details/dept-details.component';
import { Dept } from '../models/dept';

@Component({
  selector: 'app-dept-list',
  templateUrl: './dept-list.component.html',
  styleUrls: ['./dept-list.component.css']
})
export class DeptListComponent  implements AfterViewInit
{
  @ViewChild(DeptDetailsComponent)
  deptChild!: DeptDetailsComponent;

  @ViewChildren(DeptDetailsComponent)
  deptChildren!: QueryList<DeptDetailsComponent>;

  @ViewChild('p1')
  paraRef!: ElementRef;

  deptsArray:Dept[] =
  [
    {deptno : 10, dname : "Accounts",  loc :  "Hyd"} ,
    {deptno : 20, dname : "Sales",  loc :  "Pune"},
    {deptno : 30, dname : "Marketing",  loc :  "Hyd"},
    {deptno : 40, dname : "Operations",  loc :  "Chnnai"},
    {deptno : 50, dname : "Admin",  loc :  "Pune"},
    {deptno : 60, dname : "Finance",  loc :  "Hyd"}
  ];

 
  ngAfterViewInit(): void {
    console.log("-------- View Child ------------");
    console.log(this.deptChild.deptObj.dname);


    // console.log(this.deptChildren.toArray());
    console.log("-------- View Children ------------");
    for(let item of this.deptChildren.toArray())
    {
      // console.log(item);
      console.log(item.deptObj.dname);
    }

    console.log("-------- Access HTML Element ------------");
    // console.log(this.paraRef.nativeElement);
    console.log(this.paraRef.nativeElement.innerText);
    this.paraRef.nativeElement.style.color  = "Red";
  }

  deptRemove_parent(dno:number)
  {
    // alert("Message in parent : " + dno);
    let index  = this.deptsArray.findIndex(item => item.deptno == dno);
    this.deptsArray.splice(index, 1);
  }


  getChildData_click()
  {
   // console.log(this.deptChild);
   // console.log(this.deptChild.deptObj);
   console.log("-------- View Child ------------");
    console.log(this.deptChild.deptObj.dname);


    // console.log(this.deptChildren.toArray());
    console.log("-------- View Children ------------");
    for(let item of this.deptChildren.toArray())
    {
      // console.log(item);
      console.log(item.deptObj.dname);
    }


  }

}
