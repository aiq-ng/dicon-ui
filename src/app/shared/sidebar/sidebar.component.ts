import { Component } from '@angular/core';
import { StorageService } from '../../services/storage.service';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  dropdown:boolean = false;
  userAccountType: any;
  studentPortal:any;
  staffPortal:any;
  userAcccountId:any;

  constructor(private router: Router, private storage: StorageService, private auth: AuthService){}

  ngOnInit(){
    this.userAccountType = this.storage.getdata('userAccountType')?.toLocaleLowerCase();
    this.studentPortal = '/app/student-profile/' + this.storage.getdata('userAccountId')
    this.studentPortal = '/app/staff-profile/' + this.storage.getdata('userAccountId')
  }

  toggleDropdown(){
    this.dropdown =!this.dropdown;
  }

  route(page:string){
    this.router.navigateByUrl(page)
  }

}
