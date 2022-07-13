import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WrapperComponent } from './components/wrapper/wrapper.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { InfoComponent } from './components/info/info.component';
import { StudentsComponent } from './components/students/students.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [
    WrapperComponent,
    DashboardComponent,
    InfoComponent,
    StudentsComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,

    // Material
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,

  ]
})
export class DashboardModule { }
