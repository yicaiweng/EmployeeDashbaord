import { Component, OnInit } from '@angular/core';
import { IEmployee } from 'src/app/models/employee.model';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit{
  employees: IEmployee[];

  constructor(private addEmployeeSev: EmployeesService) {}

  ngOnInit(): void {
    this.addEmployeeSev.getEmployee().subscribe(data => {
      this.employees = data;
      console.log(this.employees)
    })
  }

  gotoDetails(e: any) {
    localStorage.setItem('employeeDetail', JSON.stringify(e));
  }
}
