import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DirtycheckComponent } from './dirtycheck/dirtycheck.component';
import { SecondComponent } from './second/second.component';
import { DirtyCheckGuard } from './dirty-check.guard';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  { path: 'dirtycheck', component: DirtycheckComponent, canDeactivate: [DirtyCheckGuard] },
  { path: 'second', component: SecondComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: '', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
