import { Component, OnInit } from '@angular/core';
import { GoalsService } from '../../../../services/goals.service';
import { SubPage } from '../../../../classes/abstract/page.class';
import { Goal } from '../../../../models/goal';
import { UsersService } from '../../../../services/users.service';

@Component({
	selector: 'app-modal-add-goal',
	templateUrl: './modal-add-goal.component.html',
	styleUrls: ['./modal-add-goal.component.scss']
})
export class ModalAddGoalComponent extends SubPage implements OnInit {

	frequencies: String[];

	//id: Number;
	name: String = '';
	description: String = '';
	frequency: String = 'Select Frequency:';
	due_date: String;
	state: String = 'ongoing';
	subgoals: Boolean = true;
	priority: String = 'medium';
	user_id: Number;

		constructor(
			private _goalsService: GoalsService,
			private usersService: UsersService
			)
			{ super(); }
	
		ngOnInit() {
			this.frequencies = ["Once-Off","Daily","Weekly","Monthly"]

		}

		createGoal(){
			const goal = {
				//id: this.id,
				name: this.name,
				description: this.description,
				frequency: this.frequency,
				due_date: this.due_date,
				state: this.state,
				subgoals: this.subgoals,
				priority: this.priority,
				user_id: this.usersService.ActiveUser.id
			}
			const _goal: Goal = new Goal(goal);
			console.log(_goal);

			this._goalsService.createGoal(_goal).subscribe(data => {})
		}

		clearFields(){
			this.name = '';
			this.description = '';
			//this.dueDate = Date.now;
		}
}
