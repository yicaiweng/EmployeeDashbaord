import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEmployee } from 'src/app/models/employee.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  addEmployeeReq: IEmployee = {
    id: '',
    name: '',
    email: '',
    phone: 0,
    salary: 0,
    department: ''
  };

constructor(private http: HttpClient) { }

addEmployee(emp: any) {
  let employees = [];
  console.log(localStorage.getItem('Employees'))
  if(localStorage.getItem('Employees')) {
    employees = JSON.parse(localStorage.getItem('Employees') || '{}');
    employees = [emp, ...employees];
  } else {
    employees = [emp]
  }
  localStorage.setItem('Employees', JSON.stringify(employees));
}

  getEmployee(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>('http://localhost:5039/api/employee')
  }

  addEmployeestoDB(addEmployeeReq: IEmployee): Observable<IEmployee> {
    console.log(addEmployeeReq);
    return this.http.post<IEmployee>('http://localhost:5039/api/employee', addEmployeeReq);
  }
}
