import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-course-content',
  templateUrl: './course-content.component.html',
  styleUrl: './course-content.component.scss',
  providers: [MessageService]  // Import MessageService to use it in the component
})
export class CourseContentComponent {

  courses:any = []
  confirmDelete:boolean = false;
  addVideo:boolean = false
  files: any;
  imageSrc: any;
  isSubmitted: any;
  uploadForm:any;
  loading: boolean = false;

  constructor(private fb: FormBuilder, private messageService:MessageService){}

  ngOnInit(){
    this.courses = [
      { "course_title": "Global Security and Terrorism", views: Math.floor(Math.random() * 1000), comments: Math.floor(Math.random() * 100), "image": "assets/videos/thumbnail/thumbnail.jpg" },
      { "course_title": "International Trade and Economics", views: Math.floor(Math.random() * 1000), comments: Math.floor(Math.random() * 100), "image": "assets/videos/thumbnail/thumbnail.jpg" },
      { "course_title": "Human Rights and Humanitarian Intervention", views: Math.floor(Math.random() * 1000), comments: Math.floor(Math.random() * 100), "image": "assets/videos/thumbnail/thumbnail.jpg" },
      { "course_title": "Climate Change and Global Governance", views: Math.floor(Math.random() * 1000), comments: Math.floor(Math.random() * 100), "image": "assets/videos/thumbnail/thumbnail.jpg" },
      { "course_title": "Diplomacy and Conflict Resolution", views: Math.floor(Math.random() * 1000), comments: Math.floor(Math.random() * 100), "image": "assets/videos/thumbnail/thumbnail.jpg" },
      { "course_title": "Conflict Resolution", views: Math.floor(Math.random() * 1000), comments: Math.floor(Math.random() * 100), "image": "assets/videos/thumbnail/thumbnail.jpg" }
    ];

    this.uploadForm = this.fb.group({
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

  onFileSelected(event: any): void {
    console.log('selection function hit');

    // Store all selected files
    this.files = Array.from(event.target.files);  // Converts FileList to an array of files

    console.log(this.files);

    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = e => this.imageSrc = reader.result;
      reader.readAsDataURL(file);
    }
  }

  

  toggleConfirmDelete(){
    this.confirmDelete =!this.confirmDelete;
  }
  
  toggleAddVideo(){
    this.addVideo = !this.addVideo;

  }

  get f() {
    return this.uploadForm.controls;
  }
  save() {
    this.showSuccess('Video uploaded successfully')
      this.toggleAddVideo()
    }

    showSuccess(message: string) {
      console.log('showSuccess')
        this.messageService.add({ severity: 'success', summary: 'Success', detail: message });
    }
  
    showError(message: string) {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: message });
    }

}
