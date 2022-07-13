import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { InfoComponent } from './components/info/info.component';
import { StudentsComponent } from './components/students/students.component';
import { WrapperComponent } from './components/wrapper/wrapper.component';

const routes: Routes = [
  {
    path: '', component: WrapperComponent,
    children:[
        { path: 'dashboard', component:DashboardComponent },
        { path: 'info', component:InfoComponent },
        { path: 'students', component:StudentsComponent }
    ]
  },
  {
      path: '**', redirectTo: 'dashboard', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
