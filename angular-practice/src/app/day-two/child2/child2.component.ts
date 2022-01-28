import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Locations } from '../models/Locations';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.scss']
})
export class Child2Component implements OnInit, OnChanges {

  @Input()
  loc: string = ""

  filteredArray: Locations[] = []
  location: Locations[] = [
    { region: "North", state: "Uttrakhand" },
    { region: "North", state: "Himachal Pradesh" },
    { region: "North", state: "Delhi" },

    { region: "West", state: "Gujarat" },
    { region: "North", state: "Rajasthan" },

    { region: "East", state: "Manipur" },
    { region: "East", state: "West Bengal" },

    { region: "South", state: "Kerala" },
    { region: "East", state: "Tamil Nadu" }


  ]
  constructor() { }

  ngOnInit(): void {
    this.filteredArray = this.location
  }

  ngOnChanges() {
    this.filteredArray = this.location.filter(x => x.region == this.loc)
  }

}
