import { Injectable } from '@angular/core';
import { ApiServiceService } from './api-service.service';
import { Goal } from '../models/goal';
import { resolve } from 'path';
import { reject } from 'q';

@Injectable({
	providedIn: 'root'
})
export class GoalsService {
	Goals: Array<Goal> = [];
	CompletedGoals: Array<Goal> = [];
	RecurringGoals: Array<Goal> = [];
	ActiveGoal: Goal = new Goal({});

	constructor(
		private _APIService: ApiServiceService
	) { }

	public getGoals() {
		return this._APIService.getGoals();
	}

	public getUserGoals(user_id) {
		return new Promise((resolve, reject) => {
			this.CompletedGoals = [];
			this.RecurringGoals = [];
			this.Goals = [];

			this._APIService.getUserGoals(user_id).subscribe(result => {
				for (let goal of result.data) {
					if (goal.frequency === 'Once-off')
						this.Goals.push(new Goal(goal));
					else {
						this.RecurringGoals.push(new Goal(goal));
					}
				}
				resolve(this.Goals);
			}, err => {
				reject(err);
			})
		})
	}

	public createGoal(goal: Goal){
		return this._APIService.createGoal(goal);
	}

	public updateGoal(goal: Goal){
		return this._APIService.updateGoal(goal);
	}
}
