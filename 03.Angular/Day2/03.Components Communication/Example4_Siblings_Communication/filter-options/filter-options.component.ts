import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter-options',
  templateUrl: './filter-options.component.html',
  styleUrls: ['./filter-options.component.css']
})
export class FilterOptionsComponent
{
 @Output()
 onLocationChanged:EventEmitter<string> = new   EventEmitter();

  strFilterLocation:string  = "";

  updateLocation()
  {
    this.onLocationChanged.emit(this.strFilterLocation);
  }

}

