import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-student-form',
  templateUrl: './add-student-form.component.html',
  styleUrl: './add-student-form.component.scss'
})
export class AddStudentFormComponent {
  addStudent: boolean = true;
  @Output() showAddStudentForm = new EventEmitter();
  @Output() onHide = new EventEmitter();

  onClose(){
    this.onHide.emit();
  }




  

}
