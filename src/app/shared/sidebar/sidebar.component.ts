import { Component } from '@angular/core';
import { StorageService } from '../../services/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  dropdown:boolean = false;
  user: any;

  constructor(private router: Router, private storage: StorageService){}

  ngOnInit(){
    this.user = this.storage.getJson('user');
    console.log('layout check', this.user.email);
  }

  toggleDropdown(){
    this.dropdown =!this.dropdown;
  }

}
