import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminhomeComponent } from '../adminhome/adminhome.component';
import { BranchesComponent } from '../branches/branches.component';
import { ProjectsComponent } from '../projects/projects.component';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  { path: '', component: AdminComponent,
  children: [
      { path: '', component: AdminhomeComponent, pathMatch : "full"},
      { path: 'projects', component: ProjectsComponent },
      { path: 'branches', component: BranchesComponent },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
