import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-exams-detail',
  templateUrl: './exams-detail.component.html',
  styleUrl: './exams-detail.component.scss'
})
export class ExamsDetailComponent {
  @Input() examDetail:any;

}
