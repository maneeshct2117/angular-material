import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { DbService } from '../db-service.service';

@Component({
  selector: 'app-emp-details',
  templateUrl: './emp-details.component.html',
  styleUrls: ['./emp-details.component.css'],
  providers: [DbService]
})
export class EmpDetailsComponent   {

    empData:any[] = [];

    constructor(private dbService:DbService)
    {

    }

    ngOnInit() : void
    {
       this.empData = this.dbService.getEmpData();
    }


    getData_click()
    {
      this.empData = this.dbService.getEmpData();
    }

  }
