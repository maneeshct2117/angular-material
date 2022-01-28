import { Component, OnInit } from '@angular/core';
import { Details } from '../models/details';

@Component({
  selector: 'app-crud-operations',
  templateUrl: './crud-operations.component.html',
  styleUrls: ['./crud-operations.component.scss']
})
export class CrudOperationsComponent implements OnInit {

  id = 0;
  name = ""
  showDetail: Details[] = []
  detail: Details[] = [
    { id: 1, name: "maneesh" },
    { id: 2, name: "dsada" },

    { id: 3, name: "dsadsa" }

  ]

  constructor() { }

  ngOnInit(): void {
  }
  add() {
    let tempDetail = new Details()
    tempDetail.id = this.id
    tempDetail.name = this.name
    this.detail.push(tempDetail)
    this.clear()

  }
  get() {
    this.showDetail = this.detail
  }
  select(id: number) {
    let tempDetail: any = this.detail.find(x => x.id == id)
    this.id = tempDetail.id
    this.name = tempDetail.name

  }
  update() {
    let tempDetail: any = this.detail.find(x => x.id == this.id)
    let index = this.detail.indexOf(tempDetail)
    this.detail[index].id = this.id
    this.detail[index].name = this.name
  }
  delete(id: number) {
    let index = this.detail.findIndex(x => x.id == id)
    this.detail.splice(index, 1)
    this.get()
  }
  clear() {
    this.id = 0
    this.name = ""
  }

}
