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
  minSalary: number;
  maxSalary: number;
  employees: Employee[];

  constructor (private employeeService: EmployeeService) { }

  ngOnInit ()
  {
    this.minSalary = -1;
    this.maxSalary = -1;
  }

  private searchEmployees ()
  {
    this.employeeService.getEmployeeBySalary (this.minSalary, this.maxSalary).subscribe (employees => this.employees = employees);
  }

  onSubmit ()
  {
    this.searchEmployees();
  }
}
