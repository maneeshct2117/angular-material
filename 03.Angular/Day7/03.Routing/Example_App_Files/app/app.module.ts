import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule}  from "@angular/forms";
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EmpsComponent } from './emps/emps.component';
import { DeptsComponent } from './depts/depts.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [ AppComponent, HomeComponent, EmpsComponent, DeptsComponent, AboutusComponent, LoginComponent, DetailsComponent ],
  imports: [ BrowserModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
