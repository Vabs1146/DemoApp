import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from "@angular/common";

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { MaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TableDataComponent } from './table-data/table-data.component';
import { RegisterComponent } from './register/register.component';
import { DefaultDashboardComponent } from './default-dashboard/default-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    TableDataComponent,
    RegisterComponent,
    DefaultDashboardComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    MaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
