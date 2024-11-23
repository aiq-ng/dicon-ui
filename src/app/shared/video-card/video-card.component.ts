import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-video-card',
  templateUrl: './video-card.component.html',
  styleUrl: './video-card.component.scss'
})
export class VideoCardComponent {

  @Input() videoTitle!: string;
  @Input() videoSrc!: string;
  @Input() displayCount!: boolean;

  @Output() buttonClicked= new EventEmitter();


  onClick(){
    this.buttonClicked.emit();
  }

}
