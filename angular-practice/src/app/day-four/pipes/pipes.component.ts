import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/Employee';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {

  key =""
  value =""
  constructor() { }
  employees: Employee[] = [
    { id: 1, name: "Ramesh", gender: "M", email: "ramesh@gmail.com", deptName: "Development", salary: 1000, joinDate: new Date() },
    { id: 2, name: "Stephen", gender: "M", email: "stephen@gmail.com", deptName: "Development", salary: 2000, joinDate: new Date() },
    { id: 3, name: "John", gender: "M", email: "john@gmail.com", deptName: "Management", salary: 5000, joinDate: new Date() },
    { id: 4, name: "Steward", gender: "M", email: "steward@gmail.com", deptName: "Development", salary: 3000, joinDate: new Date() },
    { id: 5, name: "Josheph", gender: "M", email: "josheph@gmail.com", deptName: "testing", salary: 4000, joinDate: new Date() },
    { id: 6, name: "Smith", gender: "M", email: "smith@gmail.com", deptName: "Development", salary: 5000, joinDate: new Date() },
    { id: 7, name: "Allen", gender: "M", email: "allen@gmail.com", deptName: "Designer", salary: 6000, joinDate: new Date() },
    { id: 8, name: "Kiran", gender: "F", email: "kiran@gmail.com", deptName: "Development", salary: 5000, joinDate: new Date() },
    { id: 9, name: "Turner", gender: "M", email: "turner@gmail.com", deptName: "Developent", salary: 6000, joinDate: new Date() },
    { id: 10, name: "Stephen", gender: "M", email: "stepehn@gmail.com", deptName: "Development", salary: 7000, joinDate: new Date() },
    { id: 11, name: "Ramesh", gender: "M", email: "ramesh@gmail.com", deptName: "Development", salary: 1000, joinDate: new Date() },
    { id: 12, name: "Stephen", gender: "M", email: "stephen@gmail.com", deptName: "Development", salary: 2000, joinDate: new Date() },
    { id: 13, name: "John", gender: "M", email: "john@gmail.com", deptName: "Management", salary: 5000, joinDate: new Date() },
    { id: 14, name: "Steward", gender: "M", email: "steward@gmail.com", deptName: "Development", salary: 3000, joinDate: new Date() },
    { id: 15, name: "Josheph", gender: "M", email: "josheph@gmail.com", deptName: "testing", salary: 4000, joinDate: new Date() },
    { id: 16, name: "Smith", gender: "M", email: "smith@gmail.com", deptName: "Development", salary: 5000, joinDate: new Date() },
    { id: 17, name: "Allen", gender: "M", email: "allen@gmail.com", deptName: "Designer", salary: 6000, joinDate: new Date() },
    { id: 18, name: "Kiran", gender: "F", email: "kiran@gmail.com", deptName: "Development", salary: 5000, joinDate: new Date() },
    { id: 19, name: "Turner", gender: "M", email: "turner@gmail.com", deptName: "Developent", salary: 6000, joinDate: new Date() },
    { id: 20, name: "Stephen", gender: "M", email: "stepehn@gmail.com", deptName: "Development", salary: 7000, joinDate: new Date() },

  ]
  ngOnInit(): void {
  }

}
