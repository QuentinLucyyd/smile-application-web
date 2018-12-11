import { Injectable, isDevMode } from '@angular/core';
import { RequestOptions, Headers, Http } from '@angular/http';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders, HttpRequest} from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../models/user';
import { Checkin } from '../models/checkin';
import { Goal } from '../models/goal';
import { Note } from '../models/notes';
import { Checkout } from '../models/checkout';
import { Checklist } from '../models/checklist';

@Injectable({
	providedIn: 'root'
})
export class ApiServiceService {
	token: String = '';
	host = 'http://localhost:3001';
	
	constructor(
		private _http: Http,
		private _Newhttp: HttpClient
	) {	}
	
	fetchToken() {
		this.token = localStorage.getItem('token');
		if (this.token)
			return true;
		return false;
	}

	//User Related Requests

	public getUsers() {
		const headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.token });
		const options = new RequestOptions({ headers: headers });
		return this._http.get(this.host + '/users', options)
			.pipe(map(response => response.json()));
	}

	public updateUserDisplay(displayData: FormData) {
		this.fetchToken();
		const headers = new Headers({'Authorization': 'Bearer ' + this.token });
		const options = new RequestOptions({ headers: headers });
		return this._http.patch(this.host + '/users?display=true', displayData, options)
		.pipe(map(response => response.json()));
	}

	public getUsersSearch(identifier: string) {
		this.fetchToken();
		const headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.token });
		const options = new RequestOptions({ headers: headers });
		return this._http.get(this.host + '/users?search=true&identifier=' + identifier, options)
			.pipe(map(response => response.json()));
	}

	public inviteUser(user: User) {
		this.fetchToken();
		const headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.token });
		const options = new RequestOptions({ headers: headers });
		return this._http.post(this.host + '/users/invite', user, options)
			.pipe(map(response => response.json()));
	}

	public recoverAccount(user: User) {
		const headers = new Headers({ 'Content-Type': 'application/json' });
		const options = new RequestOptions({ headers: headers });
		return this._http.post(this.host + '/users/recover', user, options)
			.pipe(map(response => response.json()));
	}

	public recoverUser(token: String, user: User) {
		const headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token });
		const options = new RequestOptions({ headers: headers });
		return this._http.patch(this.host + '/users/recover', user, options)
			.pipe(map(response => response.json()));
	}

	public subscribeUser(subscription: any) {
		this.fetchToken();
		const headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.token });
		const options = new RequestOptions({ headers: headers });
		return this._http.post(this.host + '/users/subscribe', subscription, options)
			.pipe(map(response => response.json()));
	}
	//Verify Realated Request

	public verifyInviteToken(token) {
		const headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token });
		const options = new RequestOptions({ headers: headers });
		return this._http.post(this.host + '/users/verify?verify_token=' + token, options)
			.pipe(map(response => response.json()));
	}

	public UserAuth() {
		this.fetchToken();
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

	public getGoalChecklists(goal_id) {
		this.fetchToken();
		const headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.token });
		const options = new RequestOptions({ headers: headers });
		return this._http.get(this.host + '/goals/' + goal_id + '/checklists', options)
		.pipe(map(response => response.json()));
	}

	public getUserGoals(user_id) {
		this.fetchToken();
		const headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.token });
		const options = new RequestOptions({ headers: headers });
		return this._http.get(this.host + '/users/' + user_id + '/goals', options)
		.pipe(map(response => response.json()));
	}
	
	public createGoal(goal: Goal){
		const headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.token });
		const options = new RequestOptions({ headers: headers });
		return this._http.post(this.host + '/goals', goal, options)
		.pipe(map(response => response.json()));
	}

	public updateGoal(goal: Goal){
		const headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.token });
		const options = new RequestOptions({ headers: headers });
		return this._http.patch(this.host + '/goals', goal, options)
		.pipe(map(response => response.json()));
	}

	//Checklist Related Requests

	public getAllChecklists(){
		this.fetchToken();
		const headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.token });
		const options = new RequestOptions({ headers: headers });
		return this._http.get(this.host + '/checklists', options)
		.pipe(map(response => response.json()));
	}

	public getUserChecklists(user_id){
		this.fetchToken();
		const headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.token });
		const options = new RequestOptions({ headers: headers });
		return this._http.get(this.host + '/users/' + user_id + '/checklists', options)
		.pipe(map(response => response.json()));
	}

	public createChecklist(checklist: Array<Checklist>){
		this.fetchToken();
		const headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.token });
		const options = new RequestOptions({ headers: headers });
		return this._http.post(this.host + '/checklists', checklist, options)
		.pipe(map(response => response.json()));
	}

	public updateChecklist(checklist: Checklist) {
		this.fetchToken();
		const headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.token });
		const options = new RequestOptions({ headers: headers });
		return this._http.patch(this.host + '/checklists', checklist, options)
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

	public createCheckin(checkin: Checkin) {
		this.fetchToken()
		const headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.token });
		const options = new RequestOptions({ headers: headers });
		return this._http.post(this.host + '/checkins', checkin, options)
		.pipe(map(response => response.json()));
	}

	public getUserCheckins(user_id) {
		this.fetchToken();
		const headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.token });
		const options = new RequestOptions({ headers: headers });
		return this._http.get(this.host + '/users/' + user_id + '/checkins', options)
		.pipe(map(response => response.json()));
	}

	public getUserDateCheckins(user_id, date) {
		this.fetchToken();
		const headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.token });
		const options = new RequestOptions({ headers: headers });
		return this._http.get(this.host + '/users/' + user_id + '/checkins?search=true&date=' + date, options)
		.pipe(map(response => response.json()));
	}

	// Chekout Related Requests

	public getCheckouts() {
		this.fetchToken();
		const headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.token });
		const options = new RequestOptions({ headers: headers });
		return this._http.get(this.host + '/checkouts', options)
		.pipe(map(response => response.json()));
	}

	public createCheckout(checkin: Checkout) {
		this.fetchToken()
		const headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.token });
		const options = new RequestOptions({ headers: headers });
		return this._http.post(this.host + '/checkouts', checkin, options)
		.pipe(map(response => response.json()));
	}

	public getUserCheckouts(user_id) {
		this.fetchToken();
		const headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.token });
		const options = new RequestOptions({ headers: headers });
		return this._http.get(this.host + '/users/' + user_id + '/checkouts', options)
		.pipe(map(response => response.json()));
	}

	public getUserDateCheckouts(user_id, date) {
		this.fetchToken();
		const headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.token });
		const options = new RequestOptions({ headers: headers });
		return this._http.get(this.host + '/users/' + user_id + '/checkouts?search=true&date=' + date, options)
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

	// Voices Related Requests
	public createVoice(formData: FormData) {
		this.fetchToken();
		const headers = new Headers({'Authorization': 'Bearer ' + this.token });
		const options = new RequestOptions({ headers: headers });
		return this._http.post(this.host + '/voices', formData, options)
		.pipe(map(response => response.json()));
	}

	// Note Related Requests

	public getNotes() {
		this.fetchToken();
		const headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.token });
		const options = new RequestOptions({ headers: headers });
		return this._http.get(this.host + '/notes', options)
		.pipe(map(response => response.json()));
	}

	public getUserNotes(user_id) {
		this.fetchToken();
		const headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.token });
		const options = new RequestOptions({ headers: headers });
		return this._http.get(this.host + '/users/'+user_id+'/notes', options)
		.pipe(map(response => response.json()));
	}

	public createUserNote(note : Note){
		this.fetchToken();
		const headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.token });
		const options = new RequestOptions({ headers: headers });
		return this._http.post(this.host + '/notes', note, options)
		.pipe(map(response => response.json()));
	}

	public updateUserNote(note : Note){
		this.fetchToken();
		const headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.token });
		const options = new RequestOptions({ headers: headers });
		return this._http.patch(this.host + '/notes', note, options)
		.pipe(map(response => response.json()));
	}
}
