import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  uname1:string = "Narasimha";
  uname2:string = "Ravi Teja";

  userNames:string[] =  ["Scott", "Smith", "John", "Stephen", "Peter"];
}
