import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent
{
    uid:string  = "admin";
    pwd:string  = "admin123";
    result:string  = "";

    constructor(private router: Router, private route:ActivatedRoute) { }

    loginButton_click()
    {

     let requestedRouteUrl =  this.route.snapshot.queryParams["returnUrl"];

      if(requestedRouteUrl == null)
      {
        requestedRouteUrl = "/" ;
      }

      if(this.uid == "admin"  &&  this.pwd  == "admin123")
      {
        const hardcodedToken = '1d38d128-0671-4121-8084-f6332a992a40';
        sessionStorage.setItem("AUTH_TOKEN",  hardcodedToken);
        this.router.navigate([requestedRouteUrl]);
      }
      else
      {
        this.result = "Invalid user id or password";
      }
    }
}
