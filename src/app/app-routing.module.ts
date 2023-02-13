import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from './layouts/container/container.component';
import { LayoutRoutingModule } from './layouts/layouts-routing.module';
import { LoginComponent } from './layouts/login/login.component';
import { RegisterComponent } from './layouts/register/register.component';
import { DashboardComponent } from './layouts/dashboard/dashboard.component';

const routes: Routes = [
  {path : '', redirectTo : '/dashboard', pathMatch : 'full'},
  {path : 'login', component : LoginComponent},
  {path : 'dashboard', component : DashboardComponent},
  {path : 'register', component : RegisterComponent},
  {path : '*', redirectTo : '/dashboard', pathMatch : 'full'},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    LayoutRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
