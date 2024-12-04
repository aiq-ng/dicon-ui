import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  dropDown:boolean = false;
  showMobileMenu:boolean = false;
  is_mobileMenu:boolean = false;

    menu = [
      {
        "name": "Home Page",
        "icon": "assets/icons/layout.png",
        "route": "/home"
      },
      {
        "name": "AVM MS Usman CSS",
        "icon": "assets/icons/layout.png",
        "route": "/home"
      },
      {
        "name": "FSS-UNN & DIC  PG Programmes",
        "icon": "assets/icons/package.png",
        "route": "/app/products"

      },
      {
        "name": "DIC Gallery",
        "icon": "assets/icons/reciept.png",
        "route": "/app/purchases"

      },
      {
        "name": "News Page",
        "icon": "assets/icons/cart.png",
        "route": "/app/sales"
      },
      {
        "name": "PG Application",
        "icon": "assets/icons/achive.png",
        "route": "/app/inventory-tracker"

      },
      {
        "name": "About us",
        "icon": "assets/icons/achive.png",
        "route": "/about"

      }
    ]

  constructor(private router: Router){}

  ngOnInit() {
  }

  route(page:string){
    this.router.navigate([page]);
  }

  showDropDown(){
    this.dropDown = !this.dropDown
  }

  toggleMobileMenu(){
    console.log('show mobile menu');
    this.showMobileMenu =!this.showMobileMenu;
  }
}
