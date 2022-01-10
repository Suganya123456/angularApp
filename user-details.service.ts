import { Injectable } from '@angular/core';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';

import { HttpClientModule } from '@angular/common/http';
// import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs'; 
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
// import { Headers, RequestOptions } from '@angular/http';
import { Users } from './users';


const routes: Routes = [
  // {path: 'api/users', component: RegistrationComponent},
  ];

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {
  private apiUrl = '/api/users';
  constructor(private http: HttpClient) {
   }

   registerUsers(body?: string): Observable<any> {
   let userHeaders = new Headers({ 'Content-Type': 'application/json' });
//   return this.http.post(this.apiUrl, JSON.stringify(body), {responseType: 'application/json'});
   return this.http.post(this.apiUrl, JSON.stringify(body),({ headers: userHeaders }));

   } 

  //  registerUser(user: Users): Promise<Array<Users> {
  //   let empHeaders = new Headers({ 'Content-Type': 'application/json' });
  //   return this.http.post(this.apiUrl, JSON.stringify(user), { headers: empHeaders })
  //   .toPromise()
  //   .then(response => response.json() as Users[])
  //   .catch(this.handleError);
  //   }
    // private handleError(error: any): Promise<Array<any>> {
    //   console.error('An error occurred', error);
    //   return Promise.reject(error.message || error);
    //   }
}
