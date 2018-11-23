import { Component, OnInit } from '@angular/core';
import { GoalsService } from '../../../../services/goals.service';
import { SubPage } from '../../../../classes/abstract/page.class';
import { DatePipe } from '@angular/common';
import { Goal } from '../../../../models/goal';
import { UsersService } from '../../../../services/users.service';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'app-modal-add-goal',
	templateUrl: './modal-add-goal.component.html',
	styleUrls: ['./modal-add-goal.component.scss']
})
export class ModalAddGoalComponent extends SubPage implements OnInit {
	dateInput: Boolean = false;
	Goal: Goal = new Goal({ user_id: this.usersService.ActiveUser.id });

	constructor(
		private _goalsService: GoalsService,
		public datepipe: DatePipe,
		private usersService: UsersService,
		public activeModal: NgbActiveModal
	)
	{ super(); }
	
	ngOnInit() {
	}

	createGoal(){
		this.loading = true;
		console.log(this.Goal);
		if (!this.Goal.name || !this.Goal.description) {
			this.loading = false;
			this.failure = true;
			this.resultMessage = 'Please ensure that all fields are filled in and valid';
		} else {
			this._goalsService.createGoal(this.Goal).subscribe(data => {
				this.loading = false;
				this.success = true;
				this._goalsService.Goals.push(this.Goal);
			}, err => {
				this.loading = false;
				this.failure = true;
				this.resultMessage = 'An error has occurred, Please try again';
			})
		}
	}

	onChange(event: any) {
		if (this.Goal.frequency !== 'Daily')
			this.dateInput = true;
		else
			this.dateInput = false;
	}

	clearFields(){
		this.Goal = new Goal({ user_id: this.usersService.ActiveUser.id });
	}
}
