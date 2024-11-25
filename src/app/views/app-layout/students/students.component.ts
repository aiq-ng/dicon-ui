import { Component } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrl: './students.component.scss'
})
export class StudentsComponent {
  data: any;
  options: any=null;
  viewDropOut: boolean = false;
  ActiveStudents:boolean = false;
  addStudent: boolean = false;
  activeStudents = [
    {
      "department": "Global Security and Terrorism",
      "first_name": "Bello",
      "last_name": "Ahmed",
      "next_of_kin": "Jigawa",
      "state": "Jigawa",
      "LGA": "Dutse",
      "address": "Plot no. 116 Lane number 4 Abuja Crescent",
      "phone_number": "0814412345",
      "email_address": "student@gmail.com",
      "course_start": "17 Jan 2023",
      "course_end": "17 Jan 2023"
    },
    {
      "department": "International Trade and Economics",
      "first_name": "Grace",
      "last_name": "Oluwafemi",
      "next_of_kin": "Lagos",
      "state": "Lagos",
      "LGA": "Ikeja",
      "address": "12 Opebi Road, Ikeja, Lagos",
      "phone_number": "0810123456",
      "email_address": "grace.oluwafemi@gmail.com",
      "course_start": "10 Feb 2023",
      "course_end": "10 Dec 2023"
    },
    {
      "department": "Human Rights and Humanitarian Intervention",
      "first_name": "John",
      "last_name": "Okoro",
      "next_of_kin": "Enugu",
      "state": "Enugu",
      "LGA": "Nsukka",
      "address": "45 University Road, Nsukka",
      "phone_number": "0709876543",
      "email_address": "john.okoro@yahoo.com",
      "course_start": "5 Mar 2023",
      "course_end": "5 Mar 2024"
    }


  ];
  dropouts = [
    
    {
      "department": "Human Rights and Humanitarian Intervention",
      "first_name": "John",
      "last_name": "Okoro",
      "next_of_kin": "Enugu",
      "state": "Enugu",
      "LGA": "Nsukka",
      "address": "45 University Road, Nsukka",
      "phone_number": "0709876543",
      "email_address": "john.okoro@yahoo.com",
      "course_start": "5 Mar 2023",
      "course_end": "5 Mar 2024"
    },
    {
      "department": "Climate Change and Global Governance",
      "first_name": "Aisha",
      "last_name": "Abubakar",
      "next_of_kin": "Kano",
      "state": "Kano",
      "LGA": "Nassarawa",
      "address": "23 Kano Crescent, Nassarawa",
      "phone_number": "0802233445",
      "email_address": "aisha.abubakar@hotmail.com",
      "course_start": "15 Apr 2023",
      "course_end": "15 Oct 2023"
    },
    {
      "department": "Diplomacy and Conflict Resolution",
      "first_name": "David",
      "last_name": "Eze",
      "next_of_kin": "Abuja",
      "state": "FCT",
      "LGA": "Garki",
      "address": "10 Hospital Road, Garki, Abuja",
      "phone_number": "0901122334",
      "email_address": "david.eze@outlook.com",
      "course_start": "20 May 2023",
      "course_end": "20 May 2028"
    }
  ]
  
  

  tableHeader = ['Name', 'Department', 'Status', 'phone_number', 'Enrolement date']

  ngOnInit() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    this.data = {
        labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
        datasets: [

            {
                label: 'Cash Flow',
                data: [800000, 450000, 900000, 1000000, 635000, 245000, 450000, 1200000, 780000, 540000, 1000000],
                fill: true,
                borderColor: documentStyle.getPropertyValue('--blue-500'),
                tension: 0.4,
                backgroundColor: 'rgba(1,66,166,0.2)'
            }
        ]
    };

    this.options = {
      maintainAspectRatio: false,
      aspectRatio: 0.8,
      plugins: {
          legend: {
              labels: {
                  color: textColor
              }
          }
      },
      scales: {
          x: {
              ticks: {
                  color: textColorSecondary
              },
              grid: {
                display: false,
              }
          },
          y: {
              ticks: {
                  color: textColorSecondary
              },
              grid: {
                display: false,
              }
          }
      }
  };
  }

  viewDropOuts(){
    this.viewDropOut =!this.viewDropOut;
  }

  viewActiveStudents(){
    this.ActiveStudents =!this.ActiveStudents;
  }

  showAddStudentForm(){
    console.log('showAddStudentForm')
    // this method is triggers the add student form even though there is nothing it.
    this.addStudent = !this.addStudent;
  }

}
