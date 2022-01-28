import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.scss']
})
export class ViewChildComponent implements OnInit {

  constructor() { }
  @Input()
  name=""
  ngOnInit(): void {
  }

}
