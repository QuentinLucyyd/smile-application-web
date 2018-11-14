import { Injectable, isDevMode } from '@angular/core';
import { RequestOptions, Headers, Http } from '@angular/http';
import { environment } from '../../environments/environment';
import {HttpClient, HttpHeaders, HttpRequest} from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../models/user';
import { Goal } from '../models/goal';

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
	
	public createGoal(goal: Goal){
		const headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.token });
		const options = new RequestOptions({ headers: headers });
		return this._http.post(this.host + '/goals', goal, options)
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

	public getUserCheckins(user_id) {
		this.fetchToken();
		const headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.token });
		const options = new RequestOptions({ headers: headers });
		return this._http.get(this.host + '/users/checkins', options)
		.pipe(map(response => response.json()));
	}

	public getUserDateCheckins(user_id, date) {
		this.fetchToken();
		const headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.token });
		const options = new RequestOptions({ headers: headers });
		return this._http.get(this.host + '/users/checkins?search=true&date=' + date, options)
		.pipe(map(response => response.json()));
	}

	// Tools Related Requests

	public getTools() {
		this.fetchToken();
		const headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.token });
		const options = new RequestOptions({ headers: headers });
		return this._http.get(this.host + '/tools', options)
		.pipe(map(response => response.json()));
	}
}
