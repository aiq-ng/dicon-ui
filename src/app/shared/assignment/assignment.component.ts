import { Component, Input, Output, EventEmitter } from '@angular/core';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrl: './assignment.component.scss'
})
export class AssignmentComponent {
  viewStaffAssignment:boolean = false;
  viewStudentAssignment:boolean = false;
  assignmentDetail = []
  @Input() viewer!:string;
  @Input() assignments:any;


  constructor(private storage: StorageService){}

  ngOnInit(){
    let data = this.storage.getJson('user')
  }


  getAssignmentById(id: any) {
    return this.assignments.find((assignment:any) => assignment.assignment_id === id) || null;
  }


  toggleViewAssignmentDetail(viewer:string, id:any) {
    console.log('viewer', viewer)
    if(viewer=='staff'){
      this.viewStaffAssignment =!this.viewStaffAssignment;
      this.assignmentDetail = this.getAssignmentById(id)
      console.log(this.viewStaffAssignment)
    }else if(viewer=='student'){
      this.viewStudentAssignment = !this.viewStudentAssignment;
      this.assignmentDetail = this.getAssignmentById(id)
      console.log('students assignment detail', this.assignmentDetail)
      console.log(this.viewStaffAssignment)

    }
  }
}
