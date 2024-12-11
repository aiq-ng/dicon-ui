import { Component, Input, Output, EventEmitter } from '@angular/core';
import { HttpServiceService } from '../../services/http-service.service';

@Component({
  selector: 'app-exams',
  templateUrl: './exams.component.html',
  styleUrl: './exams.component.scss'
})
export class ExamsComponent {
  viewDropOut:boolean = false;
  examDetail:any;
  @Input() studentId:any;
  @Input() exams:any;
  @Input() examsId:any;

  constructor(private api:HttpServiceService){}

  ngOnInit(){
  }


  getStudentExamsResult(studentId:any){

    this.api.get(`students/exams/results?exam_id=${this.examsId}&student_id=${studentId}`).subscribe(
      res=>{
        this.examDetail = res;
        console.log('exams detail', this.examDetail)

      }, err=>{
        console.log(err)
      }
    )
  }

  toggleViewDropOut(id:any) {
    this.viewDropOut =!this.viewDropOut;
    this.examsId = id;
    this.getStudentExamsResult(id);
  }

}
