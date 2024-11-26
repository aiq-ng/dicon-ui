import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent {
  addCourse:boolean = false;
  departments:any;
  isSubmitted:boolean = false;
  loading:boolean = false;
  confirmDelete:boolean = false;
  createCourseForm:any;

  constructor(private router: Router, private fb: FormBuilder){}


  ngOnInit(){
    this.createCourseForm = this.fb.group({
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

  toggleAddCourse(){
    this.addCourse =!this.addCourse;
  }

  toggleConfirmDelete(){
    this.confirmDelete =!this.confirmDelete;
  }


  get f() {
    return this.createCourseForm.controls;
  }

  createCourse(){
    this.toggleAddCourse();
  }


  route(page:string){
    this.router.navigate([page]);
  }

}
