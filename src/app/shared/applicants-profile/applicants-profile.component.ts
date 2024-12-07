import { Component } from '@angular/core';

@Component({
  selector: 'app-applicants-profile',
  templateUrl: './applicants-profile.component.html',
  styleUrl: './applicants-profile.component.scss'
})
export class ApplicantsProfileComponent {

  applicant:any = {
    "fullName": "Bello Ahmed Sanusi",
    "gender": "Male",
    "course": "International Relations and Diplomacy",
    "address": "Plot no. 116 Lane number 4 Abuja Crescent",
    "nextOfKin": "Bello Yahya",
    "email": "student@gmail.com",
    "stateOfOrigin": "Jigawa",
    "phoneNumber": "0814412345",
    "localGovernmentArea": "Dutse"
  }

}
