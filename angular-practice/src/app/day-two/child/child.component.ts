import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Details } from '../models/details';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Input()
  detail: Details = new Details()

  @Output()
  onRemove: EventEmitter<number> = new EventEmitter()
  constructor() { }


  ngOnInit(): void {
  }
  delete() {
    this.onRemove.emit(this.detail.id)
  }

}
