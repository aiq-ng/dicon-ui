import { Component } from '@angular/core';

@Component({
  selector: 'app-course-content-detail',
  templateUrl: './course-content-detail.component.html',
  styleUrl: './course-content-detail.component.scss'
})
export class CourseContentDetailComponent {
  courses:any;
  open = false
  currentId=0

  course = [
    {"id":1,"title": "Global Security and Terrorism", "image": 'assets/thumbnail6.jpg'},
    {"id":2,"title": "International Trade and Economics", "image": 'assets/thumbnail2.jpg'},
    {"id":3,"title": "Human Rights and Humanitarian Intervention", "image": 'assets/thumbnail4.jpg'},
    {"id":4,"title": "Climate Change and Global Governance", "image": 'assets/thumbnail4.jpg'},
    {"id":5,"title": "Diplomacy and Conflict Resolution", "image": 'assets/thumbnail4.jpg'}
  ]


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

  openChapter(id:number){
    this.open = !this.open;
    this.currentId = id;
  }


}
