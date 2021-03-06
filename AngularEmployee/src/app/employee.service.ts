import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class EmployeeService
{
  private baseUrl = 'http://localhost:9100/emp';

  constructor (private http: HttpClient) { };

  createEmployee (employee: Object): Observable<Object>
  {
    return this.http.post(`${this.baseUrl}`, employee);
  }

  deleteEmployee (id: number): Observable<any>
  {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getEmployeeBySalary (minSalary: number, maxSalary: number): Observable <any>
  {
    if (maxSalary >= 0)
    {
      return this.http.get (`${this.baseUrl}/salary/${minSalary}/${maxSalary}`);
    }

    return this.http.get (`${this.baseUrl}/salary/${minSalary}`);
  }

  getEmployeeList (): Observable<any>
  {
    return this.http.get(`${this.baseUrl}`);
  }
}