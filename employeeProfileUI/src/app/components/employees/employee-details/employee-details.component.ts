import { Component, OnInit } from '@angular/core';
import { IEmployee } from 'src/app/models/employee.model';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  employeeDetails: IEmployee;
  constructor() { }

  ngOnInit() {

    if(localStorage.getItem('employeeDetail')) {
      this.employeeDetails = JSON.parse(localStorage.getItem('employeeDetail') || '{}');
      console.log(typeof this.employeeDetails)
      console.log(this.employeeDetails)
    }
  }

}
