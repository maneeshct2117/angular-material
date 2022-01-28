import { Component, OnInit } from '@angular/core';
import { Details } from '../models/details';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  constructor() { }
  details: Details[] = [
    { id: 1, name: "maneesh" },
    { id: 2, name: "dsada" },

    { id: 3, name: "dsadsa" }

  ]
  ngOnInit(): void {
  }
  remove_parent(id: any) {
    alert(id)
  }

}
