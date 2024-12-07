import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpServiceService } from '../../../services/http-service.service';

@Component({
  selector: 'app-pg-application',
  templateUrl: './pg-application.component.html',
  styleUrl: './pg-application.component.scss'
})
export class PgApplicationComponent {
  formStage:any;
  currentStage:any;
  applicationForm:any;
  loading:boolean = false;
  programes:any;
  photo: any;
  applyForm: any;

  constructor(private fb: FormBuilder, private api: HttpServiceService){}

  ngOnInit(){
    this.formStage =1;
    this.currentStage = 1;
    console.log(this.formStage)
    this.getProgrames()

    this.applicationForm = this.fb.group({
      // Basic information
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      dob: ['', Validators.required],
      gender: ['', Validators.required],
      programe_id: ['', Validators.required],
    });


  }

  onPhotoSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.photo = input.files[0];
    }
  }

  onApplyFormSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.applyForm = input.files[0];
    }
  }

  get f(){return this.applicationForm.controls}

  save(){
    this.loading = true;

    if(this.applicationForm.invalid){
      console.log('Form is invalid')
      return;
    }

    console.log(this.applicationForm.value)

    let formData = new FormData();

    formData.append('first_name', this.applicationForm.get('first_name').value);
    formData.append('last_name', this.applicationForm.get('last_name').value);
    formData.append('email', this.applicationForm.get('email').value);
    formData.append('phone', this.applicationForm.get('phone').value);
    formData.append('dob', this.applicationForm.get('dob').value);
    formData.append('gender', this.applicationForm.get('gender').value);
    formData.append('phone', this.applicationForm.get('phone').value);
    formData.append('programe_id', this.applicationForm.get('programe_id').value);
    formData.append('photo', this.photo);
    formData.append('application_form', this.applyForm);



    this.api.post('applications/', formData).subscribe(
      res=>{
        console.log(res);
        this.applicationForm.reset();
        this.photo = null;
        this.applyForm = null;
        this.loading = false;
        this.toggleFormStage(1); // Reset form and go to basic info stage
      }
    )
  }

  getProgrames(){
    this.api.get('programs/').subscribe(
      res=>{
        this.programes = res
        console.log('programes', this.programes)
      },
      err=>{
        console.log(err)
      }
    )
  }

  toggleFormStage(stage:number){
    if(stage){
      this.formStage = stage;
      this.currentStage = stage;
    } else {
      this.formStage = 1;
    }
  }

}
