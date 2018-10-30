import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { ApiServiceService } from './api-service.service';

@Injectable({
	providedIn: 'root'
})
export class VerifyService {
	token: String = '';
	host = 'http://localhost:3000';

	constructor(
		private _APIService: ApiServiceService
	) { }

	verifyInviteToken(token) {
		return this._APIService.verifyInviteToken(token);
	}
}
