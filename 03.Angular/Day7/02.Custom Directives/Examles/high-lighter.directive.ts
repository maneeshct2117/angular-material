import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighLighter]'
})
export class HighLighterDirective implements OnInit{

  @Input() appHighLighter:string ="";

  constructor(private element:ElementRef) {
  }


  ngOnInit(): void {

    if (this.appHighLighter == "")
    {
      this.appHighLighter = "White";   // this is the default value
    }

    this.element.nativeElement.style.backgroundColor = this.appHighLighter;
  }


}
