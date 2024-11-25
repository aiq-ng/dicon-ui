import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-confirm-delete',
  templateUrl: './confirm-delete.component.html',
  styleUrl: './confirm-delete.component.scss'
})
export class ConfirmDeleteComponent {
  visible: boolean = true;
  @Input() itemToDelete!: string;
  @Input() message!: string;
  @Output() confirmDelete = new EventEmitter();

  loading:boolean = false;

  ngOnInit(){
  }

    showDialog() {
        this.visible = true;
    }

    onDelete() {
      this.confirmDelete.emit();
    }

}
