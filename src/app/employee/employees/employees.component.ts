import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../employee.model';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
})
export class EmployeesComponent implements OnInit {
  @Input() employeeList: Employee;
  constructor() { }

  ngOnInit() {}

}
