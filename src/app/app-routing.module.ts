import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DefaultDashboardComponent } from './default-dashboard/default-dashboard.component';
import { TableDataComponent } from './table-data/table-data.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'login',component:LoginComponent},
  { path:'register',component:RegisterComponent},
  {path:'dashboard',component:DashboardComponent,
    children :[
      {path:'',component:DefaultDashboardComponent},
      {path:'table',component:TableDataComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
