import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrl: './applications.component.scss'
})
export class ApplicationsComponent {
  addApplication:boolean = false;
  createApplicationForm:any;
  isSubmitted: boolean = false;
  confirmDelete: boolean = false;
  loading: boolean = false;
  viewImages:boolean=false;
  viewDetails:boolean=false;
  genders: any = ['Male', 'Female'];
  courses: any = ['Mathematics', 'Science', 'English', 'Social Studies', 'History', 'Geography'];
  batches: any = ['Batch 1', 'Batch 2', 'Batch 3', 'Batch 4', 'Batch 5'];
  students = [
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
  

  tableHeader = ['Name', 'Programe', 'phone_number', 'Enrolement date']

  constructor(private fb: FormBuilder) { }

  ngOnInit(){
    this.createApplicationForm = this.fb.group({
      // Basic information
      productName: ['', Validators.required],
      warehouse: ['', Validators.required],
      vendor: ['', Validators.required],
      code: [''],
      sku: ['', Validators.required],
      image: ['', Validators.required],
      barcode: [''],

      // Sales information
      price: ['', [Validators.required, Validators.min(0)]],

      // Inventory
      quantity: ['', [Validators.required, Validators.min(1)]],
      unit: ['', Validators.required],
    });
  }

  get f() {
    return this.createApplicationForm.controls;
  }

  save(){
    this.toggleAddBatch()
  }

  toggleAddBatch(){
    this.addApplication =!this.addApplication;
  }

  toggleConfirmDelete(){
    this.confirmDelete = !this.confirmDelete;
  }

  toggleViewDetail(){
    this.viewDetails =!this.viewDetails;
  }

  

}
