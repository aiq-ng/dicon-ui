import { Component, Input, Output, EventEmitter } from '@angular/core';
import { HttpServiceService } from '../../../../services/http-service.service';
import { StorageService } from '../../../../services/storage.service';

@Component({
  selector: 'app-general-info',
  templateUrl: './general-info.component.html',
  styleUrl: './general-info.component.scss'
})
export class GeneralInfoComponent {
  @Output() viewExams = new EventEmitter();
  @Input() name!:string;
  @Input() profileData:any;

  constructor(private api:HttpServiceService, private storage: StorageService){}

  ngOnInit(){
    // this.getProfile();
  }
  onClick(){
    this.viewExams.emit('click');
    // console.log('child hit')
  }

  // getProfile(){
  //   let uri:any;
  //   let userAccountType = this.storage.getdata('userAccountType')
  //   if(userAccountType?.toLowerCase() === 'student'){
  //     uri='students/courses'
  //   } else{
  //     uri='students/courses?student_id=' + this.studentId
  //   }
  //   this.api.get('students/profile').subscribe(
  //     res=>{
  //       this.profileData = res;
  //       console.log('profile data', this.profileData)

  //     }, err=>{
  //       console.log(err)
  //     }
  //   )
  // }

}
