import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Users } from 'src/app/users';
import { UserDetailsService } from 'src/app/user-details.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  // registerForm: FormGroup;
  subscription: Subscription = new Subscription();
  loading = false;
  submitted = false;
  // private users: Users[];
  constructor(private router: Router,
    private userDetailsService: UserDetailsService
   ) { }

  ngOnInit(): void {
// this.getUserDetails();
  }
  // register() {
  //   console.log('registered successfully');
  //   this.router.navigate(['./login']);
  // }

  getUserDetails() {
    console.log('registered successfully');
      // this.router.navigate(['./login']);
     }

   
  createUser() {
    console.log('Hello :: ');
      let firstName = (<HTMLInputElement>document.getElementById('firstname')).value;
      let lastName = (<HTMLInputElement>document.getElementById('lastname')).value;
      let phoneNo = (<HTMLInputElement>document.getElementById('mobileno')).value;
      let email = (<HTMLInputElement>document.getElementById('email')).value;
      let user = new Users( firstName, lastName, Number(phoneNo), email);

      console.log('1stname: ', firstName);
      console.log('2ndname: ', lastName);
      console.log('phone: ', phoneNo);
      console.log('email: ', email);
      this.router.navigate(['./login']);
     
this.subscription.add(this.userDetailsService.registerUser())
      // this.userDetailsService.createUsers(user).then(
      // employees => {
      // this.employees = employees;
      // },
      // err => {
      // console.log(err);
      // }
     // );
      
  }

}
