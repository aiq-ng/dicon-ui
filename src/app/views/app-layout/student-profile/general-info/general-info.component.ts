import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-general-info',
  templateUrl: './general-info.component.html',
  styleUrl: './general-info.component.scss'
})
export class GeneralInfoComponent {
  @Output() viewExams = new EventEmitter();
  @Input() name!:string;



  onClick(){
    this.viewExams.emit('click');
    // console.log('child hit')
  }

}
