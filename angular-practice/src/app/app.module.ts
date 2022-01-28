import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DayFiveModule } from './day-five/day-five.module';
import { DayFourModule } from './day-four/day-four.module';
import { DayOneModule } from './day-one/day-one.module';
import { DayThreeModule } from './day-three/day-three.module';
import { DayTwoModule } from './day-two/day-two.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, 
    DayOneModule,
    DayTwoModule,
    DayThreeModule,
    DayFourModule,
    DayFiveModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
