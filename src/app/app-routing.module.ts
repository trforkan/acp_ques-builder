import { login } from './models/model';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginPortalComponent } from './login-portal/login-portal.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  { path: "", component: LoginPortalComponent },
  { path: "login", component: LoginPortalComponent },
  { path: "dashboard", component: DashboardComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
