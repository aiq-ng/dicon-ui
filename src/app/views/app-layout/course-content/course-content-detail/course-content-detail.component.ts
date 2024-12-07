import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpServiceService } from '../../../../services/http-service.service';

@Component({
  selector: 'app-course-content-detail',
  templateUrl: './course-content-detail.component.html',
  styleUrl: './course-content-detail.component.scss'
})
export class CourseContentDetailComponent {
  videos:any;
  open = false
  currentId=0
  courseId:any;

  constructor(private location: Location, private router:Router, private api:HttpServiceService){}




  ngOnInit(){
    this.getVideos(this.getParamsId());
  }

  getParamsId(){
    const url = window.location.href;
    console.log('url', url);
    const segments = url.split('/');
    this.courseId = segments[segments.length - 1];

    return this.courseId;
  }

  getVideos(departmentId:any){
    this.getParamsId()
    this.api.get('courses/' + departmentId + '/videos' ).subscribe(
      res=>{
        this.videos = res
        console.log(this.videos)
      }, err=>{
        console.log(err);
      }
    )
  }

  openChapter(id:number){
    this.open = !this.open;
    this.currentId = id;
  }

  goBack(): void {
    this.location.back();
  }


}
