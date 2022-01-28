import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DeptsComponent } from './depts/depts.component';
import { CitiesComponent } from './cities/cities.component';
import { DemoComponent } from './demo/demo.component';
import { AdminModule } from './admin/admin.module';
import { DeptListComponent } from './dept-list/dept-list.component';
import { DeptDetailsComponent } from './dept-details/dept-details.component';
import { FilterOptionsComponent } from './filter-options/filter-options.component';
import { HooksdemoComponent } from './hooksdemo/hooksdemo.component';
import { GenderPipe } from './gender.pipe';
import { FilterPipe } from './filter.pipe';
import { DbService } from './db-service.service';
import { CustomersComponent } from './customers/customers.component';
import { CustomHttpInterceptor } from './custom-http-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DeptsComponent,
    CitiesComponent,
    DemoComponent,
    DeptListComponent,
    DeptDetailsComponent,
    FilterOptionsComponent,
    HooksdemoComponent,
    GenderPipe,
    FilterPipe,
    CustomersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AdminModule,
    HttpClientModule
  ],
  providers: [
    { provide : HTTP_INTERCEPTORS, useClass: CustomHttpInterceptor, multi:true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
