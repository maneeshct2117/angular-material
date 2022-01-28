import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.scss']
})
export class FirstComponentComponent implements OnInit {

  selectedId:string=""
  countries:string[]=["India","USA"]

  constructor() { }

  ngOnInit(): void {
  }

}
