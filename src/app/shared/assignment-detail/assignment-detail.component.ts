import { Component, Input, Output, EventEmitter } from '@angular/core';
import { HttpServiceService } from '../../services/http-service.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-assignment-detail',
  templateUrl: './assignment-detail.component.html',
  styleUrl: './assignment-detail.component.scss'
})
export class AssignmentDetailComponent {
@Input() viewer!:string;
@Input() assignmentDetail:any;
isDragging = false; // State for drag-and-drop
  file: File | null = null; // Selected file
  assignmentForm:any;
  loading:boolean = false;

  constructor(private api:HttpServiceService, private fb:FormBuilder){}


  ngOnInit(){
    this.assignmentForm = this.fb.group({
      link: ['', Validators.required],
    })
  }


  save(){}

  // Handle drag over
  onDragOver(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.isDragging = true;
  }

  // Handle drag leave
  onDragLeave(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.isDragging = false;
  }

  // Handle file drop
  onDrop(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.isDragging = false;

    if (event.dataTransfer && event.dataTransfer.files.length > 0) {
      this.file = event.dataTransfer.files[0];
    }
  }

  // Handle file selection
  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.file = input.files[0];
    }
  }
}
