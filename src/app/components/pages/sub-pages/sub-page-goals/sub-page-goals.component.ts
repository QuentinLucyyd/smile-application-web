import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Goal } from '../../../../models/goal';
import { GoalsService } from '../../../../services/goals.service';
import { SubPage } from '../../../../classes/abstract/page.class';
import { UsersService } from '../../../../services/users.service';
import { AuthenticationService } from '../../../../services/authentication.service';

@Component({
	selector: 'app-sub-page-goals',
	templateUrl: './sub-page-goals.component.html',
	styleUrls: ['./sub-page-goals.component.scss']
})
export class SubPageGoalsComponent extends SubPage implements OnInit {
	Goals: Goal[] = [];

	constructor(
		private titleService: Title,
		private goalsService: GoalsService,
		private usersService: UsersService,
		private authService: AuthenticationService
	) {super();}

	ngOnInit() {
		this.titleService.setTitle('Smile | Goals');
		this.loading = true;
		this.authService.AuthenticateUser().then(data => {
			this.loading = false;
			console.log(this.usersService.ActiveUser);
			this.goalsService.getUserGoals(this.usersService.ActiveUser.id).subscribe(result => {
				for (let goal of result.data) {
					this.Goals.push(new Goal(goal));
				}
			});
		})
	}
}
