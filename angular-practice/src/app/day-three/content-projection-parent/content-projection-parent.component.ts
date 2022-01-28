import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-projection-parent',
  templateUrl: './content-projection-parent.component.html',
  styleUrls: ['./content-projection-parent.component.scss']
})
export class ContentProjectionParentComponent implements OnInit {

  selectedId:string=""
  countries:string[]=["India","USA"]

  constructor() { }

  ngOnInit(): void {
  }


}
