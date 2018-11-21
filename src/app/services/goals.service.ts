import { Injectable } from '@angular/core';
import { ApiServiceService } from './api-service.service';
import { Goal } from '../models/goal';
import { resolve } from 'path';
import { reject } from 'q';

@Injectable({
	providedIn: 'root'
})
export class GoalsService {
	Goals: Goal[] = [];
	
	constructor(
		private _APIService: ApiServiceService
	) { }

	public getGoals() {
		return this._APIService.getGoals();
	}

	public getUserGoals(user_id) {
		return 	this._APIService.getUserGoals(user_id);
	}

	public createGoal(goal: Goal){
		return this._APIService.createGoal(goal);
	}
}
