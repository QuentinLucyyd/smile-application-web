import { Injectable } from '@angular/core';
import { ApiServiceService } from './api-service.service';
import { Goal } from '../models/goal';
import { resolve } from 'path';
import { reject } from 'q';
import { Checklist } from '../models/checklist';

@Injectable({
	providedIn: 'root'
})
export class GoalsService {
	Goals: Array<Goal> = [];
	ActiveGoal: Goal = new Goal({});
	ActiveChecklist: Array<Checklist> = [];

	constructor(
		private _APIService: ApiServiceService
	) { }

	public getGoals() {
		return this._APIService.getGoals();
	}

	public getGoalChecklists(goal_id){
		return new Promise((resolve, reject) => {	
			this._APIService.getGoalChecklists(goal_id).subscribe(result => {
				resolve(result.data);
			}, err => {
				reject(err);
			})
		})
	}

	public getUserGoals(user_id) {
		return new Promise((resolve, reject) => {
			this.Goals = [];

			this._APIService.getUserGoals(user_id).subscribe(result => {
				for (let goal of result.data) {
					this.Goals.push(new Goal(goal));
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
