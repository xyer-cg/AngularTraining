import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-search-employee',
  templateUrl: './search-employee.component.html',
  styleUrls: ['./search-employee.component.css']
})
export class SearchEmployeeComponent implements OnInit
{
  salary: number;
  employees: Employee[];

  constructor (private employeeService: EmployeeService) { }

  ngOnInit ()
  {
    this.salary = 0;
  }

  private searchEmployees ()
  {
    this.employeeService.getEmployeeBySalary (this.salary).subscribe (employees => this.employees = employees);
  }

  onSubmit ()
  {
    this.searchEmployees();
  }
}
