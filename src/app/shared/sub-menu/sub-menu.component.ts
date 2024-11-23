import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sub-menu',
  templateUrl: './sub-menu.component.html',
  styleUrl: './sub-menu.component.scss'
})
export class SubMenuComponent {
  @Input() pageTitle!: string;
  @Input() itemsCount!: string;
  @Input() addButton!: string;
  @Output() addAction = new EventEmitter();


  onAdd(){
    this.addAction.emit();
  }

}
