import { Component, OnInit } from '@angular/core';
import { SubPage } from '../../../classes/abstract/page.class';
import { GoalsService } from '../../../services/goals.service';
import { UsersService } from '../../../services/users.service';
import { AuthenticationService } from '../../../services/authentication.service';
import { Goal } from '../../../models/goal';

@Component({
	selector: 'app-element-upcoming-goals',
	templateUrl: './element-upcoming-goals.component.html',
	styleUrls: ['./element-upcoming-goals.component.scss']
})
export class ElementUpcomingGoalsComponent extends SubPage implements OnInit {
	_RecentGoals: Goal[] = [];

	constructor(
		private goalsService: GoalsService,
		private usersService: UsersService,
		private authenticationService: AuthenticationService
	) { 
		super();
	}

	ngOnInit() {
		this.loading = true;
		this.authenticationService.AuthenticateUser().then(data => {
			this.goalsService.getUserGoals(this.usersService.ActiveUser.id).then(result => {
				this.loading = false;
				this._RecentGoals = this.goalsService.Goals.slice(0, 2);
			})
		}).catch(err => {
			this.failure = true;
			this.resultMessage = 'Something Went Wrong';
		})
	}

}
