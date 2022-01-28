import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubscribeExampleComponent } from './subscribe-example/subscribe-example.component';
import { SubscribeExampleTwoComponent } from './subscribe-example-two/subscribe-example-two.component';



@NgModule({
  declarations: [
    SubscribeExampleComponent,
    SubscribeExampleTwoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [SubscribeExampleComponent, SubscribeExampleTwoComponent]
})
export class DayFiveModule { }
