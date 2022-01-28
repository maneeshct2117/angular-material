import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  selectedLoc:string  = "";

  updateLocation_parent(strLocation:string)
  {
      this.selectedLoc = strLocation;;
  }

}
