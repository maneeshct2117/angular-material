import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-emps',
  templateUrl: './emps.component.html',
  styleUrls: ['./emps.component.css']
})
export class EmpsComponent  implements OnInit {

  public emps:any[]  = [];

  // constructor(private dataService: DataService) { }

  constructor(private route: ActivatedRoute, private dataService: DataService) { }

ngOnInit() {

   this.emps=this.route.snapshot.data['empsData'];

  /*
  this.dataService.getData().subscribe((response:any[]) => {
    this.emps = response;
  });
  */

}





}

