import { Component } from '@angular/core';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrl: './assignment.component.scss'
})
export class AssignmentComponent {
  viewDropOut:boolean = false;



  toggleViewDropOut() {
    this.viewDropOut =!this.viewDropOut;
  }
}
