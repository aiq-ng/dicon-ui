import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from './app-layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CoursesComponent } from './courses/courses.component';
import { ApplicationsComponent } from './applications/applications.component';
import { StaffsComponent } from './staffs/staffs.component';
import { StudentsComponent } from './students/students.component';
import { ReportsComponent } from './reports/reports.component';



const routes: Routes = [
  {
    path: 'app',
    component: AppLayoutComponent,
    children: [
      {path: 'dashboard', component: DashboardComponent},
      {path: 'courses', component: CoursesComponent},
      {path: 'applications', component: ApplicationsComponent},
      {path: 'staff', component: StaffsComponent},
      {path: 'students', component: StudentsComponent},
      {path: 'reports', component: ReportsComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppLayoutRoutingModule { }
