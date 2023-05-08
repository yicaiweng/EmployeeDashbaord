import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesListComponent } from './components/employees/employees-list/employees-list.component';
import { EmployeeDetailsComponent } from './components/employees/employee-details/employee-details.component';
import { AddEmployeeComponent } from './components/employees/add-employee/add-employee.component';

const routes: Routes = [
  {
    path: '',
    component: EmployeesListComponent
  },
  {
    path: 'employees-list',
    component: EmployeesListComponent
  },
  {
    path: 'employee-details',
    component: EmployeeDetailsComponent
  },
  {
    path: 'add-employee',
    component: AddEmployeeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
