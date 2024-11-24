import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpServiceService } from '../../../services/http-service.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-staffs',
  templateUrl: './staffs.component.html',
  styleUrl: './staffs.component.scss',
  providers: [MessageService]  // Add MessageService to your component providers
})
export class StaffsComponent {
  addStaff:boolean = false;
  createProductForm:any;
  isSubmitted: boolean = false;
  files:any;
  loading:boolean = false;
  imageSrc:any;
  accommodationImageSrc:any;
  viewImages:boolean=false;
  loadings:boolean=false;
  genders: any = ['Male', 'Female'];
  courses: any = ['Mathematics', 'Science', 'English', 'Social Studies', 'History', 'Geography'];
  batches: any = ['Batch 1', 'Batch 2', 'Batch 3', 'Batch 4', 'Batch 5'];



  constructor(private fb:FormBuilder,
              private api:HttpServiceService,
              private messageService: MessageService){}


  ngOnInit(){
    this.createProductForm = this.fb.group({
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
    return this.createProductForm.controls;
  }

  save() {
    this.isSubmitted = true;

    console.log(this.createProductForm.value);

    let formData:any = new FormData();

    // Append each file in the files array to FormData
    this.files.forEach((file: any) => {
      formData.append(`media[]`, file, file.name);  // Append each file with the key media[]
    });

    // Append other form data
    formData.append('name', this.createProductForm.get('productName')?.value);
    formData.append('location', this.createProductForm.get('warehouse')?.value);
    formData.append('vendor', this.createProductForm.get('vendor')?.value);
    formData.append('code', this.createProductForm.get('code')?.value);
    formData.append('sku', this.createProductForm.get('sku')?.value);
    formData.append('barcode', this.createProductForm.get('barcode')?.value);
    formData.append('price', this.createProductForm.get('price')?.value);
    formData.append('unit', this.createProductForm.get('unit')?.value);
    formData.append('quantity', this.createProductForm.get('quantity')?.value);

    if (this.createProductForm.invalid) {
      console.log("form invalid");
      return;
    }

    this.api.post('products', formData).subscribe(
      res => {
        console.log(res);
        this.showSuccess('Product created successfully');
        this.createProductForm.reset();
      },
      err => {
        console.log(err);
        this.showError('Failed to create product, please try again');
      }
    );
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

  showSuccess(message: string) {
    console.log('showSuccess')
      this.messageService.add({ severity: 'success', summary: 'Success', detail: message });
  }

  showError(message: string) {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: message });
  }



  toggleAddStaff(){
    this.addStaff =!this.addStaff;
  }
}
