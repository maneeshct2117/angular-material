import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrudOperationsComponent } from './crud-operations/crud-operations.component';
import { FormsModule } from '@angular/forms';
import { ParentChildComponent } from './parent-child/parent-child.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { Parent1Component } from './parent1/parent1.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';



@NgModule({
  declarations: [
    CrudOperationsComponent,
    ParentChildComponent,
    ParentComponent,
    ChildComponent,
    Parent1Component,
    Child1Component,
    Child2Component
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [CrudOperationsComponent,
    ParentChildComponent,
    ParentComponent,
    ChildComponent,
    Parent1Component,
    Child1Component,
    Child2Component
  ]
})
export class DayTwoModule { }
