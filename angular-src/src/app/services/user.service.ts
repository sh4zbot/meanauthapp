import { Injectable } from '@angular/core';

import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  authToken: any;
  user: any;

  URI = "http://localhost:3000";
  constructor(private _http: Http) { }	

  //GETS
  getUsers() {
    return this._http.get(this.URI + "/users/profiles")
      .map(result => result.json());
  }

  getProfile() {
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization',this.authToken);
    headers.append('Content-Type','application/json');
    return this._http.post(this.URI + '/users/profile', {headers: headers})
      .map(res => res.json());
  }

  //POSTS
  registerUser(user) {
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this._http.post(this.URI + '/users/register', user, {headers: headers})
      .map(res => res.json());
  }

  authenticateUser(user) {
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this._http.post(this.URI + '/users/authenticate', user, {headers: headers})
      .map(res => res.json());
  }

  storeUserData(user, token) {
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user; 
  }

  logout() {
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }

  loadToken() {
    this.authToken = localStorage.getItem('id_token');
    this.user = localStorage.getItem('user');
  }

}