import { Component } from '@angular/core';

@Component({
  selector: 'app-staffs',
  templateUrl: './staffs.component.html',
  styleUrl: './staffs.component.scss'
})
export class StaffsComponent {
  addStaff:boolean = false;



  toggleAddStaff(){
    this.addStaff =!this.addStaff;
  }
}
