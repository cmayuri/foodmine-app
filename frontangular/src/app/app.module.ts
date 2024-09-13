import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { UsersComponent } from './components/users/users.component';
import { EmployeesComponent } from './components/employees/employees.component';




@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    EmployeesComponent,
   
   
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderComponent,
    
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
