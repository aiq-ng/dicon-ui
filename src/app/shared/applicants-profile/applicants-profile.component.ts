import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-applicants-profile',
  templateUrl: './applicants-profile.component.html',
  styleUrl: './applicants-profile.component.scss'
})
export class ApplicantsProfileComponent {
  @Input() applicant:any;
  @Output() approveApplication=new EventEmitter();
  @Output() rejectApplication=new EventEmitter();

  ngOnInit(){
    console.log('Application', this.applicant)
  }

  onApprove(){
    this.approveApplication.emit();
  }
  onReject(){
    this.rejectApplication.emit();
  }


}
