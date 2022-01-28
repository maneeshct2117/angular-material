import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent
{
  public userObj1:any = {uname:"Scott", gender: "M"};
  public userObj2:any = {uname:"Nancy", gender: "F"};

  public usersArray:any[]  =
  [
    {uname  :  "Smith",  gender:  "M"},
    {uname  :  "Scott",  gender:  "m"},
    {uname  :  "Nancy",  gender:  "F"},
    {uname  :  "Ruth",  gender:  "f"},
  ];


}
