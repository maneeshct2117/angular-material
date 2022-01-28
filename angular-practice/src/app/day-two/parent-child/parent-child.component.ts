import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-child',
  templateUrl: './parent-child.component.html',
  styleUrls: ['./parent-child.component.scss']
})
export class ParentChildComponent implements OnInit {

  @Input()
  greet:string = ""
  constructor() { }

  ngOnInit(): void {
  }

}
