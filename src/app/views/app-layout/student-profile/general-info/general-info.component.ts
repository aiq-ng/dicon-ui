import { Component, Input, Output, EventEmitter } from '@angular/core';
import { HttpServiceService } from '../../../../services/http-service.service';

@Component({
  selector: 'app-general-info',
  templateUrl: './general-info.component.html',
  styleUrl: './general-info.component.scss'
})
export class GeneralInfoComponent {
  @Output() viewExams = new EventEmitter();
  @Input() name!:string;
  profileData:any;

  constructor(private api:HttpServiceService){}

  ngOnInit(){
    this.getProfile();
  }
  onClick(){
    this.viewExams.emit('click');
    // console.log('child hit')
  }

  getProfile(){
    let currentUser
    this.api.get('students/profile').subscribe(
      res=>{
        this.profileData = res;
        console.log('profile data', this.profileData)

      }, err=>{
        console.log(err)
      }
    )
  }

}
