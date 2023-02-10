import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from './layouts/container/container.component';
import { LayoutRoutingModule } from './layouts/layouts-routing.module';

const routes: Routes = [
  {path : '', redirectTo : '/', pathMatch : 'full'},
  {path : '*', redirectTo : '/', pathMatch : 'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    LayoutRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
