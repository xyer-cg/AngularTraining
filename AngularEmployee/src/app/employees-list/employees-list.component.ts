import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit
{
  employees: Observable<Employee[]>;

  constructor (private employeeService: EmployeeService) { }

  ngOnInit ()
  {
    this.reloadData();
  }

  reloadData ()
  {
    this.employees = this.employeeService.getEmployeeList();
  }
}
