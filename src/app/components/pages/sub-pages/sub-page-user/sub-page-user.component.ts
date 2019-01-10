import { Component, OnInit } from '@angular/core';
import { SubPage } from 'src/app/classes/abstract/page.class';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user';
import { UsersService } from 'src/app/services/users.service';
import { GoalsService } from 'src/app/services/goals.service';
import { Goal } from 'src/app/models/goal';
import { CheckinsService } from 'src/app/services/checkins.service';
import { Checkin } from 'src/app/models/checkin';

@Component({
	selector: 'app-sub-page-user',
	templateUrl: './sub-page-user.component.html',
	styleUrls: ['./sub-page-user.component.scss']
})
export class SubPageUserComponent extends SubPage implements OnInit {
	username: String = '';
	User: User = new User({});
	Checkins: Array<Checkin> = [];
	CompletedGoals: Array<Goal> = [];

	constructor(
		private titleService: Title,
		private route: ActivatedRoute,
		private usersService: UsersService,
		public goalsService: GoalsService,
		public checkinsService: CheckinsService
	) { super(); }

	ngOnInit() {
		this.username = this.route.snapshot.paramMap.get('id');
		this.titleService.setTitle('Smile | ' + this.username);
		this.loading = true;

		if (!this.usersService.Users.length) {
			this.usersService.getUsers().subscribe(data => {
				if (data.status == "success") {
					this.usersService.Users = data.data;
					this.getUser().then(data => {
						this.loading = false;
					})
					.catch(err => {
						this.loading = false;
						this.failure = true;
					});
				}
			})
		} else
			this.getUser().then(data => {
				this.loading = false;
			})
			.catch(err => {
				this.loading = false;
				this.failure = true;
			});
	}

	getUser() {
		return new Promise((resolve, reject) => {
			for (const user of this.usersService.Users) {
				if (user.username == this.username) {
					this.User = new User(user);
				}
			}
			this.goalsService.getUserGoals(this.User.id).then(data => {
				for (const goal of this.goalsService.Goals) {
					if (goal.checklist_complete)
						this.CompletedGoals.push(goal);
				}
				this.checkinsService.getUserCheckins(this.User.id)
					.subscribe(result => {
						this.Checkins = result.data;
						resolve(data);
					}, err => {
						reject(err);
					});
			})
			.catch(err => {
				reject(err);
			})
		})
	}
}
