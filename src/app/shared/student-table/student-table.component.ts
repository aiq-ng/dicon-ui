import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrl: './student-table.component.scss'
})
export class StudentTableComponent {
  @Input() showHeader: boolean = false;
  @Input() tableTitle!: string;
  @Input() students: any[] = [];
  @Input() tableHeader: any[] = [];
  @Output() selectedStudent: EventEmitter<any> = new EventEmitter();

}
