import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses-card',
  templateUrl: './courses-card.component.html',
  styleUrl: './courses-card.component.scss'
})
export class CoursesCardComponent {
  calender:boolean = false;

  constructor(private router:Router){}
  route(page:string){
    this.router.navigate([page]);
  }

  toggleCalender(){
    this.calender = !this.calender;
  }

}
