import { Component, OnInit } from '@angular/core';
import { Employees } from '../common_storage/employees.model';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {

  employees: Employees[] = [
    new Employees("Naveen", 45632),
    new Employees("Another Naveen", 45623),
    new Employees("New Naveen", 45263),
    new Employees("Old Naveen", 54623),
    new Employees("Space Naveen", 65342),
    new Employees("Ground Naveen", 23546),
    new Employees("Another Naveen", 45623),
    new Employees("New Naveen", 45263),
    new Employees("Old Naveen", 54623),
    new Employees("Space Naveen", 65342),
    new Employees("Ground Naveen", 23546)
  ];

  // public getBackColor(employee) {
  //   return (this.employees.indexOf(employee)+1) % 2 == 0 ? "green" : "white"; 
  // }

  // public getForeColor(employee) {
  //   return (this.employees.indexOf(employee)+1) % 2 == 0 ? "white" : "black";
  // }

  public addRandomEmployee() {
    this.employees.push(new Employees("gkuuy", 12345))
  }
  constructor() { }

  ngOnInit(): void {
  }

}
