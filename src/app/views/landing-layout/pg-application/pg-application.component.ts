import { Component } from '@angular/core';

@Component({
  selector: 'app-pg-application',
  templateUrl: './pg-application.component.html',
  styleUrl: './pg-application.component.scss'
})
export class PgApplicationComponent {
  formStage:any;
  currentStage:any;


  ngOnInit(){
    this.formStage =1;
    this.currentStage = 1;
    console.log(this.formStage)
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
