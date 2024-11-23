import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-staff-profile',
  templateUrl: './staff-profile.component.html',
  styleUrl: './staff-profile.component.scss'
})
export class StaffProfileComponent {
  items: MenuItem[] | undefined;
  currentMenu:any = 'courses';

  constructor(private router:Router) {}

  ngOnInit(){
   
  }

  toggleTab(menu:string){
    this.currentMenu = menu;
    console.log(this.currentMenu)
  }


  route(page:string){
    this.router.navigate([page]);
  }

}
