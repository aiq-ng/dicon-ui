import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { HttpServiceService } from '../../../services/http-service.service';

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrl: './student-profile.component.scss'
})
export class StudentProfileComponent {
  items: MenuItem[] | undefined;
  currentMenu:any = 'general';
  student_id:any;
  profileData:any;
  StudentCourses:any;
  StudentExams:any;
  StudentAssignment:any;


  constructor(private api:HttpServiceService, private router:Router){}

  ngOnInit(){
    this.getProfile();
    this.getStudentCourses();
    this.getStudentExams()
    this.getStudentAssignment()
  }

  getProfile(){
    let currentUser
    this.api.get('students/profile').subscribe(
      res=>{
        this.profileData = res;
        console.log('profile data', this.profileData)

      }, err=>{
        console.log(err)
      }
    )
  }

  getStudentCourses(){
    let currentUser
    this.api.get('students/courses').subscribe(
      res=>{
        this.StudentCourses = res;
        console.log('student courses', this.StudentCourses)

      }, err=>{
        console.log(err)
      }
    )
  }

  getStudentExams(){
    let currentUser
    this.api.get('students/exams').subscribe(
      res=>{
        this.StudentExams = res;
        console.log('exams data', this.StudentExams)

      }, err=>{
        console.log(err)
      }
    )
  }

  getStudentAssignment(){
    let currentUser
    this.api.get('students/assignments').subscribe(
      res=>{
        this.StudentAssignment = res;
        console.log('exams data', this.StudentAssignment)

      }, err=>{
        console.log(err)
      }
    )
  }

  getParamsId(){
    const url = window.location.href;
    console.log('url', url);
    const segments = url.split('/');
    this.student_id = segments[segments.length - 1];

    return this.student_id;
  }

  toggleTab(menu:string){
    this.currentMenu = menu;
    console.log(this.currentMenu)
  }


  route(page:string){
    this.router.navigate([page]);
  }

}
