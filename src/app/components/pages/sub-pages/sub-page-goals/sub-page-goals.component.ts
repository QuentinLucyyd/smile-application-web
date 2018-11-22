import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Goal } from '../../../../models/goal';
import { GoalsService } from '../../../../services/goals.service';
import { SubPage } from '../../../../classes/abstract/page.class';
import { UsersService } from '../../../../services/users.service';
import { AuthenticationService } from '../../../../services/authentication.service';
import { Frequency } from 'src/app/models/frequency';

@Component({
	selector: 'app-sub-page-goals',
	templateUrl: './sub-page-goals.component.html',
	styleUrls: ['./sub-page-goals.component.scss']
})
export class SubPageGoalsComponent extends SubPage implements OnInit {
	Goals: Goal[] = [];
	frequencies: Frequency[];

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
			this.goalsService.getUserGoals(this.usersService.ActiveUser.id).subscribe(result => {
				this.loading = false;
				this.success = true;
				for (let goal of result.data) {
				this.Goals.push(new Goal(goal));
				console.log(this.Goals)
			}
			})
		})

		this.frequencies = [
			{id:1, name:"Once-Off"},
			{id:2, name:"Daily"},
			{id:3, name:"Weekly"},
			{id:4, name:"Monthly"}
		  ]
	}

	setActiveGoal(goal){
		this.goalsService.activeGoal = goal;

		// for (const elem in this.frequencies) {
		// 	if (this.goalsService.activeGoal.frequency == elem){
		// 		this.goalsService.activeGoal.selectedFrequency = this.frequencies.indexOf(elem.toString);
		// 	}
		// }
		
		this.frequencies.forEach(function (value) {
			if (value.name == this.goalsService.activeGoal.frequency){
			  console.log("matched with " + value.name);
			  //this.goalsService.activeGoal.selectedFrequency = value.id;
			}
		});
		//console.log(this.goalsService.Goals)
	}
}
