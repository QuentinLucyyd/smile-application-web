import { Component, OnInit } from '@angular/core';
import { GoalsService } from '../../../../services/goals.service';
import { SubPage } from '../../../../classes/abstract/page.class';
import { DatePipe } from '@angular/common';
import { Goal } from '../../../../models/goal';
import { Frequency } from '../../../../models/frequency'
import { UsersService } from '../../../../services/users.service';

@Component({
	selector: 'app-modal-add-goal',
	templateUrl: './modal-add-goal.component.html',
	styleUrls: ['./modal-add-goal.component.scss']
})
export class ModalAddGoalComponent extends SubPage implements OnInit {

	frequencies: Frequency[];

	id: Number;
	name: String = '';
	description: String = '';
	selectedFrequency: Number;
	dueDate: Date;
	state: String = 'ongoing';
	subgoals: Boolean = true;
	priority: String = 'medium';
	user_id: Number;

		constructor(
			private _goalsService: GoalsService,
			public datepipe: DatePipe,
			private usersService: UsersService
			)
			{ super(); }
	
		ngOnInit() {
			this.frequencies = [
				{id:1, name:"Once-Off"},
				{id:2, name:"Daily"},
				{id:3, name:"Weekly"},
				{id:4, name:"Monthly"}
			]
			this.selectedFrequency = 4;

		}

		createGoal(){
			const goal = {
				id: this.id,
				name: this.name,
				description: this.description,
				frequency: this.selectedFrequency,
				dueDate: this.dueDate,
				state: this.state,
				subgoals: this.subgoals,
				priority: this.priority,
				user_id: this.usersService.ActiveUser.id
			}
			const _goal: Goal = new Goal(goal);

			console.log(this.selectedFrequency);
			//this._goalsService.createGoal(_goal).subscribe(data => {
			//})
		}

		clearFields(){
			this.name = '';
			this.description = '';
			//this.dueDate = Date.now;
		}
}
