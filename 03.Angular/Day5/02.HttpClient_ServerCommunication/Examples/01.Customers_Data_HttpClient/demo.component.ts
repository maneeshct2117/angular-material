import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent
{

  customersArray:any[] = [];

  constructor(private httpObj:HttpClient)
  {

  }

  getData_click()
  {
      let url = "https://www.w3schools.com/angular/customers.php";

      let source:Observable<any> =  this.httpObj.get(url);

      source.subscribe((result:any) =>  {
          this.customersArray = result.records;
        // console.log(result.records);
      });

  }
}





