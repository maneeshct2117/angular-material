import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent
{
    cityArray:string[] = ["Chennai", "Hyd", "Pune", "Mumbai", "Goa"];
}
