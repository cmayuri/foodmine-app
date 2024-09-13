import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import { EmployeesComponent } from './components/employees/employees.component';

const routes: Routes = [
  {path: 'users', component: UsersComponent},
  {path: '', component: EmployeesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
