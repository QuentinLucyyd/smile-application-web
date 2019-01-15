import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../services/authentication.service';
import { UsersService } from '../../../services/users.service';
import { GoalsService } from '../../../services/goals.service';
import { SubPage } from '../../../classes/abstract/page.class';
import { Goal } from '../../../models/goal';

@Component({
	selector: 'app-element-completed-goals',
	templateUrl: './element-completed-goals.component.html',
	styleUrls: ['./element-completed-goals.component.scss']
})
export class ElementCompletedGoalsComponent extends SubPage implements OnInit {
	_CompletedGoals: Array<Goal> = [];

	constructor(
		private authService: AuthenticationService,
		private usersService: UsersService,
		private goalsService: GoalsService
	) { super(); }

	ngOnInit() {
		this.loading = true;
		this.authService.AuthenticateUser().then(result => {
			this.goalsService.getUserGoals(this.usersService.ActiveUser.id).then(data => {
				this.loading = false;
				for (const goal of this.goalsService.Goals) {
					this.goalsService.getGoalChecklists(goal.id).then(data => {
						goal.populateProgress(data);
						if ((goal.state === 'completed' || goal.checklist_complete)) {
							this._CompletedGoals.push(new Goal(goal));
						}
					})
				}
			}).catch(err => {
				this.loading = false;
				this.failure = true;
				this.resultMessage = 'An error has occured';
			})
		})
		.catch(err => {
			this.loading = false;
			this.failure = true;
			this.resultMessage = 'An error has occured';
		})
	}

}
