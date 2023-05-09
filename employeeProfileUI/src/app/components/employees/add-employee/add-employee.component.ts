import { Component, OnInit, NgModule, ViewChild } from '@angular/core';
import {  FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})

export class AddEmployeeComponent implements OnInit {
@ViewChild('Form') addEmployeeForm: NgForm;
  newEmployeeForm: FormGroup;
  newEmployee: any = {};

  constructor(private fb: FormBuilder, private employeeService: EmployeesService) { }

  ngOnInit() {
    this.createEmployeeForm();
  }

  get name() {
    return this.newEmployeeForm.get('name') as FormControl;
  }

  get email() {
    return this.newEmployeeForm.get('email') as FormControl;
  }

  get phone() {
    return this.newEmployeeForm.get('phone') as FormControl;
  }

  get salary() {
    return this.newEmployeeForm.get('salary') as FormControl;
  }

  get department() {
    return this.newEmployeeForm.get('department') as FormControl;
  }

  onSubmit() {
    if(this.newEmployeeForm.valid) {
      this.newEmployee = Object.assign(this.newEmployee, this.newEmployeeForm.value);
      this.employeeService.addEmployee(this.newEmployee);
      this.employeeService.addEmployeestoDB(this.newEmployee)
        .subscribe({ next: (employee) =>
            console.log(employee)
          });
      this.newEmployeeForm.reset();
    }
  }

  createEmployeeForm() {
    this.newEmployeeForm = this.fb.group({
      name: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      phone: [null, [Validators.required, Validators.minLength(10)]],
      salary: [null],
      department: [null, Validators.minLength(2)]
    })
  }
}
