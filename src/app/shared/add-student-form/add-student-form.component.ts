import { Component } from '@angular/core';

@Component({
  selector: 'app-add-student-form',
  templateUrl: './add-student-form.component.html',
  styleUrl: './add-student-form.component.scss'
})
export class AddStudentFormComponent {
  addStudent: boolean = false;


  showAddStudentForm(){
    this.addStudent = !this.addStudent;
  }

}
