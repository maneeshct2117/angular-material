import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstComponentComponent } from './first-component/first-component.component';
import { FormsModule } from '@angular/forms';
import { DataBindingComponent } from './data-binding/data-binding.component';



@NgModule({
  declarations: [
    FirstComponentComponent,
    DataBindingComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    FirstComponentComponent,
    DataBindingComponent
  ]
})
export class DayOneModule { }
