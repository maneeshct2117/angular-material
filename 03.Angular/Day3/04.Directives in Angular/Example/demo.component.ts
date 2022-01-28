import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent   {

  public mode:string = "List";

  // public  students:any[] = [];
  public  students:any[] = [
     {sname  :  "Scott", course : "Angular"},
     {sname  :  "Smith", course : "HTML5"},
     {sname  :  "Smith", course : "React JS"},
     {sname  :  "James", course : "Angular"},
     {sname  :  "Adam", course : "Java Script"},
     {sname  :  "Sathya", course : "React JS"},
     {sname  :  "Mark", course : "Angular"},
     {sname  :  "Peter", course : "HTML5"},
     {sname  :  "Maneesh", course : "React JS"},
     {sname  :  "Ramesh", course : "Angular"},
     {sname  :  "Vinush", course : "Java Script"},
     {sname  :  "Haneesh", course : "React JS"}
      ];
}

