import { Component } from '@angular/core';

@Component({
  selector: 'app-batches',
  templateUrl: './batches.component.html',
  styleUrl: './batches.component.scss'
})
export class BatchesComponent {

  addBatch:boolean = false;



  toggleAddBatch(){
    this.addBatch =!this.addBatch;
  }
}
