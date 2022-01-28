import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    str:string  ="Scott";


    ngAfterViewInit()
    {
      console.log("ngAfterViewInit : " +  this.getCurrentTime());
    }

    ngAfterViewChecked()
    {
      console.log("ngAfterViewChecked : " +  this.getCurrentTime());
    }

    getCurrentTime():string
    {
      var d = new Date();
      return d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds()  + ":" + d.getMilliseconds();
    }


}
