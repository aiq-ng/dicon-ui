import { MessageService } from 'primeng/api';
import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StorageService } from '../../../services/storage.service';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  providers: [MessageService]

})
export class LoginComponent {
  loginForm!: any;
  isSubmitted: boolean = false;
  loading: boolean = false;
  hidePassword: boolean = true;
  toastType!:string;
  response:any;
  users: any;

  constructor(private auth: AuthService,
              private fb: FormBuilder,
              private router: Router,
              private data: DataService,
              private messageService: MessageService,
              private storage: StorageService){}

  ngOnInit(){
    this.users = this.data.getUsers()
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  get f(){return this.loginForm.controls;}


  validateUser(email: string, password: string): boolean {
    return this.users.some(
      (user:any) => user.email === email && user.password === password
    );
  }

  login(){
    this.isSubmitted = true;
    this.loading = true;
    console.log('login hit')

    if(this.loginForm.invalid){
      this.loading = false;
      return;
    }

    let validateUser = this.validateUser(this.loginForm.get('email').value, this.loginForm.get('password').value);
    console.log() 
    console.log('validate user', validateUser, this.users);
    if(validateUser){
      this.showSuccess('login successfull!')
      let user = this.users.filter((user:any) => user.email === this.loginForm.get('email').value)
      console.log('user', user, user.account_type);
      this.storage.saveJson('user', user[0]);
      if(user[0].account_type == 'student'){
        this.router.navigate(['/app/student-profile/1']);
      }else if(user[0].account_type == 'staff'){
        this.router.navigate(['/app/staff-profile/1']);
      }else if(user[0].account_type == 'admin'){
        this.router.navigate(['/app/dashboard']);
      }
      this.loading = false;
    }else{
      this.showError('Invalid email or password!')
      this.loading = false;
    }

    // this.auth.login(this.loginForm.value).subscribe(
    //   (res) => {
    //     console.log(res);
    //     this.loading = false;
    //     this.response = res;
    //     this.storage.savedata('jwt_token', this.response.data.token)
    //     this.showSuccess('login successfull!')
    //     this.router.navigate(['/app/dashboard']);

    //   },
    //   (err) => {
    //     console.error(err);
    //     this.showError('Invalid email or password!')
    //     this.router.navigate(['/app/dashboard']);
    //     this.loading = false;
    //   }
    // );

  }

  viewPassword(){
    this.hidePassword =!this.hidePassword;
  }

  showSuccess(message:string) {
    console.log(message);
      this.messageService.add({ severity: 'success', summary: 'Success', detail: message });
  }

  showError(message:string) {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: message });
  }

}
