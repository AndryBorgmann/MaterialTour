import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DummyComponent } from './shared/dummy/dummy.component';

const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'students', component: DummyComponent},
  {path: 'teachers', component: DummyComponent},
  {path: '**', component: DummyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
