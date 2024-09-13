import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import Employee from '../types/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
apiUrl = 'http://localhost:8001';
httpClient = inject(HttpClient);

  constructor() { }

  getemployees(){
    this.httpClient.get<Employee[]>(this.apiUrl+'/employees')
  }
}
