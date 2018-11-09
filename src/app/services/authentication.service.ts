import { Injectable } from '@angular/core';
import { UsersService } from './users.service';
import { User } from '../models/user';
import { ApiServiceService } from './api-service.service';
import { NavService } from './nav.service';

@Injectable({
	providedIn: 'root'
})
export class AuthenticationService {
	identifier: String = '';
	password: String = '';
	role: any;
	userLoggedin: Boolean = false;

	constructor(
		private usersService: UsersService,
		private APIService: ApiServiceService,
		private navService: NavService
	) { }

	public invalidateUser() {
		localStorage.clear();
		this.navService.redirectUser('', 0, {'invalidate': 'true'});
	}

	public AuthenticateUser() {
		return new Promise((resolve, reject) => {
			this.APIService.UserAuth().subscribe(data => {
				this.usersService.ActiveUser = new User(data.data);
				resolve(data);
			}, err => {
				reject(err);
			});
		})
	}

	userSignin() {
		let values = { identifier: this.identifier,password: this.password	}
		const user:User = new User(values);
		return this.APIService.userSignIn(user);
	}
}
