import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentProjectionChild } from './content-projection-child/content-projection-child.ts.component';
import { ContentProjectionParentComponent } from './content-projection-parent/content-projection-parent.component';
import { FormsModule } from '@angular/forms';
import { ViewParentComponent } from './view-parent/view-parent.component';
import { ViewChildComponent } from './view-child/view-child.component';



@NgModule({
  declarations: [
    ContentProjectionChild,
    ContentProjectionParentComponent,
    ViewParentComponent,
    ViewChildComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [ContentProjectionChild, ContentProjectionParentComponent,ViewParentComponent,
    ViewChildComponent]
})
export class DayThreeModule { }
