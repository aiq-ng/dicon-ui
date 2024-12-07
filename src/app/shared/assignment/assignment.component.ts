import { Component } from '@angular/core';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrl: './assignment.component.scss'
})
export class AssignmentComponent {
  viewStaffAssignment:boolean = false;
  viewStudentAssignment:boolean = false;
  viewer!:string;

  constructor(private storage: StorageService){}

  ngOnInit(){
    let data = this.storage.getJson('user')
    this.viewer = data.account_type
  }



  toggleViewAssignmentDetail(viewer:string) {
    console.log('viewer', viewer)
    if(viewer=='staff'){
      this.viewStaffAssignment =!this.viewStaffAssignment;
      console.log(this.viewStaffAssignment)
    }else if(viewer=='student'){
      this.viewStudentAssignment = !this.viewStudentAssignment;
      console.log(this.viewStaffAssignment)

    }
  }
}
