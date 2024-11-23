import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent {
  addCourse:boolean = false;

  constructor(private router: Router){}

  toggleAddCourse(){
    this.addCourse =!this.addCourse;
  }

  route(page:string){
    this.router.navigate([page]);
  }

}
