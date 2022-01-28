import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesComponent } from './pipes/pipes.component';
import { GenderPipe } from './gender.pipe';
import { EmployeefiterPipe } from './employeefiter.pipe';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PipesComponent,
    GenderPipe,
    EmployeefiterPipe
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[PipesComponent,
    ]
})
export class DayFourModule { }
