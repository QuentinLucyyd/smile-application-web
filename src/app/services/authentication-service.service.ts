import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
	providedIn: 'root'
})
export class AuthenticationServiceService {
	role: any;
	id: Number;
	user:User = new User({});

	constructor() { }
}
