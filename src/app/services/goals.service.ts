import { Injectable } from '@angular/core';
import { ApiServiceService } from './api-service.service';

@Injectable({
	providedIn: 'root'
})
export class GoalsService {

	constructor(
		private _APIService: ApiServiceService
	) { }

	public getGoals() {
		return this._APIService.getGoals();
	}

	public getUserGoals(user_id) {
		return this._APIService.getUserGoals(user_id);
	}
}
