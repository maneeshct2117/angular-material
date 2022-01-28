import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { ProjectsComponent } from '../projects/projects.component';
import { BranchesComponent } from '../branches/branches.component';
import { AdminhomeComponent } from '../adminhome/adminhome.component';


@NgModule({
  declarations: [
    AdminComponent,
    ProjectsComponent,
    BranchesComponent,
    AdminhomeComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
