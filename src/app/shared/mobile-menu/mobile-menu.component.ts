import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mobile-menu',
  templateUrl: './mobile-menu.component.html',
  styleUrl: './mobile-menu.component.scss'
})
export class MobileMenuComponent {
  @Output() toggleMenu = new EventEmitter();

  menu = [
    {
      "name": "Home Page",
      "icon": "assets/icons/layout.png",
      "route": "/home"
    },
    {
      "name": "AVM MS Usman CSS",
      "icon": "assets/icons/layout.png",
      "route": "/css"
    },
    {
      "name": "FSS-UNN & DIC  PG Programmes",
      "icon": "assets/icons/package.png",
      "route": "/unndic"

    },
    {
      "name": "DIC Gallery",
      "icon": "assets/icons/reciept.png",
      "route": "/gallery"

    },
    {
      "name": "News Page",
      "icon": "assets/icons/cart.png",
      "route": "/news"
    },
    {
      "name": "PG Application",
      "icon": "assets/icons/achive.png",
      "route": "/pg-application"

    }
  ]

  constructor(private router: Router){}


  route(page:string){
    this.router.navigate([page]);
  }

  onclick(){
    this.toggleMenu.emit();
  }


}
