import { PrimengModule } from './../../primeng/primeng.module';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppLayoutRoutingModule } from './app-layout-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { AppLayoutComponent } from './app-layout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentsComponent } from './students/students.component';
import { StaffsComponent } from './staffs/staffs.component';
import { CoursesComponent } from './courses/courses.component';
import { ReportsComponent } from './reports/reports.component';
import { ApplicationsComponent } from './applications/applications.component';



@NgModule({
  declarations: [
    AppLayoutComponent,
    DashboardComponent,
    StudentsComponent,
    StaffsComponent,
    CoursesComponent,
    ReportsComponent,
    ApplicationsComponent,

  ],
  imports: [
    CommonModule,
    AppLayoutRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    HttpClientModule,
    PrimengModule,
    FormsModule,
  ]
})
export class AppLayoutModule { }
