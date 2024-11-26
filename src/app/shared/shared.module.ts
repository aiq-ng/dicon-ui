import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { PrimengModule } from '../primeng/primeng.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SpinnerComponent } from './spinner/spinner.component';
import { MobileMenuComponent } from './mobile-menu/mobile-menu.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SubMenuComponent } from './sub-menu/sub-menu.component';
import { VideoCardComponent } from './video-card/video-card.component';
import { ExamsComponent } from './exams/exams.component';
import { AssignmentComponent } from './assignment/assignment.component';
import { ClassesComponent } from './classes/classes.component';
import { FeesComponent } from './fees/fees.component';
import { CoursesCardComponent } from './courses-card/courses-card.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AddStudentFormComponent } from './add-student-form/add-student-form.component';
import { StudentTableComponent } from './student-table/student-table.component';
import { CreateStudentFormComponent } from './create-student-form/create-student-form.component';
import { ConfirmDeleteComponent } from './confirm-delete/confirm-delete.component';
import { ExamsDetailComponent } from './exams-detail/exams-detail.component';
import { AssignmentDetailComponent } from './assignment-detail/assignment-detail.component';



@NgModule({
  declarations: [
    HeaderComponent,
    SpinnerComponent,
    MobileMenuComponent,
    FooterComponent,
    SidebarComponent,
    SubMenuComponent,
    VideoCardComponent,
    ExamsComponent,
    AssignmentComponent,
    ClassesComponent,
    FeesComponent,
    CoursesCardComponent,
    AppHeaderComponent,
    AddStudentFormComponent,
    StudentTableComponent,
    CreateStudentFormComponent,
    ConfirmDeleteComponent,
    ExamsDetailComponent,
    AssignmentDetailComponent,
  ],
  imports: [
    CommonModule,
    PrimengModule,
    ReactiveFormsModule,
    RouterModule

  ],
  exports: [
    HeaderComponent,
    SpinnerComponent,
    FooterComponent,
    SidebarComponent,
    SubMenuComponent,
    VideoCardComponent,
    ExamsComponent,
    AssignmentComponent,
    ClassesComponent,
    FeesComponent,
    CoursesCardComponent,
    AddStudentFormComponent,
    StudentTableComponent,
    CreateStudentFormComponent,
    ConfirmDeleteComponent,
    ExamsDetailComponent,
    AssignmentDetailComponent,

  ]
})
export class SharedModule {
  constructor(){
    console.log('SharedModule loaded');
  }
}
