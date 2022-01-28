import { Component  } from '@angular/core';


@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent
{
    adminFlag:boolean = true;

    showHide_click()
    {
        this.adminFlag =  !this.adminFlag;
    }
}
