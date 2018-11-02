import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { ApiServiceService } from './api-service.service';

@Injectable({
	providedIn: 'root'
})
export class UsersService {
	ActiveUser: User = new User({});
	constructor(
		private _APIService: ApiServiceService
	) { }

	createAccount(token, user: User) {
		return this._APIService.createUserAccount(token, user);
	}

}
