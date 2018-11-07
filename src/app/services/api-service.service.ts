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
	host = 'http://localhost:3001';
	
	constructor(
		private _http: Http,
		private _Newhttp: HttpClient
	) { }
	
	fetchToken() {
		this.token = localStorage.getItem('token');
		if (this.token)
			return true;
		return false;
	}

	//User Related Requests

	//Verify Realated Request
	public verifyInviteToken(token) {
		const headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token });
		const options = new RequestOptions({ headers: headers });
		return this._http.post(this.host + '/users/verify?verify_token=' + token, options)
			.pipe(map(response => response.json()));
	}

	public UserAuth() {
		this.fetchToken()
		const headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.token });
		const options = new RequestOptions({ headers: headers });
		return this._http.get(this.host + '/users/auth', options)
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

	// Goal Related Requests

	public getGoals() {
		this.fetchToken();
		const headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.token });
		const options = new RequestOptions({ headers: headers });
		return this._http.get(this.host + '/goals', options)
		.pipe(map(response => response.json()));
	}

	public getUserGoals(user_id) {
		this.fetchToken();
		const headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.token });
		const options = new RequestOptions({ headers: headers });
		return this._http.get(this.host + '/users/'+user_id+'/goals', options)
		.pipe(map(response => response.json()));
	}
	
	// Chekin Related Requests

	public getCheckins() {
		this.fetchToken();
		const headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.token });
		const options = new RequestOptions({ headers: headers });
		return this._http.get(this.host + '/checkins', options)
		.pipe(map(response => response.json()));
	}
}
