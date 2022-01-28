import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AuthGuardService } from './auth-guard.service';
import { DeactivateGuardService } from './deactivate-guard.service';
import { DeptsComponent } from './depts/depts.component';
import { DetailsComponent } from './details/details.component';
import { EmpsComponent } from './emps/emps.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

// Step1: Configure the Routes
const routes: Routes = [
  { path : "", component : HomeComponent},
  { path : "Emps", component : EmpsComponent, canActivate : [AuthGuardService]},
  { path : "Depts", component : DeptsComponent, canActivate : [AuthGuardService]},
  { path : "Aboutus", component : AboutusComponent},
  { path : "Login", component : LoginComponent},
  { path : "Register", component : RegisterComponent, canDeactivate : [DeactivateGuardService]},
  { path : "Details/:id", component : DetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],    // Step2: Register the routes
  exports: [RouterModule]
})
export class AppRoutingModule { }
