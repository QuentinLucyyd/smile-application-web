import { Injectable } from '@angular/core';
import { ApiServiceService } from './api-service.service';

@Injectable({
	providedIn: 'root'
})
export class CheckinsService {
	checkinDone: Boolean = false;

	constructor(
		private ApiService: ApiServiceService
	) { }

	public getCheckIns() {
		return this.ApiService.getCheckins();
	}

	public getUserCheckins(user_id) {
		return this.ApiService.getUserCheckins(user_id);
	}

	public getUserDateCheckins(user_id, date) {
		return this.ApiService.getUserDateCheckins(user_id, date);
	}
}
