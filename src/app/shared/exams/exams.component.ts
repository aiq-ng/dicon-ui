import { Component } from '@angular/core';

@Component({
  selector: 'app-exams',
  templateUrl: './exams.component.html',
  styleUrl: './exams.component.scss'
})
export class ExamsComponent {
  viewDropOut:boolean = false;



  toggleViewDropOut() {
    this.viewDropOut =!this.viewDropOut;
  }

}
