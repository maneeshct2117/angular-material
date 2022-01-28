import { Component, OnInit } from '@angular/core';
import { DbService } from '../db-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent
{
    uid:string  = "";
    pwd:string  = "";
    result:string  = "";
    isButtonDisabled:boolean = false;
    count:number = 0;

    constructor(private dbService: DbService) {
    }

    loginButton_click()
    {
      this.dbService.getTokenForValidUser(this.uid, this.pwd)
        .subscribe(
        (response:any) => {
              console.log(response.accessToken);
        });
    }
}
