import { Injectable } from '@angular/core';

import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  result:any;
  URI = "http://localhost:3000";
  constructor(private _http: Http) { }	

  registerUser(user) {
  	let headers = new Headers();
  	headers.append('Content-Type','application/json');
  	return this._http.post(this.URI + '/users/register', user, {headers: headers})
  		.map(res => res.json());
  }

  getUsers() {
    return this._http.get(this.URI + "/users/profiles")
      .map(result => result.json());
  }

}