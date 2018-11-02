import { Injectable, isDevMode } from '@angular/core';
import { RequestOptions, Headers, Http } from '@angular/http';
import { environment } from '../../environments/environment';
import {HttpClient, HttpHeaders, HttpRequest} from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../models/user';

@Injectable({
	providedIn: 'root'
})
export class ApiServiceService {
	token: String = '';
	host = 'https://smile-application-api.herokuapp.com';
	
	constructor(
		private _http: Http,
		private _Newhttp: HttpClient
	) { }

	//User Related Requests

	//Verify Realated Request
	public verifyInviteToken(token) {
		const headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.token });
		const options = new RequestOptions({ headers: headers });
		return this._http.post(this.host + '/users/verify?verify_token=' + token, options)
			.pipe(map(response => response.json()));
	}

	public createUserAccount(token, user: User) {
		const headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token });
		const options = new RequestOptions({ headers: headers });
		return this._http.post(this.host + '/users', user, options)
		.pipe(map(response => response.json()));
	}

	public userSignIn(user: User) {
		const headers = new Headers({ 'Content-Type': 'application/json' });
		const options = new RequestOptions({ headers: headers });
		return this._http.post(this.host + '/users/auth', user, options)
		.pipe(map(response => response.json()));
	}
}
