import { Component } from '@angular/core';
import { HttpServiceService } from '../../../services/http-service.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrl: './students.component.scss'
})
export class StudentsComponent {
  data: any;
  options: any=null;
  confirmDelete: boolean = false;
  viewDropOut: boolean = false;
  dropoutData:any=[];
  ActiveStudents:boolean = false;
  activeStudentsData:any=[];
  students:any=[];
  studentsMetrics:any=[];
  addStudent: boolean = false;


  constructor(private api: HttpServiceService){}


  tableHeader = ['Name', 'Department', 'phone_number', 'Enrolement date']

  ngOnInit() {
    this.getStudentMetrics();
    this.getRecentStudent();
    this.getActiveStudent();
    this.getDropout()
  }

  getStudentMetrics(){
    this.api.get('dashboard/student').subscribe(
      res=>{
        this.studentsMetrics=res
        console.log(this.students);
      }, err=>{
        console.log(err);
      }
    )
  }

  getRecentStudent(){
    this.api.get('students/').subscribe(
      res=>{
        this.students=res
        console.log('students', this.students);
      }, err=>{
        console.log(err);
      }
    )
  }

  getActiveStudent(){
    this.api.get('students/?page=1&page_size=10&status=Active').subscribe(
      res=>{
        this.activeStudentsData=res
        console.log('students', this.students);
      }, err=>{
        console.log(err);
      }
    )
  }


  getDropout(){
    this.api.get('students/?page=1&page_size=10&status=Dropout').subscribe(
      res=>{
        this.dropoutData=res
        console.log('students', this.students);
      }, err=>{
        console.log(err);
      }
    )
  }


  viewDropOuts(){
    this.viewDropOut =!this.viewDropOut;
  }

  toggleConfirmDelete(){
    this.confirmDelete =!this.confirmDelete;
  }

  viewActiveStudents(){
    this.ActiveStudents =!this.ActiveStudents;
  }

  showAddStudentForm(){
    console.log('showAddStudentForm')
    // this method is triggers the add student form even though there is nothing it.
    this.addStudent = !this.addStudent;
  }

}
