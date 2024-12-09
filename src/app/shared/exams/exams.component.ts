import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-exams',
  templateUrl: './exams.component.html',
  styleUrl: './exams.component.scss'
})
export class ExamsComponent {
  viewDropOut:boolean = false;
  @Input() exams:any;




  toggleViewDropOut() {
    this.viewDropOut =!this.viewDropOut;
  }

}
