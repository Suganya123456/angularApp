import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  submitted = false;
  username: string = '';
  password: string = '';
  isUsernameValid: boolean = true;
  textValue: string = '';
  errorMessage: string = '';


  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onKey(event: any, type: string) {
    if (type === 'username') {
      this.username = event.target.value;
      this.validateUsername();
    } else if (type === 'password') {
      this.password = event.target.value;
    }
  }
  validateUsername(): void {
    const pattern = RegExp(/^[\w-.]*$/);
    if (pattern.test(this.username)) {
      this.isUsernameValid = true;
    } else {
      this.isUsernameValid = false;
    }
  }

  onSubmit() {
    if (this.isUsernameValid) {
     // this.loginService.login(this.username, this.password);
     this.router.navigate(['./home']);
     console.log('hiiii');
    }
}
validateUser(event: any)
{
  this.textValue = event;
  if(this.textValue == '')
  {
    this.errorMessage ="Textbox is empty !!!";
  }
  else {
    this.router.navigate(['./home']);
  }
}

goToHome() {
  console.log('Hiiiii');
  this.router.navigate(['./home']);
}
register() {
  console.log('Hiiiii');
  this.router.navigate(['./registration']);
}

}