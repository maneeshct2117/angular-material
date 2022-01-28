import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ViewChildComponent } from '../view-child/view-child.component';

@Component({
  selector: 'app-view-parent',
  templateUrl: './view-parent.component.html',
  styleUrls: ['./view-parent.component.scss']
})
export class ViewParentComponent implements OnInit {

  @ViewChild("p1")
  paraRef!: ElementRef

  @ViewChild(ViewChildComponent)
  child!: ViewChildComponent

  @ViewChildren(ViewChildComponent)
  childrenList!: QueryList<ViewChildComponent>
  constructor() { }

  ngOnInit(): void {


  }

  getChildData() {
    this.paraRef.nativeElement.innerText = "dsfsf"

    console.log(this.child)

    console.log(this.childrenList.toArray())
    for (let item of this.childrenList.toArray()) {
      console.log(item.name)
    }

  }


}
