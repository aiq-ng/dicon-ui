import { Component } from '@angular/core';

@Component({
  selector: 'app-course-content',
  templateUrl: './course-content.component.html',
  styleUrl: './course-content.component.scss'
})
export class CourseContentComponent {
  courses:any = []
  confirmDelete:boolean = false;

  ngOnInit(){
    this.courses = [
      { "course_title": "Global Security and Terrorism", views: Math.floor(Math.random() * 1000), comments: Math.floor(Math.random() * 100), "image": "assets/videos/thumbnail/thumbnail.jpg" },
      { "course_title": "International Trade and Economics", views: Math.floor(Math.random() * 1000), comments: Math.floor(Math.random() * 100), "image": "assets/videos/thumbnail/thumbnail.jpg" },
      { "course_title": "Human Rights and Humanitarian Intervention", views: Math.floor(Math.random() * 1000), comments: Math.floor(Math.random() * 100), "image": "assets/videos/thumbnail/thumbnail.jpg" },
      { "course_title": "Climate Change and Global Governance", views: Math.floor(Math.random() * 1000), comments: Math.floor(Math.random() * 100), "image": "assets/videos/thumbnail/thumbnail.jpg" },
      { "course_title": "Diplomacy and Conflict Resolution", views: Math.floor(Math.random() * 1000), comments: Math.floor(Math.random() * 100), "image": "assets/videos/thumbnail/thumbnail.jpg" },
      { "course_title": "Conflict Resolution", views: Math.floor(Math.random() * 1000), comments: Math.floor(Math.random() * 100), "image": "assets/videos/thumbnail/thumbnail.jpg" }
    ];
  }


  toggleConfirmDelete(){
    this.confirmDelete =!this.confirmDelete;
  }
  
  toggleAddVideo(){

  }

}
