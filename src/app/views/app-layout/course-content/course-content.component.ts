import { Component } from '@angular/core';

@Component({
  selector: 'app-course-content',
  templateUrl: './course-content.component.html',
  styleUrl: './course-content.component.scss'
})
export class CourseContentComponent {
  courses:any = []

  ngOnInit(){
    this.courses = [
      { "course_title": "Noma mai dorewa", views: Math.floor(Math.random() * 1000), comments: Math.floor(Math.random() * 100), "image": "assets/videos/thumbnail/thumbnail.jpeg" },
      { "course_title": "Kasuwancin noma", views: Math.floor(Math.random() * 1000), comments: Math.floor(Math.random() * 100), "image": "assets/videos/thumbnail/thumbnail.jpeg" },
      { "course_title": "Kimiyyar Shuka", views: Math.floor(Math.random() * 1000), comments: Math.floor(Math.random() * 100), "image": "assets/videos/thumbnail/thumbnail.jpeg" },
      { "course_title": "Kimiyyar k'asa", views: Math.floor(Math.random() * 1000), comments: Math.floor(Math.random() * 100), "image": "assets/videos/thumbnail/thumbnail.jpeg" },
      { "course_title": "Tattalin Arzikin Noma", views: Math.floor(Math.random() * 1000), comments: Math.floor(Math.random() * 100), "image": "assets/videos/thumbnail/thumbnail.jpeg" },
      { "course_title": "fadada harkar noma", views: Math.floor(Math.random() * 1000), comments: Math.floor(Math.random() * 100), "image": "assets/videos/thumbnail/thumbnail.jpeg" }
    ];;
  }

}
