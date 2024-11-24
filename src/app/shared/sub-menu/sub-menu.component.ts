import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sub-menu',
  templateUrl: './sub-menu.component.html',
  styleUrl: './sub-menu.component.scss'
})
export class SubMenuComponent {
  @Input() pageTitle!: string;
  @Input() itemsCount!: string;
  @Input() actionName1!: string;
  @Input() actionName2!: string;
  @Input() addButton!: string;
  @Output() addAction = new EventEmitter();
  @Output() action1 = new EventEmitter();
  @Output() action2 = new EventEmitter();


  onAdd(){
    console.log('Add action triggered');
    this.addAction.emit();
  }

  onAction1(){
    this.action1.emit();
  }

  onAction2(){
    this.action2.emit();
  }

}
