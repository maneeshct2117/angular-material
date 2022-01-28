import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.scss']
})
export class Child1Component implements OnInit {

  @Output()
  onLocationSelect: EventEmitter<string> = new EventEmitter();
  selectOption=""
  constructor() { }

  ngOnInit(): void {
  }
  updateLocation(){
    this.onLocationSelect.emit(this.selectOption)
  }


}
