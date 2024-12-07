import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpServiceService } from '../../../services/http-service.service';

@Component({
  selector: 'app-batches',
  templateUrl: './batches.component.html',
  styleUrl: './batches.component.scss'
})
export class BatchesComponent {

  addBatch:boolean = false;
  departments:any;
  isSubmitted:boolean = false;
  loading:boolean = false;
  createBatchForm:any;
  confirmDelete:boolean = false;
  batches:any = [];

  constructor(private router: Router, private api: HttpServiceService, private fb: FormBuilder){}


  ngOnInit(){
    this.createBatchForm = this.fb.group({
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
    return this.createBatchForm.controls;
  }

  toggleAddBatch(){
    this.addBatch =!this.addBatch;
  }

  toggleConfirmDelete(){
    this.confirmDelete =!this.confirmDelete;
  }

  getBatch(){
    this.api.get('batches').subscribe(
      res=>{
        this.batches = res;
        console.log('batches', this.batches);
      }, err=>{
        console.log(err);
      }
    )
  }

  createBatch(){}


  route(page:string){
    this.router.navigate([page]);
  }
}
