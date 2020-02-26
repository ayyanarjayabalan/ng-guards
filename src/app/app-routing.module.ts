import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DirtycheckComponent } from './dirtycheck/dirtycheck.component';
import { SecondComponent } from './second/second.component';
import { DirtyCheckGuard } from './dirty-check.guard';


const routes: Routes = [
  { path: 'dirtycheck', component: DirtycheckComponent, canDeactivate: [DirtyCheckGuard] },
  { path: 'second', component: SecondComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
