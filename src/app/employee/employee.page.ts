import { Component, OnInit } from '@angular/core';
import { Employee } from './employee.model';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.page.html',
  styleUrls: ['./employee.page.scss'],
})
export class EmployeePage implements OnInit {
  employees: Employee[];
  constructor(private empService: EmployeeService) { }

  ngOnInit() {
    this.employees = this.empService.getAllEmployees();
  }

}
