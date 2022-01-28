import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent   {

  public sid:number  = 4654565;
  public sname:string  =  "narasimha RAO";
  public email:string  =  "tnRao.Trainer@Gmail.com";
  public course:string  =  "angUlAr";
  public fee:number  =   5000;
  // public joinDate:Date  =   new Date("10/23/2020");
  public joinDate:Date  =   new Date(2020, 9, 15);
  // public joinDate:Date  =   new Date();
}

