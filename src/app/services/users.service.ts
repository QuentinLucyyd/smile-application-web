import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { ApiServiceService } from './api-service.service';

@Injectable({
	providedIn: 'root'
})
export class UsersService {
	id: Number;
	ActiveUser: User = new User({});
	constructor(
		private _APIService: ApiServiceService
	) { }
	
	getUsers() {
		return this._APIService.getUsers();
	}

	getUsersSearch(identifier: string) {
		return this._APIService.getUsersSearch(identifier);
	}

	inviteUser(user: User) {
		return this._APIService.inviteUser(user);
	}

	createAccount(token, user: User) {
		return this._APIService.createUserAccount(token, user);
	}

}
